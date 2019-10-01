<template>
  <div>
    
  </div>
</template>
<script>
export default {
  name:'slTabs',
  props:{
    selected:{
      type:String,
      required:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value) >= 0
      }
    }

  },
  created() {
    this.$emit('update:selected',this)
  },
}
</script>