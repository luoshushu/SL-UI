<template>
  <div id="slPopover" ref="popover">
    <!-- 阻止冒泡 -->
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
      @click.stop
    >
      <slot name="content" :close="close"></slot>
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
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
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
  mounted() {
    const { popover } = this.$refs;
    if (this.trigger === "click") {
      popover.addEventListener("click", this.onClick);
    } else {
      popover.addEventListener("mouseenter", this.open);
      popover.addEventListener("mouseleave", this.close);
    }
  },
  deactivated() {
    const { popover } = this.$refs;
    if (this.trigger === "click") {
      popover.removeEventListener("click", this.onClick);
    } else {
      popover.removeEventListener("mouseenter", this.open);
      popover.removeÎEventListener("mouseleave", this.close);
    }
  },
  methods: {
    // 定位
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();
      let { height: height2 } = contentWrapper.getBoundingClientRect();
      //   window.scrollX 解决有滚动条的情况下，定位不准的问题
      let a = {
        top: {
          top: top + window.scrollY,
          left: left + window.screenX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.screenX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.screenX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.screenX + width
        }
      };
      contentWrapper.style.top = a[this.position].top + "px";
      contentWrapper.style.left = a[this.position].left + "px";
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
      border-bottom: none;
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
      border-top: none;
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
      border-right: none;
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
      border-left: none;
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
