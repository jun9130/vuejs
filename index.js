const app = new Vue({
  el:'#app',
  data: {
    number: 0
  },
  methods: {
    addOne: function() {
      this.number += 1
    }
  }
});