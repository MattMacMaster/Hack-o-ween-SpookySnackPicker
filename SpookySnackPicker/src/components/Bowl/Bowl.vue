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

  import data from '../../assets/csvjson.json';

  const value_cutoffs: number[] = [30, 60, 85, 92, 97];

  // generate a value between 1 and 5, weighted.
  function generate_length(): number {
    let value: number = Math.random() * 100
    let lasti: number = 0;

    for (let i = 0; i < value_cutoffs.length; i++) {
      if (value > value_cutoffs[i])
        lasti = i;
      else
        return lasti + 1;
    }

    return value_cutoffs.length;
  }

  export default defineComponent({
    setup() {
      const headers: Header[] = [
        { text: "Component", value: "component" },
        { text: "Items", value: "items" },
      //{ text: "Edit", value: "edit" }
      ];

      const items: Item[] = [
        { "component": "Chocolate", "items": null},// "edit": "EDIT" },
        { "component": "Fruit", "items": null},// "edit": "EDIT" },
        { "component": "Caramel", "items": null},// "edit": "EDIT" },
        { "component": "Peanut or Almond", "items": null},// "edit": "EDIT" },
        { "component": "Nougat", "items": null},// "edit": "EDIT" },
        { "component": "Crisped Rice", "items": null},// "edit": "EDIT" },
        { "component": "Hard", "items": null},// "edit": "EDIT" },
        { "component": "Bar", "items": null},// "edit": "EDIT" },
        { "component": "Pluribus", "items": null},// "edit": "EDIT" }
      ];

      return {
        headers,
        items
      };
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    let tds = document.getElementsByTagName("td")
    for (let i = 0; i < tds.length; i++) {
      if (tds[i] != null && (tds[i].textContent == null || tds[i].textContent?.length == 0)) {
        let randcount = generate_length();
        let component = tds[i].parentElement?.getElementsByTagName("td")[0];

        for (let j = 0; j < randcount; j++) {
          tds[i].textContent = "Your momaaaaaaaaaaaaaaaaaaaaaaaaaa";
        }
      }
    }
  }, false)

</script>

<style scoped>
  .vue3-easy-data-table.bowl {
    z-index: 0;
    box-shadow: 8px 8px rgb(0 0 0 / 0.3);
    background-color: gray;
    border: 5px solid black;
  }
  
  .vue3-easy-data-table.bowl .vue3-easy-data-table__footer {
    display: none;
  }

  tbody.vue3-easy-data-table__body tr td:nth-of-type(3) {
    color: blue;
    text-decoration-line: underline;
  }

  .header-text {
    font-weight: bold;
  }
</style>