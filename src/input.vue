<template>
  <div class="sl-input">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text">
  <template v-if="error">
    <icon name="error" class="icon-error" />
    <span class="errorMessage">{{error}}</span>
  </template>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name:'slInput',
  components:{Icon},
  props:{
    value:{
      type:String
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,

    }
  }
 
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover:#666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color:rgba(0,0,0,.5);
$red:#f14530;
.sl-input{
  font-size: $font-size;
  display: inline-block;
      display: inline-flex;
    align-items: center;
  *{margin-right:.5em;}
  > input{
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #ccc;
      color: #ccc;
      cursor:not-allowed;
    }
  }
  & .error{
    > input{
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMessage{
    color: $red;
    
  }
  
  
  

}
</style>

