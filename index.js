Vue.component('my-conmponent', {
  data: function(){
    return{
      number: 12
    }
  },
  template: '<p>いいね{{number}} <button v-on:click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
})


const app = new Vue({
  el: '#app',
 
})
