const app = new Vue({
  el: '#app',
  data: {
    isActive: true
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