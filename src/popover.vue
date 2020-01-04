<template>
    <div id="slPopover" @click.stop="xxx" >
        <div class="content-wrapper" v-if="visible" @click.stop> <!-- 阻止冒泡 -->
          <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"slPopover",
    data() {
        return {
            visible:false
        };
    },
    methods: { 
      xxx(){
        this.visible = !this.visible
        if(this.visible == true){
          this.$nextTick(()=>{
            let eventHandler = ()=>{
              this.visible = false
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }
      }
    },
};
</script>

<style scoped lang="scss">
#slPopover{
  .content-wrapper{
    width: 200px;
    height: 100px;
    border: 1px solid red;
  }
}
</style>
