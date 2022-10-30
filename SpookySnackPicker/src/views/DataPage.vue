<template>
  <div class="container">
    <span>Search: </span>
    <input type="text" v-model="searchValue" />

    <div>
      <EasyDataTable
      :headers="headers"
      :items="items"
      :dense="dense"
      :search-value="searchValue"
      :theme-color="themeColor"
    />
    </div>
  </div>


</template>

<script lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

import { defineComponent, ref } from 'vue';
import data from '../assets/csvjson.json';

export default defineComponent({
  setup() {
    const searchValue = ref("");
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Chocolatey?", value: "chocolate", sortable: true },
      { text: "Fruity?", value: "fruit", sortable: true },
      { text: "Caramely?", value: "caramel", sortable: true },
      { text: "Peanuty or Almondy?", value: "peanutyalmondy", sortable: true },
      { text: "Nougaty?", value: "nougat", sortable: true },
      { text: "Crisped Ricey?", value: "crispedrice", sortable: true },
      { text: "Hard?", value: "hard", sortable: true },
      { text: "Bar?", value: "bar", sortable: true },
      { text: "Pluribus?", value: "pluribus", sortable: true },
      { text: "Sugar amount", value: "sugar", sortable: true },
      { text: "Price", value: "price", sortable: true },
      { text: "Popularity", value: "popularity", sortable: true }
    ];
    let items: Item[] = [];
    const dense = true;
    const themeColor = "#f48225"
    for (let i = 0; i < data.length; i++) {
      items[i] = {
        "name" : data[i].competitorname,
      "chocolate": data[i].chocolate,
      "fruit":data[i].fruity,
      "caramel": data[i].caramel,
      "peanutyalmondy":data[i].peanutyalmondy,
      "nougat":data[i].nougat,
      "crispedrice":data[i].crispedricewafer,
      "hard":data[i].hard,
      "bar":data[i].bar,
      "pluribus":data[i].pluribus,
      "sugar":data[i].sugarpercent,
      "price":data[i].pricepercent,
      "popularity":data[i].winpercent,
    }
    }
    return {
      headers,
      items,
      dense,
      themeColor,
      searchValue
    };
  },
});
</script>

<style scoped>
  .container{
    z-index: 0;
    box-shadow: 8px 8px rgb(0 0 0 / 0.3);
    border-style: solid;
    border-color: black;
    background-color:white;
  }
  span {
    font-weight: bolder;
    color: black;

  }

</style>