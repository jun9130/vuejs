const app = new Vue({
  el: '#app',
  data: {
    message: "OK"
  }
})

// app.message = "書き換えられました"

const app2 = new Vue({
  el: '#app2',
  data: {
    message: "こんにちは"
  },
  methods: {
    changeMessage1: function() {
      // 外部からappにアクセス
      app.message = 'インスタンス2から変えました'
    }
  }
})