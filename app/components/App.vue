<template>
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
</template>

<script>
import groceryData from '../grocery-data.json';
import GroceryItem from "../GroceryItem";

export default {
  data() {
    return {
      items: groceryData.groceryItems
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
