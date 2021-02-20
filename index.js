var data = {
  message: 'こんにちは',
  name: 'さとう'
}

Vue.component('hello', {
  template: '<p>コンポーネント</p>'
});






var app = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})

app.$mount('#app')


new Vue({
  el: '#app2',
  data: {
    name: 'しおだ'
  },
  template: ' <h1>こんにちは、{{name}}さん</h1>'
})

new Vue({
  data: {
    name: 'しおだ'
  },
  render: function(createElement) {
    console.log(createElement('h1', 'こんにちは、' + this.name　+ 'さん'));
    return createElement('h1', 'こんにちは、' + this.name　+ 'さん');
  },
}).$mount('#app3')



// 補足
const div = document.createElement('div');
console.log(div);
console.log(document);
console.dir(document);


new Vue({
  el: '#app4',
  data: {
    name: '山本'
  },
  beforeCreate: function() {
    console.log('beforeCreate')
  },
  created: function() {
    console.log('Created')
  },
  beforeMount: function() {
    console.log('beforeMount')
  },
  mounted: function() {
    console.log('mounted')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate')
  },
  Updated: function() {
    console.log('Updated')
  },
  beforeDestroy: function() {
    console.log('beforeDestroy')
  },
  destroyed: function() {
    console.log('destroyed')
  },
  methods: {
    destroy: function(){
      this.$destroy()
    }
  }
})

