const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false;
Vue.component('sl-popover', Popover)

describe('Popover', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('设置position', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <sl-popover  position="top"  ref="popover">
        <div slot="content"> 哈哈哈哈</div>
            <button>点击在右</button>
        </sl-popover>
        `
        let vm = new Vue({ el: div })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                const { contentWrapper } = vm.$refs.popover.$refs
                expect(contentWrapper.classList.contains('position-top')).to.be.true
                done()
            })
        })
    })

    xit('设置trigger ',()=>{
        // 暂时跳过
    })
    //  it('可设置v-model', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({}).$mount()
    //      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //      vm.$destroy() //清理
    //  })

})
