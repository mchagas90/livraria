var hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'MyComponent.js') {
      return require('./app/javascript/my_vue_component.js');
    }
    return null;
  },

  port: 3030,
});