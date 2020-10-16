<template>
  <div>
    <sl-button>我不爱css</sl-button>
    <sl-button @click=" loading1 = !loading1" icon="xiazai" :loading="loading1" icon-position="left">我不爱css</sl-button>
    <sl-button @click=" loading2 = !loading2" icon="set" :loading="loading2" icon-position="right">我不爱css</sl-button>
    <sl-button-group>
      <sl-button icon="previous" icon-position="left">上一页</sl-button>
      <sl-button icon-position="right">更多</sl-button>
      <sl-button icon="next" icon-position="right">下一页</sl-button>
    </sl-button-group>
    <pre>
          <code>
                  {{content}}
          </code>
      </pre>
  </div>
</template>

<script>
  import SlButton from "../../../src/button/button";
  import SlButtonGroup from "../../../src/button/button-group";
  export default {
    name: "button-demo",
    components: {
      SlButton,
      SlButtonGroup
    },
    props: {},
    data() {
      return {
        loading1: false,
          loading2: false,
        content: `
          <sl-button>我不爱css</sl-button>
          <sl-button @click=" loading1 = !loading1" icon="xiazai" :loading="loading1" icon-position="left">我不爱css</sl-button>
          <sl-button @click=" loading2 = !loading2" icon="set" :loading="loading2" icon-position="right">我不爱css</sl-button>
          <sl-button-group>
            <sl-button icon="previous" icon-position="left">上一页</sl-button>
            <sl-button icon-position="right">更多</sl-button>
            <sl-button icon="next" icon-position="right">下一页</sl-button>
          </sl-button-group>
          
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

