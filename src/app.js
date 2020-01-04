import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabsPane from './tabs-pane'
import TabsItem from './tabs-item'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'

import Popover from './popover'

import plugin from './plugin'
Vue.use(plugin)

Vue.component('sl-button',Button)
Vue.component('sl-icon',Icon)
Vue.component('sl-button-group',ButtonGroup)
Vue.component('sl-input',Input)
Vue.component('sl-row',Row)
Vue.component('sl-col',Col)

Vue.component('sl-tabs',Tabs)
Vue.component('sl-tabs-pane',TabsPane)
Vue.component('sl-tabs-item',TabsItem)
Vue.component('sl-tabs-head',TabsHead)
Vue.component('sl-tabs-body',TabsBody)

Vue.component('sl-popover',Popover)


new Vue({
  el: '#app',
  data:{
    selectedTab:'1',
    loading1:false,
    loading2:false,
    something:'苏宋霖'
  },
  methods: {
    inputChange(e){
      console.log('inputChange');
      console.log(e);
    }
  },
  mounted() {
  
  },
  methods: {
    clickToast1(){this.clickToast('top')},
    clickToast2(){this.clickToast('middle')},
    clickToast3(){this.clickToast('bottom')},
    clickToast(position){
      this.$toast(`操作成功！！  ${parseInt(Math.random()*100) }`,{
        position,
        enableHtml:false,
        closeButton:{
          text:'知道了',
          callback(){
            console.log('回调'); 
          }
        },
        autoClose:3, 
        })
    }
  },
});

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect  = chai.expect

// // 单元测试
// try {
// // 测试按钮包含 icon
// {  
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'previous'
//     }
//   }) 
//   vm.$mount('#test') //动态成功按钮 挂载到#test div上
//   let useElement =  vm.$el.querySelector('use') //找button中的 use元素
//   console.log(useElement);
//   let href=  useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-previous') //期待href 等于#i-previous
//   vm.$el.remove() //删除
//     vm.$destroy() //销毁实例
// }
// // 测试loading
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'previous',
//       loading:true
//     }
//   }) 
//   vm.$mount() //动态成功按钮 挂载到内存上
//   let useElement =  vm.$el.querySelector('use') //找button中的 use元素
//   console.log(useElement);
//   let href=  useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading') //期待href 等于#i-previous
//     // 成功之后清空button
//     vm.$el.remove() //删除
//     vm.$destroy() //销毁实例
// }

// // 测试order
// {
//  const div = document.createElement('div') 
//  document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'previous'
//     }
//   }) 
//   vm.$mount(div) //必须挂载到页面上 否则使用不了order 
//   let svg =  vm.$el.querySelector('svg') //找button中的 use元素
//   let {order}  = window.getComputedStyle(svg)
//   expect(order).to.eq('1') //期待href 等于#i-previous
//   // 成功之后清空button
//   vm.$el.remove() //删除
//   vm.$destroy() //销毁实例
// } 
// {
//  const div = document.createElement('div') 
//  document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'previous',
//       iconPosition:'right'
//     }
//   }) 
//   vm.$mount(div) //必须挂载到页面上 否则使用不了order 
//   let svg =  vm.$el.querySelector('svg') //找button中的 use元素
//   let {order}  = window.getComputedStyle(svg)
//   expect(order).to.eq('2') //期待href 等于#i-previous
//   // 成功之后清空button
//   vm.$el.remove() //删除
//   vm.$destroy() //销毁实例
// }
// // 测试点击 click 
// // moke
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon:'previous',
//       iconPosition:'right'
//     }
//   }) 
//   vm.$mount() 
//   let spy = chai.spy(function(){})
//   vm.$on('click',spy)
//   let button = vm.$el
//   // 希望间谍被调用
//   button.click()
//   expect(spy).to.have.been.called()
  
// }


  
// } catch (error) {
//   window.errors  = [error]
  
// }finally{
//   window.errors && window.errors.map( (error)=>{
//     console.error(error.message);
    
//   })
// }