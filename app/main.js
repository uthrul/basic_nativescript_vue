import Vue from 'nativescript-vue'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
        <Stacklayout>
          <ListView v-for="todo in todos">
            <v-template>
              <Label :text="todo.text"></Label>
            </v-template>
          </ListView>
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