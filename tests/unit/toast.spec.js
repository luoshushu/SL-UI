
import Vue from 'vue'
import Toast from '../../src/toast'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
chai.use(sinonChai)


describe('Toast', () => {
  //  BDD 行为驱动测试
  it('存在.', () => {
    expect(Toast).to.exist;
  })
  describe('props 测试', () => {
    const Constructor = Vue.extend(Toast);
    let vm
    it('接收 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.equal(false);
        vm.$destroy(); //销毁
        done() //异步处理

      })
    })
    it('接收 closeButton', (done) => {
      const callback = sinon.fake(); //函数使用 sinon测试
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭哟',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.equal('关闭哟'); //期待 html值等于 关闭哟
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        vm.$destroy(); //销毁
        done()
      }, 200);
    })

    it('接收 enableHtml', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<p id="test" > 测试HTML </p>']
      vm.$mount()
      // 测试是否有HTML，只要看能不能获取到它的标签或者id class就可以了
      let p = vm.$el.querySelector('#test')
      expect(p).to.exist;
    })
    it('接收 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'middle'
        }
      }).$mount()
      // 看class上是否有 position-middle 就可以了
      expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    })


  })


})
