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
        <Label :text="fullName"></Label>
      </Stacklayout>
      </Page>
    </Frame>
  `,
  data:{
    firstName:"",
    lastName:""
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
}).$start()