
 import chai, { expect } from 'chai'
 import sinon from 'sinon'
 import sinonChai from 'sinon-chai'
 import { shallowMount, mount } from '@vue/test-utils'
 import Button from '../../src/button'
 import Vue from 'vue'
 chai.use(sinonChai)
/**
 * 
 * xxx它会死
 * describe 'xxx'
 *  it has a head  
 *
 *  
 */ 
 describe('Button', () => {
    //  BDD 行为驱动测试
     it('存在.', () => {
         expect(Button).to.be.ok
     })
     it('可以设置icon.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings'
         }
         }).$mount()
         const useElement = vm.$el.querySelector('use')
         expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
         vm.$destroy() //清理
     })
     it('可以设置loading.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
         vm.$destroy()
     })
     it('icon 默认的 order 是 1', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('1')
         vm.$el.remove()
         vm.$destroy()
     })
     it('设置 iconPosition 可以改变 order', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'right'
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('2')
         vm.$el.remove()
         vm.$destroy()
     })
     it('点击 button 触发 click 事件', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount()

         const callback = sinon.fake();// fake 假函数 知道自己有没有被调用
         vm.$on('click', callback)
         vm.$el.click()
        // 期待回调被调用
         expect(callback).to.have.been.called

     })
 })
