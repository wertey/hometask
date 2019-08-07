import Vue from 'vue';
import App from './App.vue';



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
