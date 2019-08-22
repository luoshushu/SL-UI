const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

/**
 * mocha 提供 describe it
 * sinon 提供 fake
 * chai 提供 expect
 * sinon-chai 提供 calledWith
 */
describe('Row', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Row).to.exist;
    })
    // it('接收 gutter 属性', () => {
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const RowConstructor = Vue.extend(Row)
    //   const row  = new RowConstructor({
    //     propsData:{
    //       gutter:10
    //     }
    //   })
    //   const ColConstructor = Vue.extend(Col)
    //   const col = new ColConstructor()
    //   col.$mount(row)
    //     expect(Row).to.exist;
    // })


})
