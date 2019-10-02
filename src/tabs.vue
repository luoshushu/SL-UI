<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "slTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    // 切换方向
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if(vm.$options.name === 'slTabsHead'){
        vm.$children.forEach(childVm=>{
          if(childVm.$options.name === 'slTabsItem' && childVm.name === this.selected){
           this.eventBus.$emit('update:selected',this.selected,childVm)
          }  
        })
      }
      
    });
    // console.log("eventBus", this.eventBus);
    // console.log("this", this);
    // this.$emit('update:selected',this)
  }
};
</script>
<style lang="scss" scoped>
.tabs{}
</style>