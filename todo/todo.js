const app = new Vue({
  el: '#app',
  data: {
    items: [ ],
    newTask: ''
  },
  methods: {
    addTask: function(){
      this.items.push({
        task: this.newTask,
        checked: false
      });
      this.newTask = '';
    },
    deleteTask: function(){
      this.items = this.items.filter(function (item) {
        return item.checked === false; 
      });
    }
  }
})