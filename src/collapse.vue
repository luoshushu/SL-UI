<template>
  <div id="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "slCollapse",
  components: {},
  props: {
    //   是否只打开一个
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on('update:addSelected',(name)=>{
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if(selectedCopy){
        selectedCopy= [name]
      }else{
        selectedCopy.push(name)
      }
      this.$emit("update:selected", selectedCopy);
       this.eventBus.$emit("update:selected", selectedCopy);
    })
    this.eventBus.$on('update:removeSelected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index,1)
        this.$emit("update:selected",selectedCopy);
         this.eventBus.$emit("update:selected", selectedCopy);
    })
  },
  methods: {}
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
#collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
