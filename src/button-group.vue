<template>
  <div class="sl-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.sl-button-group{
  display: inline-flex;
  vertical-align: top;
  > .sl-button{
    border-radius: 0;
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }

}

</style>
