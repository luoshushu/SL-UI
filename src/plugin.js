// 用户主动使用Vue.use(plugin)
import Toast from './toast'
export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message] //插槽
      toast.$mount() //必须$mount()  手动地挂载一个未挂载的实例
      document.body.appendChild(toast.$el)
    }
  }
}