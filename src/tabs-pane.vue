<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "slTabsPane",
  inject: ["eventBus"], //注入。结合tbas(父组件)provide的
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  mounted() {
    // console.log("爷给pane的eventBus", this.eventBus);
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: rgba(0,0,0,0.3);
  }
}
</style>