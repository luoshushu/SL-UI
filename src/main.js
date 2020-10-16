import Vue from "vue";
import Demo from "./demo.vue";

import Button from './button/button.vue'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabsPane from './tabs-pane'
import TabsItem from './tabs-item'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'

import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

import plugin from './plugin'
Vue.use(plugin)

Vue.component('sl-button',Button)
Vue.component('sl-icon',Icon)
Vue.component('sl-button-group',ButtonGroup)
Vue.component('sl-input',Input)
Vue.component('sl-row',Row)
Vue.component('sl-col',Col)

Vue.component('sl-tabs',Tabs)
Vue.component('sl-tabs-pane',TabsPane)
Vue.component('sl-tabs-item',TabsItem)
Vue.component('sl-tabs-head',TabsHead)
Vue.component('sl-tabs-body',TabsBody)

Vue.component('sl-popover',Popover)
Vue.component('sl-collapse',Collapse)
Vue.component('sl-collapse-item',CollapseItem)

Vue.config.productionTip = false;

new Vue({
render: h => h(Demo)
}).$mount("#app");