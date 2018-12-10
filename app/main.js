import Vue from 'nativescript-vue'

new Vue({
  template: `
    <Frame>
      <Page>
        <Label v-bind:text="message"></Label>
      </Page>
    </Frame>
  `,
  data:{
    message: 'Hello Native Vue'
  }
}).$start()