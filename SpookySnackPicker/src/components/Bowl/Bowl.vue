<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    class="bowl"
  />
</template>

<script lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const headers: Header[] = [
      { text: "Component", value: "component" },
      { text: "Items", value: "items" },
      { text: "Edit", value: "edit" }
    ];

    const items: Item[] = [
      { "component": "Chocolate", "items": null, "edit": "EDIT" },
      { "component": "Fruit", "items": null, "edit": "EDIT" },
      { "component": "Caramel", "items": null, "edit": "EDIT" },
      { "component": "Peanut or Almond", "items": null, "edit": "EDIT" },
      { "component": "Nougat", "items": null, "edit": "EDIT" },
      { "component": "Crisped Rice", "items": null, "edit": "EDIT" },
      { "component": "Hard", "items": null, "edit": "EDIT" },
      { "component": "Bar", "items": null, "edit": "EDIT" },
      { "component": "Pluribus", "items": null, "edit": "EDIT" }
    ];

    return {
      headers,
      items
    };
  },
});
</script>

<style>
  .container {
    z-index: 0;
    box-shadow: 8px 8px rgb(0 0 0 / 0.3);
    border-style: solid;
    border-color: black;
    background-color: gray;
  }

  thead tr th:first-of-type {
    width: 15em;
  }

  thead tr th:last-of-type {
    width: 5em;
  }
  
  div.vue3-easy-data-table.bowl div.vue3-easy-data-table__footer {
    display: none;
  }

  div.vue3-easy-data-table.bowl td:nth-of-type(3) {
    color: blue;
    text-decoration-line: underline;
  }
</style>