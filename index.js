var data = {
  message: 'こんにちは',
  name: 'さとう'
}

var app = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    name: 'しおだ'
  },
  template: ' <h1>こんにちは、{{name}}さん</h1>'
})

app.$mount('#app');