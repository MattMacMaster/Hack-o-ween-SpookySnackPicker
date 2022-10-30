<template>
  <p>Don't like the selection? <button id="reroll">Reroll</button></p>
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

  window.onload = function() {
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

    // sorted data duh
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

    // Sort the data
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

    const items_class: string = "component-items";

    // This function generates all the random items.
    function generate() {
      console.log("Generating...");
      let tds = document.getElementsByTagName("td")
      let grabbed: string[] = [] as string[];

      // For each table element
      for (let i = 0; i < tds.length; i++) {
        // Check if the element is empty (should only be the items)
        if (tds[i] != null && (tds[i].textContent == null || tds[i].textContent?.length == 0 || tds[i].className == items_class)) {
          let randcount = generate_length(); // amount of items to generate
          let component = tds[i].parentElement.getElementsByTagName("td")[0].textContent; // the component we are generating for
          tds[i].className = items_class;
          tds[i].innerHTML = '';

          // for each item we want to generate
          for (let j = 0; j < randcount; j++) {
            let name: string;
            let attempts: number = 0;

            // repeat until a valid generation occurs
            do {
              // generate a random item name
              name = sorted_data[component][getRandomInt(sorted_data[component].length)];
              attempts++;

              // if we've attempted to many times, stop.
              if (attempts > 10) break;
            } while(grabbed.includes(name));

            // subsequent attempts most likely won't work either, so break out of this loop entirely.
            if (attempts > 10) {
              console.warn("FAILED TO GENERATE");
              break
            }
            
            // "write down" that we generated this name.
            grabbed.push(name);

            // create the paragraph element to go inside the box
            let text = document.createElement("p")
            text.textContent = name;

            // put it in the box
            tds[i].appendChild(text);
          }
        }
      }
    };

    // Generate the items immediately.
    generate();

    // Register on reroll to generate items.
    document.getElementById("reroll").addEventListener("click", generate);
  };
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