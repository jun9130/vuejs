const data = {
  message: "OK",
  name: "ito"
}

const app = new Vue({
  el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})


console.log(data);

console.log(data === app.$data);