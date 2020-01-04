<template>
  <div id="slPopover" @click.stop="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
      <!-- 阻止冒泡 -->
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "slPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    // 定位
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
      //   window.scrollX 解决有滚动条的情况下，定位不准的问题
      this.$refs.contentWrapper.top = top + window.scrollX + "px";
      this.$refs.contentWrapper.left = left + window.screenY + "px";
    },
    onClickDocument(e){
        if ( this.$refs.popover && (this.$refs.popover === e.target ||  this.$refs.popover.contains(e.target))) return;
        this.close()
    },
    // 关闭
    close(){
        this.visible = false
        document.removeEventListener("click", this.onClickDocument);
    },
    // 打开
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
         document.addEventListener("click", this.onClickDocument);
      });
    },
    onClick(event) {
      if(this.$refs.triggerWrapper.contains(event.target)){
          if (this.visible == true) {
            this.close()
          }else{
            this.open()
          }
      }
    }
  }
};
</script>

<style scoped lang="scss">
#slPopover {
}
.content-wrapper {
  border: 1px solid red;
  transform: translateY(-100%);
}
</style>
