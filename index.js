Vue.component('date', {
  data: function() {
    return {
      today: '1999/04/01'
    }
  },
  mounted: function() {
    const now = new Date();
    this.today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
  },
  template: '<div>{{ today }}</div>'

})

const app = new Vue({
  el: "#app",
})