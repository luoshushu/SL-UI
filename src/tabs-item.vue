<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "slTabsItem",
  inject: ["eventBus"], //注入。结合tbas(父组件)provide的
  data() {
    return {
      active:false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name:{
      type:String|Number,
      required:true
    }
  },
  computed: {
    classes(){
      return  {active: this.active}
    }
  },
  mounted() {
    // console.log("爷给孙的eventBus", this.eventBus);
    this.eventBus.$on('update:selected',(name)=>{
       this.active = name === this.name
    })
  },
  methods: {
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  },
};
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 2em;
   &.active{
    background: darkgreen;
  }
}

</style>