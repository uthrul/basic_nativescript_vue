import Vue from 'nativescript-vue'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
        <Label v-show="visible" :text="message"></Label>
      </Page>
    </Frame>
  `,
  data:{
    message: 'Hello Native Vue',
    visible: true
  }
}).$start()