<template>
  <div>
    <sl-button>按钮</sl-button>
    <sl-button :loading="true" >按钮</sl-button>
    <pre>
        <code>
                {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import SlButton from "../../../src/button";
export default {
  name: "button-demo",
  components: {
    SlButton
  },
  props: {},
  data() {
    return {
        content:`
        <sl-button>按钮</sl-button>
        <sl-button :loading="true" >按钮</sl-button>`
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

