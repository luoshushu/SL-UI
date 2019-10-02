<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "slTabsItem",
  inject: ["eventBus"], //注入。结合tbas(父组件)provide的
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return { 
        active: this.active,
        disabled:this.disabled
        };
    }
  },
  mounted() {
    // console.log("爷给孙的eventBus", this.eventBus);
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name,this);
    }
  }
};
</script>
<style lang="scss" scoped>
$color: blue;
$disabled-color:grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    color: $color;
  }
  &.disabled{
    color: $disabled-color;
    cursor:not-allowed;
  }
}
</style>