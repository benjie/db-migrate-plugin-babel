// If you're looking to write your own db-migrate plugin, you may be interested
// in https://github.com/db-migrate/pkgkit

Object.assign(exports, {
  name: 'babel',
  hooks: [
    'migrator:migration:hook:require',
  ],
  loadPlugin: function() {
    exports['migrator:migration:hook:require'] = function() {
      require('@babel/register');
    };

    // loadPlugin can be called multiple times, so we unload it here to save precious cycles
    // https://github.com/db-migrate/node-db-migrate/pull/388#issuecomment-252415666
    delete exports['loadPlugin'];
  },
});
