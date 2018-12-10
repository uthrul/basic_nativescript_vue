import Vue from 'nativescript-vue'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
        <Stacklayout>
          <Label v-for="todo in todos" :text="todo.text"></Label>
        </Stacklayout>
      </Page>
    </Frame>
  `,
  data:{
    message: 'Hello Native Vue',
    todos: [
      {text: "Learn NativeScript-Vue"},
      {text: "Learn NativeScript-angular"},
      {text: "Learn React Native"}
    ]
  }
}).$start()