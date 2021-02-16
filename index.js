const data = {
  message: "OK",
  name: "ito"
}

const app = new Vue({
  el: '#app',
  data: data
})


console.log(data);

console.log(data === app.$data);