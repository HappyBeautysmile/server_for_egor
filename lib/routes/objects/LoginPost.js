'use strict';

const ioc = require('laic').laic.casServer;
const log = ioc.lib.get('logger').child({component: 'LoginPost'});
const config = ioc.get('config');
const authPlugins = ioc.get('plugins').auth;
const theme = ioc.get('plugins').theme;
const ticketRegistry = ioc.get('plugins').ticketRegistry;

const introduce = require('introduce')(__dirname);
const checkService = introduce('../../checkService');

/**
 * Provides methods needed for parsing a `/login` POST request.
 *
 * @private
 * @param {object} request Hapi request object
 * @param {object} reply Hapi reply object
 * @constructor
 */
function LoginPost(request, reply) {
  this.request = request;
  this.reply = reply;

  this.authenticated = false;
  this.service = null;
}

LoginPost.prototype.authenticate = function* auth(username, password) {
  for (const p of authPlugins) {
    try {
      log.debug('authenticating');
      yield p.validate(username, password);
      log.debug('user authenticated successfully');
      this.authenticated = true;
      break;
    } catch (e) {
      log.debug('login credentials rejected');
      log.debug('message: %s', e.message);
    }
  }
  return this.authenticated;
};

LoginPost.prototype.checkService = function* cs(service) {
  this.service = service;
  return yield *checkService(service);
};

LoginPost.prototype.invalidateLoginTicket = function* ivlt(ticketId) {
  let ticket;
  try {
    ticket = yield ticketRegistry.invalidateLT(ticketId);
    log.debug('login ticket invalidated: %s', ticket.tid);
  } catch (e) {
    log.error('could not invalidate login ticket: %s', ticketId);
    return this.reply(theme.internalError({
      errorMessage: 'ticket invalidation failed'
    })).code(500);
  }
  return ticket;
};

LoginPost.prototype.loginTicket = function* lt(ticketId) {
  let ticket;
  try {
    ticket = yield ticketRegistry.getLT(ticketId);
    if (new Date(ticket.expires) < new Date()) {
      throw new Error('login ticket expired');
    }
    log.debug('login ticket validated');
  } catch (e) {
    log.error('invalid login ticket: %s', ticketId);
    this.request.session.errorMessage = 'invalid login ticket';
    return this.reply().redirect(this.redirectPath());
  }
  return ticket;
};

LoginPost.prototype.redirectPath = function redirPath() {
  return (this.service) ?
    `/login?service=${encodeURIComponent(this.service)}` : '/login';
};

LoginPost.prototype.serviceTicket = function* st(tgt) {
  if (!this.service) {
    return null;
  }

  let ticket;
  try {
    ticket = yield ticketRegistry.genST(
      tgt.tid,
      new Date(Date.now() + config.tickets.serviceTicketTTL)
    );
    log.debug('got st with id: %s', ticket.tid);
  } catch (e) {
    log.error('could not generate st');
    return this.reply(theme.internalError({
      errorMessage: 'service ticket generation failed'
    })).code(500);
  }
  return ticket;
};

LoginPost.prototype.ticketGrantingTicket = function* tgt(loginTicket, username) {
  let ticket;
  try {
    ticket = yield ticketRegistry.genTGT(
      loginTicket.tid,
      username,
      new Date(Date.now() + config.tickets.ticketGrantingTicketTTL)
    );
    log.debug('got tgt with id: %s', tgt.tid);
  } catch (e) {
    log.error('could not generate tgt');
    return this.reply(theme.internalError({
      errorMessage: 'ticket granting ticket generation failed'
    })).code(500);
  }
  return ticket;
};

module.exports = LoginPost;