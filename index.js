// If you're looking to write your own db-migrate plugin, you may be interested
// in https://github.com/db-migrate/pkgkit

Object.assign(exports, {
  name: 'babel',
  hooks: [
    'file:hook:require',
  ],
  loadPlugin: function() {
    exports['file:hook:require'] = function() {

      try {
        require('@babel/register');
      }
      catch (error) {

        try {
          require('babel-register');
        }
        catch (ex) {
          throw new Error("You must install either babel-register or @babel/register");
        }
      }
    };

    // loadPlugin can be called multiple times, so we unload it here to save precious cycles
    // https://github.com/db-migrate/node-db-migrate/pull/388#issuecomment-252415666
    delete exports['loadPlugin'];
  },
});
