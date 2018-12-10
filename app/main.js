import Vue from 'nativescript-vue'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
      <Stacklayout>
        <TextField v-model="firstName"></TextField>
        <TextField v-model="lastName"></TextField>
        <Label :text="firstName+ ' ' + lastName"></Label>
      </Stacklayout>
      </Page>
    </Frame>
  `,
  data:{
    firstName:"",
    lastName:""
  },
  methods:{
sayHello: function () {
  alert("Hi vue People")
}
  }
}).$start()