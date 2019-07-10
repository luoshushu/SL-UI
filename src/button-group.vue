<template>
  <div class="sl-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {

    for (let node  of this.$el.children) {
      let name =  node.nodeName.toLowerCase()
      // console.log(node)
      if(name !== 'button'){
        console.warn(`sl-button-group 的子元素应该是 sl-button, 但你写的是 ${name} 元素`);
        
      }
      
    }
  },
}
</script>
<style lang="scss">
.sl-button-group{
  display: inline-flex;
  vertical-align: top;
  > .sl-button{
    border-radius: 0;
    &:not(:first-child){ /* 如果不是第一个子元素*/
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }

}

</style>
