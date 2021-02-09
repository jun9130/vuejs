const app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    color: 'red',
    bg: 'blue'
  },
  computed: {
    classObject: function() {
      return { 
        red: this.isActive, 
        'blue': !this.isActive 
      }
     }
    }
  })