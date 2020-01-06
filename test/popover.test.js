const expect = chai.expect;
 import Vue from 'vue'
 import Popover from '../src/popover'

 Vue.config.productionTip = false
 Vue.config.devtools = false;


 describe('Popover', () => {
    //  BDD 行为驱动测试
     it('存在.', () => {
         expect(Popover).to.be.ok
     })
    //  it('可设置v-model', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({}).$mount()
    //      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //      vm.$destroy() //清理
    //  })

 })
