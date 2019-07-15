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
import spies from 'chai-spies'
chai.use(spies)
const expect  = chai.expect

// 单元测试
{  
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'previous'
    }
  }) 
  vm.$mount('#test') //动态成功按钮 挂载到#test div上
  let useElement =  vm.$el.querySelector('use') //找button中的 use元素
  console.log(useElement);
  let href=  useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-previous') //期待href 等于#i-previous
}
// 测试loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'previous',
      loading:true
    }
  }) 
  vm.$mount() //动态成功按钮 挂载到内存上
  let useElement =  vm.$el.querySelector('use') //找button中的 use元素
  console.log(useElement);
  let href=  useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading') //期待href 等于#i-previous
    // 成功之后清空button
    vm.$el.remove() //删除
    vm.$destroy() //销毁实例
}

// 测试order
{
 const div = document.createElement('div') 
 document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'previous'
    }
  }) 
  vm.$mount(div) //必须挂载到页面上 否则使用不了order 
  let svg =  vm.$el.querySelector('svg') //找button中的 use元素
  let {order}  = window.getComputedStyle(svg)
  expect(order).to.eq('1') //期待href 等于#i-previous
  // 成功之后清空button
  vm.$el.remove() //删除
  vm.$destroy() //销毁实例
} 
{
 const div = document.createElement('div') 
 document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'previous',
      iconPosition:'right'
    }
  }) 
  vm.$mount(div) //必须挂载到页面上 否则使用不了order 
  let svg =  vm.$el.querySelector('svg') //找button中的 use元素
  let {order}  = window.getComputedStyle(svg)
  expect(order).to.eq('2') //期待href 等于#i-previous
  // 成功之后清空button
  vm.$el.remove() //删除
  vm.$destroy() //销毁实例
}
// 测试点击 click 
// moke
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'previous',
      iconPosition:'right'
    }
  }) 
  vm.$mount() 
  let spy = chai.spy(function(){})
  vm.$on('click',spy)
  let button = vm.$el
  // 希望间谍被调用
  button.click()
  expect(spy).to.have.been.called()
}