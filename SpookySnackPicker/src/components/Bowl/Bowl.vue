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

  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

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

  let sorted_data = {
    "Chocolate": [] as string[],
    "Fruit": [] as string[],
    "Caramel": [] as string[],
    "Peanut or Almond": [] as string[],
    "Nougat": [] as string[],
    "Crisped Rice": [] as string[],
    "Hard": [] as string[],
    "Bar": [] as string[],
    "Pluribus": [] as string[]
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i].chocolate == "Yes") {
      sorted_data["Chocolate"].push(data[i].competitorname);
    }
    if (data[i].fruity == "Yes") {
      sorted_data["Fruit"].push(data[i].competitorname);
    }
    if (data[i].caramel == "Yes") {
      sorted_data["Caramel"].push(data[i].competitorname);
    }
    if (data[i].peanutyalmondy == "Yes") {
      sorted_data["Peanut or Almond"].push(data[i].competitorname);
    }
    if (data[i].nougat == "Yes") {
      sorted_data["Nougat"].push(data[i].competitorname);
    }
    if (data[i].crispedricewafer == "Yes") {
      sorted_data["Crisped Rice"].push(data[i].competitorname);
    }
    if (data[i].hard == "Yes") {
      sorted_data["Hard"].push(data[i].competitorname);
    }
    if (data[i].bar == "Yes") {
      sorted_data["Bar"].push(data[i].competitorname);
    }
    if (data[i].pluribus == "Yes") {
      sorted_data["Pluribus"].push(data[i].competitorname);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    let tds = document.getElementsByTagName("td")
    let grabbed: string[] = [] as string[];

    for (let i = 0; i < tds.length; i++) {
      if (tds[i] != null && (tds[i].textContent == null || tds[i].textContent?.length == 0)) {
        let randcount = generate_length();
        let component = tds[i].parentElement.getElementsByTagName("td")[0].textContent;
        console.log("Gen " + randcount + " for " + component);

        for (let j = 0; j < randcount; j++) {
          let name: string;
          do {
            name = sorted_data[component][getRandomInt(sorted_data[component].length)];
            console.log("Name in grabbed? " + (grabbed.includes(name)))
          } while(grabbed.includes(name));
          console.log("Generated: " + name);
          grabbed.push(name);

          let text = document.createElement("p")
          text.textContent = name;

          tds[i].appendChild(text);
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