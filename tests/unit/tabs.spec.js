
import Vue from 'vue'
import Tabs from '../../src/tabs'
import TabsPane from '../../src/tabs-pane'
import TabsItem from '../../src/tabs-item'
import TabsHead from '../../src/tabs-head'
import TabsBody from '../../src/tabs-body'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'

Vue.component('sl-tabs',Tabs)
Vue.component('sl-tabs-pane',TabsPane)
Vue.component('sl-tabs-item',TabsItem)
Vue.component('sl-tabs-head',TabsHead)
Vue.component('sl-tabs-body',TabsBody)

chai.use(sinonChai)



 describe('tabs', () => {
    //  BDD 行为驱动测试
     it('存在.', () => {
         expect(Tabs).to.be.ok
     })
     it('接受 selected 属性', async () => {
       const div = document.createElement('div')
       document.body.appendChild(div)
       div.innerHTML = `
          <sl-tabs selected="1" >
            <sl-tabs-head>
              <template slot="acions">设置</template>
              <sl-tabs-item name="1">靓仔</sl-tabs-item>
              <sl-tabs-item name="2" disabled>财经</sl-tabs-item>
              <sl-tabs-item name="3">冲浪</sl-tabs-item>
            </sl-tabs-head>
            <sl-tabs-body>
              <sl-tabs-pane name="1">广西靓仔</sl-tabs-pane>
              <sl-tabs-pane name="2">相关财经</sl-tabs-pane>
              <sl-tabs-pane name="3">网速冲浪</sl-tabs-pane>
            </sl-tabs-body>
          </sl-tabs>
       `
     let vm  =  new Vue({el:div})
       vm.$nextTick(()=>{
        let x = vm.$el.querySelector('.tabs-item[data-name="1"]')
        expect(x.classList.contains('active')).to.be.true
        // done()
       })
     })

    it('接受 direction',()=>{

    })
  
 })
