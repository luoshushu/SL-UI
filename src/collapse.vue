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
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String
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
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on('update:selected',(name)=>{
        console.log(name);
      this.$emit("update:selected", name);
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
