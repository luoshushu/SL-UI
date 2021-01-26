<template>
  <div class="sl-input" :class="{ error }">
    <input
      v-bind="$attrs"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @change="$emit('change', $event.target.value)"
      @click="$emit('click', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @input="$emit('input', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error" />
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "slInput",
  components: { Icon },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "var";
.sl-input {
  font-size: $font-size;
  display: inline-block;
  display: inline-flex;
  align-items: center;
  font-weight: 400;

  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    color: #333333;
    caret-color: #4a90e2;
    font-weight: 400;
    height: 38px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    outline: none;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      // box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  > input::placeholder {
    color: #b9b9b9;
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>

