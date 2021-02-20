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

app.$mount('#app');