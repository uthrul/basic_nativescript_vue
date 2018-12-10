import Vue from 'nativescript-vue'

new Vue({
  template: `
    <Frame>
      <Page>
        <Label v-if="visible" :text="message"></Label>
      </Page>
    </Frame>
  `,
  data:{
    message: 'Hello Native Vue',
    visible: false
  }
}).$start()