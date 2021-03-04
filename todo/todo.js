// const app = new Vue({
//   el: '#app',
//   data: {
//     items: [
//       { title: '掃除をする', isChecked: true },
//       { title: 'ランニング', isChecked: true },
//       { title: '買い物に行く', isChecked: true }
//     ],
//     newItemTitle: ""
//   },
//   methods: {
//     addTodo: function() {
//       this.items.push({
//         title: this.newItemTitle,
//         isChecked: false
//       });
//       this.newItemTitle = "";
//     },
//     deleteTodo: function(){
//       this.items = this.items.filter(function (item) {
//         return item.isChecked === false;
//       });
//     },
//   }
// })

const vm = new Vue({
  el: '#demo',
  data: {
    show: true
  }
})