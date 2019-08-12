<template>
  <div class="col" :class="[span && `col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type:[String,Number]
    }
  }
}
</script>
<style lang="scss" scoped>
.col{
  height: 100px;
  background: darkolivegreen;
  width: 50%;
  border: 1px solid red;

  $class-prefix:col-; //css前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
