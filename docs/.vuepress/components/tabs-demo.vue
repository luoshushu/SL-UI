<template>
  <div>
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
    <pre>
        <code>
                {{content}}
        </code>
    </pre>
  </div>
</template>

<script>

import SlTabs from '../../../src/tabs'
import SlTabsPane from '../../../src/tabs-pane'
import SlTabsItem from '../../../src/tabs-item'
import SlTabsHead from '../../../src/tabs-head'
import SlTabsBody from '../../../src/tabs-body'
export default {
  name: "tabs-demo",
  components: {
SlTabs,
SlTabsPane,
SlTabsItem,
SlTabsHead,
SlTabsBody,
  },
  data() {
    return {
            selectedTab: "1",
        content:`
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
       
       `
    };
  },
};
</script>

