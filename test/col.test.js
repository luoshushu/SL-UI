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
describe('Col', () => {
  //  BDD 行为驱动测试
  it('存在.', () => {
    expect(Col).to.exist;
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        offset: 2
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-2')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 PC 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        pc: {span:1,offset:1}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 ipad 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        ipad: {span:1,offset:1}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-ipad-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 narrow-pc 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        narrowPc: {span:1,offset:1}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 wide-pc 属性', () => {
    const div = document.createElement('div') //创建div
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        widePc: {span:1,offset:1}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-wide-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

})