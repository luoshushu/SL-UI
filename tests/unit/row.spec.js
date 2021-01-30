
import Vue from 'vue'
import Row from '../../src/row'
import Col from '../../src/col'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
Vue.component('sl-row', Row)
Vue.component('sl-col', Col)
chai.use(sinonChai)

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
    it('接收 gutter 属性',
        // async
        (done) => {//done 异步执行 没有done为同步执行
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <sl-row gutter="20">
                <sl-col span="12" > </sl-col>
             <sl-col span="12" > </sl-col>
            </sl-row>
            `
            const vm = new Vue({el: div})
            done()
            const rows = vm.$el.querySelectorAll('.row')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(rows[0]).marginLeft).to.eq('-10px');
            expect(getComputedStyle(rows[0]).marginRight).to.eq('-10px');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            vm.$el.remove()
            vm.$destroy()
        })
    it('接收 align 属性', () => {
        const div = document.createElement('div') //创建div
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        vm.$el.remove()
        vm.$destroy()
    })
})