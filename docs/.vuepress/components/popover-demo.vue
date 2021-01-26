<template>
  <div>
    <div class="title">popover</div>
    <sl-popover v-model="isPopover" position="top" trigger="click">
      <div slot="content">哈哈哈哈</div>
      <sl-button>点击在上</sl-button>
    </sl-popover>
    <sl-popover v-model="isPopover" position="bottom" trigger="click">
      <div slot="content">哈哈哈哈</div>
      <sl-button>点击在下</sl-button>
    </sl-popover>
    <sl-popover v-model="isPopover" position="left" trigger="click">
      <div slot="content" slot-scope="{ close }">
        <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
        <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
        <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
        <sl-button @click="close">关闭</sl-button>
      </div>
      <sl-button>点击在左</sl-button>
    </sl-popover>
    <sl-popover v-model="isPopover" position="right" trigger="click">
      <div slot="content">哈哈哈哈</div>
      <sl-button>点击在右</sl-button>
    </sl-popover>
    <pre>
            <code>
                    {{content}}
            </code>
        </pre>
  </div>
</template>

<script>
import SlPopover from "../../../src/popover";
import SlButton from "../../../src/button/button";
export default {
  name: "popver-demo",
  components: {
    SlPopover,
    SlButton,
  },
  props: {},
  data() {
    return {
      isPopover: false,
      content: `
          <sl-popover v-model="isPopover" position="top" trigger="click">
        <div slot="content">哈哈哈哈</div>
        <sl-button>点击在上</sl-button>
      </sl-popover>
      <sl-popover v-model="isPopover" position="bottom" trigger="click">
        <div slot="content">哈哈哈哈</div>
        <sl-button>点击在下</sl-button>
      </sl-popover>
      <sl-popover v-model="isPopover" position="left" trigger="click">
        <div slot="content" slot-scope="{close}">
          <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
          <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
          <div>哈哈哈哈哈哈哈哈哈哈哈哈</div>
          <sl-button @click="close">关闭</sl-button>
        </div>
        <sl-button>点击在左</sl-button>
      </sl-popover>
      <sl-popover v-model="isPopover" position="right" trigger="click">
        <div slot="content">哈哈哈哈</div>
        <sl-button>点击在右</sl-button>
      </sl-popover>   
            `,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
#demo {
  background: aliceblue;
}
.test {
  background: aqua;
}
</style>

