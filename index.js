/**
 * inertia hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */
module.exports = function defineFlashHook(sails) {
  return {
    initialize: async function () {
      if (!sails.hooks.session) {
        var err = new Error('`flash` hook requires the `session` hook, but the `session` hook is disabled.  Please enable both or neither.');
        err.code = 'E_HOOKINIT_DEP';
        err.name = 'failed requires `session` hook';
        return cb(err);
      }

      sails.after('hook:session:loaded', () => {
          const flash = require('connect-flash')
          sails.hooks.http.app.use(flash())
      })

  }
  }
}
