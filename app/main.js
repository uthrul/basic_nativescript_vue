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
        <TextField :text="getfullName()"></TextField>
      </Stacklayout>
      </Page>
    </Frame>
  `,
  data:{
    firstName:"",
    lastName:""
  },
  methods: {
    getfullName: function () {
      return this.firstName + " " + this.lastName;
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
}).$start()