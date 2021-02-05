const app = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  computed: {
    doubleCounterComputed: function() {
      return this.counter * 2    
    }
  },
  methods: {
    countUp: function() {
      this.counter += 1;
  },
    doubleCounterMethods: function() {
      return this.counter * 2;
    }
  }
})