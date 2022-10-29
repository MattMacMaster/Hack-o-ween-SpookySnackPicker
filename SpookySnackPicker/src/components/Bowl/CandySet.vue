<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Chocolatey?", value: "chocolate", sortable: true },
      { text: "Fruity?", value: "fruit", sortable: true },
      { text: "Caramely?", value: "caramel", sortable: true },
      { text: "Peanuty or Almondy?", value: "peanutalmond", sortable: true },
      { text: "Nougaty?", value: "nougat", sortable: true },
      { text: "Crisped Ricey?", value: "crispedrice", sortable: true },
      { text: "Hard?", value: "hard", sortable: true },
      { text: "Bar?", value: "bar", sortable: true },
      { text: "Pluribus?", value: "pluribus", sortable: true },
      { text: "Sugar amount", value: "sugar", sortable: true },
      { text: "Price", value: "price", sortable: true },
      { text: "Popularity", value: "popularity", sortable: true }
    ];

    const items: Item[] = [
      { "name": "M&Ms", "chocolate": true, "fruit": false, "caramel": false },
      { "name": "BEES BEES BEES", "chocolate": false, "fruit": true, "caramel": false },
      { "name": "fuck", "chocolate": false, "fruit": false, "caramel": true },
    ];

    return {
      headers,
      items
    };
  },
});
</script>