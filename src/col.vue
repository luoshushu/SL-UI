<template>
  <div class="col" :class="colCalss" :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },
    colCalss() {
      let { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  
  width: 50%;
  $class-prefix: col-; //css前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-; //css前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
