const app = new Vue({
  el: '#app',
  data: {
    fruits:['りんご', 'ばなな', 'ぶどう']
  },
  methods: {
    remove: function() {
      this.fruits.shift()
    }
  }
})