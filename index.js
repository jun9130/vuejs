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