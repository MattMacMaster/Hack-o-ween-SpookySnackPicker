<script setup>
import NavTop from './components/NavTop.vue'
</script>

<template>
    <header>
    <NavTop />
    <!--
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did terrible war crimes!" />
    </div>
    !-->
    </header>
    <main>
    
    </main>

</template>


<style>
body {
  background-image: url(./assets/halloween-background.jpg);
}
</style>

<style scoped>
main {
  background-color: aqua;
  background-image: url(./assets/halloween-background.jpg);
}

header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
