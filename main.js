const app = new Vue({
  //options
  el: '#app',
  data: {
    message: "Hello Vue.js!",
    count: 0,
    toggle: true,
    show: true,
    user: {
      lastName: 'taro',
      firstName: 'koyama',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green','Blue']
  }
  })