module.exports = {
  name: 'babel',
  hooks: [
    'migrator:migration:hook:require',
  ],
  'migrator:migration:hook:require': function() {
    require('babel-register');
  },
  loadPlugin: function() {},
};
