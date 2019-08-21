console.log("hello vue")
const Vue = require("vue")
const renderVue = require("hypernova-vue").renderVue

// const MyComponentX = Vue.extend({
//   template: '<h1>hello world</h1>'
// })

const a = Vue.extend({
  template: `<h1>oláaaaaaa mundo</h1>`,
  mounted: function() {
    window.console.log('mounted');
  },
  beforeDestroy: function(){
    window.console.log('beforeDestroy');
  },
});

module.exports = renderVue("VueComponent.js", a)

// import { renderVue, Vue } from 'hypernova-vue'
// import CompTeste from './components/HeaderCCompTesteomponent.vue'

// const CompTeste = Vue.extend(CompTeste)

// export default renderVue("VueComponent.js", CompTeste)