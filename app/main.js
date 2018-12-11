import Vue from 'nativescript-vue'

import GroceryItem from './GroceryItem'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
        <Stacklayout>
          <ListView for="item in items">
            <v-template>
              <GroceryItem></GroceryItem>
            </v-template>
          </ListView>
        </Stacklayout>
      </Page>
    </Frame>
  `,
  data: {
    items: [1, 2, 3]
  }
}).$start()