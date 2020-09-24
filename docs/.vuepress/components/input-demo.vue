<template>
  <div>
      <sl-input value="苏宋霖" disabled></sl-input>
      <sl-input value="苏先生" readonly></sl-input>
      <sl-input value="苏" error="名字不能输入一个字"></sl-input>
      <sl-input v-model="something" @change="inputChange"></sl-input>
      {{something}}
    <pre>
        <code>
                {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import SlInput from "../../../src/input";
export default {
  name: "input-demo",
  components: {
    SlInput
  },
  props: {},
  data() {
    return {
          something: "苏宋霖",
        content:`
            <sl-input value="苏宋霖" disabled></sl-input>
            <sl-input value="苏先生" readonly></sl-input>
            <sl-input value="苏" error="名字不能输入一个字"></sl-input>
            <sl-input v-model="something" @change="inputChange"></sl-input>
        
        `
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    inputChange(){}
  }
};
</script>

