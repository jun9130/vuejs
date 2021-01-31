const app = new Vue({
  el: '#app',
  data: {
    message: 'apple'
  },
  methods: {
    UpperCase: function() {
      this.message = this.message.toUpperCase()
    },
    LowerCase: function() {
      this.message = this.message.toLowerCase()
    }
  }
})