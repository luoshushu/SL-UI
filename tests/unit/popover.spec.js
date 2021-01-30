
import Popover from '../../src/popover.vue'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
chai.use(sinonChai)

describe('Popover', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('设置position', (done) => {
        // Popover出来之后 再设置position ？？ 可能需要异步执行
        const wrapper = mount(Popover, {
            slots: {
                default: { template: `<button id="button">点我</button>` },
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom'
            }
        })
        // https://stackoverflow.com/questions/57915235/button-click-test-failing-with-jest-vuejs
        wrapper.find('#button').trigger('click')
        done()
        // 展示popover需要时间 所以使用这种方式测试
        let classes = wrapper.find('.sl-content-wrapper').classes()
        expect(classes).to.include('position-bottom')
        wrapper.$destroy()
    })

    xit('设置trigger ', () => {
        // 暂时跳过
    })
    //  it('可设置v-model', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({}).$mount()
    //      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //      vm.$destroy() //清理
    //  })

})
