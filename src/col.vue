<template>

  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
  <div style="  height: 100px;
  background: darkolivegreen;  border: 1px solid red;">
    <slot></slot>
  </div>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type:[String,Number]
    },
    offset:{
     type:[String,Number]
    }
  },
  data() {
    return {
      gutter:0
    }
  },
}
</script>
<style lang="scss" scoped>
.col{

  width: 50%;
 

  $class-prefix:col-; //css前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix:offset-; //css前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
