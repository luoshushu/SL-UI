import Vue from 'vue'
import Button from './button'
import icon from './icon'

Vue.component('sl-button',Button)
Vue.component('sl-icon',icon)

new Vue({
  el: '#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false,
  }
});