<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="acions-wrapper">
      <slot name="acions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "slTabsHead",
  inject: ["eventBus"], //注入。结合tbas(父组件)provide的
  created() {
    // console.log(1);
    // console.log("爷给爸的eventBus", this.eventBus);
  }
};
</script>
<style lang="scss" scoped>
.tabs-head{
  border: 1px solid red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > .acions-wrapper{
    margin-left: auto;
  }
}
</style>
