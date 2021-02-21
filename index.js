Vue.component('my-conmponent', {
  data: function(){
    return{
      number: 12
    }
  },
  template: '<p>いいね{{number}}</p>'
})


const app = new Vue({
  el: '#app',
 
})
