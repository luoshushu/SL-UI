<template>
  <div>
    <div class="title">Toast</div>
    <sl-button @click="clickToast1">Toast-top</sl-button>
    <sl-button @click="clickToast2">Toast-middle</sl-button>
    <sl-button @click="clickToast3">Toast-bottom</sl-button>
    <pre>
        <code>
                {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import SlButton from "../../../src/button/button";
import Vue from "vue";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  name: "toast-demo",
  components: {
    SlButton,
  },
  props: {},
  data() {
    return {
      something: "苏宋霖",
      content: `
            <sl-input value="苏宋霖" disabled></sl-input>
            <sl-input value="苏先生" readonly></sl-input>
            <sl-input value="苏" error="名字不能输入一个字"></sl-input>
            <sl-input v-model="something" @change="inputChange"></sl-input>
            

            //js
            methods: {
              clickToast1() {
                this.clickToast("top");
              },
              clickToast2() {
                this.clickToast("middle");
              },
              clickToast3() {
                this.clickToast("bottom");
              },
                clickToast(position) {
                this.$toast('操作成功！！', {
                  position,
                  enableHtml: false,
                  closeButton: {
                    text: "知道了",
                    callback() {
                      console.log("回调");
                    },
                  },
                  autoClose: 3,
                });
              },
          } 
       
       `,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    clickToast1() {
      this.clickToast("top");
    },
    clickToast2() {
      this.clickToast("middle");
    },
    clickToast3() {
      this.clickToast("bottom");
    },
    clickToast(position) {
      this.$toast(`操作成功！！  ${parseInt(Math.random() * 100)}`, {
        position,
        enableHtml: false,
        closeButton: {
          text: "知道了",
          callback() {
            console.log("回调");
          },
        },
        autoClose: 3,
      });
    },
  },
};
</script>

