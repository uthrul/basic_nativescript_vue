import Vue from 'nativescript-vue'

import groceryData from './grocery-data.json';
import GroceryItem from "./GroceryItem";

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

new Vue({
  template: `
    <Frame>
      <Page>
        <Stacklayout>
          <ListView for="item in items">
            <v-template>
              <GroceryItem 
              :groceryItem="item"></GroceryItem>
            </v-template>
          </ListView>
        </Stacklayout>
      </Page>
    </Frame>
  `,
  data: {
    items: groceryData.groceryItems
  }
}).$start()