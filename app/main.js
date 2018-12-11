import Vue from 'nativescript-vue'

import GroceryItem from './GroceryItem'

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
      <Stacklayout>
        <GroceryItem></GroceryItem>
      </Stacklayout>
      </Page>
    </Frame>
  `,
  data: {}
}).$start()