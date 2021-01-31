const app = new Vue({
  el: '#app',
  data: {
    message: 'apple'
  },
  methods: {
    sayHi() {
      this.message = 'Hello'
      return 'Hi'
    }
  }
})