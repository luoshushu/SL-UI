<template>
  <div id="app">
    <div class="box">
      <div class="title">tabs</div>
      <sl-tabs :selected.sync="selectedTab">
        <sl-tabs-head>
          <template slot="acions">设置</template>
          <sl-tabs-item name="1">靓仔</sl-tabs-item>
          <sl-tabs-item name="2" disabled>财经</sl-tabs-item>
          <sl-tabs-item name="3">冲浪</sl-tabs-item>
        </sl-tabs-head>
        <sl-tabs-body>
          <sl-tabs-pane name="1">广西靓仔</sl-tabs-pane>
          <sl-tabs-pane name="2">相关财经</sl-tabs-pane>
          <sl-tabs-pane name="3">网速冲浪</sl-tabs-pane>
        </sl-tabs-body>
      </sl-tabs>
    </div>
    <div class="box">
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
    </div>
    <div class="box">
      <div class="title">collapse</div>
      <sl-collapse :selected.sync="collapseTab" :single="false">
        <sl-collapse-item
          name="1"
          title="标题啦1"
        >前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
        <sl-collapse-item name="2" title="标题啦2">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
        <sl-collapse-item name="3" title="标题啦333">前端入门和进阶学习笔记。从零开始学前端，做一名精致的前端工程师。</sl-collapse-item>
      </sl-collapse>
    </div>
    <div class="box">
      <div class="title">Toast</div>
      <sl-button @click="clickToast1">Toast-top</sl-button>
      <sl-button @click="clickToast2">Toast-middle</sl-button>
      <sl-button @click="clickToast3">Toast-bottom</sl-button>
    </div>
    <div class="box">
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
    </div>

    <div class="box">
      <div class="title">input</div>
      <sl-input value="苏宋霖" disabled></sl-input>
      <sl-input value="苏先生" readonly></sl-input>
      <sl-input value="苏" error="名字不能输入一个字"></sl-input>
      <sl-input v-model="something" @change="inputChange"></sl-input>
      {{something}}
    </div>
    <div class="box">
      <div class="title">button</div>

      <sl-button>我不爱css</sl-button>
      <sl-button
        @click=" loading1 = !loading1"
        icon="xiazai"
        :loading="loading1"
        icon-position="left"
      >我不爱css</sl-button>
      <sl-button
        @click=" loading2 = !loading2"
        icon="set"
        :loading="loading2"
        icon-position="right"
      >我不爱css</sl-button>
      <sl-button-group>
        <sl-button icon="previous" icon-position="left">上一页</sl-button>
        <sl-button icon-position="right">更多</sl-button>
        <sl-button icon="next" icon-position="right">下一页</sl-button>
      </sl-button-group>
    </div>
  </div>
</template>

<script>
import SlButton from "./button";
export default {
  name: "demo",
  components: { SlButton },

  data() {
    return {
      selectedTab: "1",
      loading1: false,
      loading2: false,
      something: "苏宋霖",
      isPopover: false,
      collapseTab: ["2"],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    inputChange(e) {
      console.log("inputChange");
    },
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

<style scoped lang="scss">
#app {
  .box {
    margin-bottom: 50px;
    border-bottom: 1px solid darkgrey;
    padding-bottom: 50px;
    .title {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 22px;
      margin-bottom: 20px;
    }
    #demo {
      background: aliceblue;
    }
    .test {
      background: blanchedalmond;
    }
  }
}
</style>
