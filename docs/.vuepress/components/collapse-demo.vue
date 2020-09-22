<template>
  <div>
    <div class="title">collapse</div>
    <sl-collapse :selected.sync="collapseTab" :single="false">
      <sl-collapse-item
        name="1"
        title="标题啦1"
      >前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
      <sl-collapse-item name="2" title="标题啦2">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
      <sl-collapse-item name="3" title="标题啦333">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
    </sl-collapse>
    <pre>
        <code>
                {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import SlCollapse from "../../../src/collapse";
import SlCollapseItem from "../../../src/collapse-item";
export default {
  name: "collapse-demo",
  components: {
    SlCollapse,
    SlCollapseItem,
  },
  props: {},
  data() {
    return {
      collapseTab: ["2"],
      content: `
      <sl-collapse :selected.sync="collapseTab" :single="false">
      <sl-collapse-item
        name="1"
        title="标题啦1"
      >前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
      <sl-collapse-item name="2" title="标题啦2">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
      <sl-collapse-item name="3" title="标题啦333">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
     </sl-collapse>
       
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

