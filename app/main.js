import Vue from 'nativescript-vue'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
      <Stacklayout>
      <TextField :text="message"></TextField>
        <Label :text="message"v-on:tap="sayHello "></Label>
      </Stacklayout>
      </Page>
    </Frame>
  `,
  data:{
    message: 'Hello Native Vue'
  },
  methods:{
sayHello: function () {
  alert("Hi vue People")
}
  }
}).$start()