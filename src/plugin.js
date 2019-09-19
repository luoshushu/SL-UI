// 用户主动使用Vue.use(plugin)
import Toast from './toast'
let currentToast
export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastOptions){
      if(currentToast){ currentToast.close()} //如果有Toast就删除上一个
      currentToast = createToast({Vue,message,propsData:toastOptions,
        onClose:()=>{
          currentToast= null // 关闭时把currentToast设为null
        }
      })
    }
  }
}



// 帮助
function createToast({Vue,message,propsData,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message] //插槽
  toast.$mount() //必须$mount()  手动地挂载一个未挂载的实例
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
}