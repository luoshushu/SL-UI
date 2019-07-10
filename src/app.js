import Vue from 'vue'
import Button from './button'
import icon from './icon'
import buttonGroup from './button-group'

Vue.component('sl-button',Button)
Vue.component('sl-icon',icon)
Vue.component('sl-button-group',buttonGroup)

new Vue({
  el: '#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false,
  }
});