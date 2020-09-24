<template>
  <div>
    <div class="title">网格布局Row/Col</div>
    <sl-row>
      <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
        <div id="demo">hh</div>
      </sl-col>
      <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
        <div id="demo">hh</div>
      </sl-col>
      <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
        <div id="demo">hh</div>
      </sl-col>
    </sl-row>
    <sl-row gutter="20" align="left">
      <sl-col span="12">
        <div class="test">12312</div>
      </sl-col>
      <sl-col span="12">
        <div class="test">12312</div>
      </sl-col>
    </sl-row>
    <pre>
            <code>
                    {{content}}
            </code>
        </pre>
  </div>
</template>

<script>
  import SlRow from "../../../src/row";
  import SlCol from "../../../src/col";
  export default {
    name: "row-col-demo",
    components: {
      SlRow,
      SlCol
    },
    props: {},
    data() {
      return {
        something: "苏宋霖",
        content: `
  <sl-row>
    <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
      <div id="demo">hh</div>
    </sl-col>
    <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
      <div id="demo">hh</div>
    </sl-col>
    <sl-col :span="24" :narrow-pc="{span:8}" :ipad="{span:8}">
      <div id="demo">hh</div>
    </sl-col>
  </sl-row>
  <sl-row gutter="20" align="left">
    <sl-col span="12">
      <div class="test">12312</div>
    </sl-col>
    <sl-col span="12">
      <div class="test">12312</div>
    </sl-col>
  </sl-row>       
            `
      };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
  };
</script>
<style lang="scss">
   #demo {
      background: aliceblue;
    }
    .test{
      background: aqua;
    }
</style>

