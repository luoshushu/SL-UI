<template>
  <div id="slPopover" @click.stop="onClick" ref="popover">
    <!-- 阻止冒泡 -->
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "slPopover",
  props: {
    value: Boolean
  },
  data() {
    return {
      visible: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.visible = val;
        this.$emit("input", val);
      }
    }
  },
  methods: {
    // 定位
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
      //   window.scrollX 解决有滚动条的情况下，定位不准的问题
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      this.$refs.contentWrapper.style.left = left + window.screenX + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      )return;
      this.close();
    },
    // 关闭
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    // 打开
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible == true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
#slPopover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow( 0 1px 1px rgba(0, 0, 0, 0.5));
  background: #fff;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all; 
  &::before,&::after{
    content: '';
    display: block;
    border: 1px solid red;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
    border: 10px solid transparent;
  }
  &::before{
    top: 100%;
    border-top-color:#000; 
  }
  &::after{
    top: calc(100% - 1px);
    border-top-color:#fff; 
  }
}
</style>
