<template>
  <div id="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickclose">
              {{closeButton.text}}
            </span>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      // 自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 关闭时间
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      // 是否支持html
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.execAutoClose()
      this.updateStyle()
    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000);
        }
      },
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close() {
        this.$el.remove() //删除
        this.$destroy() //清除绑定的一些事件
      },
      onClickclose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $toast-min-height:40px;
  $toast-bg:rgba(0, 0, 0, 0.75);
  #toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    color: white;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>