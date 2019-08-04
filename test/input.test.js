const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false


 describe('Input', () => {
    //  BDD 行为驱动测试
     it('存在.', () => {
         expect(Input).exist
     })
    
 })
