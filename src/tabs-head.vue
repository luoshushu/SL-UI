<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="acions-wrapper">
      <slot name="acions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "slTabsHead",
  inject: ["eventBus"], //注入。结合tbas(父组件)provide的
  mounted() {
    this.eventBus.$on('update:selected',(item,vm)=>{
        console.log(item);
        console.log(vm.$el);
        let {width,height,top, left}  = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
    })
    // console.log("爷给爸的eventBus", this.eventBus);
  }
};
</script>
<style lang="scss" scoped>
$tab-height:40px;
$color: blue;
$border-color:#ddd;
.tabs-head{
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $color;
    transition: all 300ms;
  }
  > .acions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
