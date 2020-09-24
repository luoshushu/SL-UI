
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import Input from '../../src/input'
chai.use(sinonChai)
/**
 * mocha 提供 describe it
 * sinon 提供 fake
 * chai 提供 expect
 * sinon-chai 提供 calledWith
 */
describe('Input', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Input).to.exist;
    })
    describe('props 测试', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy(); //销毁
        })
        it('接收 value值', () => {
            vm = new Constructor({
                propsData: {
                    value: '苏宋霖'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('苏宋霖'); //期待value等于 苏宋霖
            vm.$destroy(); //销毁
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true); //期待disabled等于 true
            vm.$destroy(); //销毁
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true); //期待readonly等于 true
            vm.$destroy(); //销毁
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错啦'
                }
            }).$mount()
            const useElements = vm.$el.querySelectorAll('use')
            expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-error') //测试icon
            const errorMessage = vm.$el.querySelector('.errorMessage') //测试内容
            expect(errorMessage.innerText).to.equal('你错啦'); //期待error的内容等于 你错啦
            vm.$destroy(); //销毁
        })
    })
    describe('事件测试', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy(); //销毁
        })
        it('changg/click/blur/focus/input', () => {
            ['change', 'click', 'blur', 'focus', 'input'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callBack = sinon.fake();
                vm.$on(eventName, callBack)
                let event = new Event(eventName)
                Object.defineProperty(
                    event,
                    'target',
                    {
                        value: { value: '苏宋霖' },
                        enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event) //dispatchEvent 模拟触发事件
                // expect(callBack).to.have.been.calledWith(event);
                expect(callBack).to.have.been.calledWith('苏宋霖');
            })
        })
    })

})
