<template>
  <div id="slPopover" @click.stop="onClick" ref="popover">
    <!-- 阻止冒泡 -->
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
      @click.stop
    >
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
    value: Boolean,
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
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
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();
      //   window.scrollX 解决有滚动条的情况下，定位不准的问题
      if (this.position === "top") {
        contentWrapper.style.top = top + window.scrollY + "px";
        contentWrapper.style.left = left + window.screenX + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.top = top + height + window.scrollY + "px";
        contentWrapper.style.left = left + window.screenX + "px";
      } else if (this.position === "left") {
        contentWrapper.style.left = left + window.screenX + "px";
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      } else if (this.position === "right") {
        contentWrapper.style.left = left + window.screenX + width + "px";
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      }
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      )
        return;
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
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: #fff;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    // border: 1px solid red;
    width: 0;
    height: 0;
    position: absolute;
    border: 10px solid transparent;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      top: 100%;
      border-top-color: #000;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: #fff;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: #000;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: #fff;
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: #000;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: #fff;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: #000;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: #fff;
    }
  }
}
</style>
