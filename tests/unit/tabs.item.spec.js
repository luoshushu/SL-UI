
 import Vue from 'vue'

import Tabs from '../../src/tabs'
import TabsPane from '../../src/tabs-pane'
import TabsItem from '../../src/tabs-item'
import TabsHead from '../../src/tabs-head'
import TabsBody from '../../src/tabs-body'
 Vue.component('sl-tabs',Tabs)
 Vue.component('sl-tabs-pane',TabsPane)
 Vue.component('sl-tabs-item',TabsItem)
 Vue.component('sl-tabs-head',TabsHead)
 Vue.component('sl-tabs-body',TabsBody)

 import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
chai.use(sinonChai)

 describe('TabsItem', () => {
    //  BDD 行为驱动测试
     it('存在.', () => {
         expect(TabsItem).to.be.ok
     })
     it('接受 disabled 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
        console.log(vm.$el.outerHTMl);
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
     })

     it('接受 name 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData: {
          name: 'xxx'
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
     })

  
 })
