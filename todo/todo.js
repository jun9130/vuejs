const app = new Vue({
  el: '#app',
  data: {
    items: [
      {task: 'ランニングをする', checked: false},
      {task: '掃除をする', checked: false},
      {task: 'お弁当を作る', checked: false}
    ],
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
  }
})