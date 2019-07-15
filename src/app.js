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
  }
});

import chai from 'chai'
const expect  = chai.expect
{  
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'previous'
    }
  }) 
  button.$mount('#test') //动态成功按钮 挂载到#test div上
  let useElement =  button.$el.querySelector('use') //找button中的 use元素
  console.log(useElement);
  let href=  useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-previous')

}