<script setup lang="ts">

</script>

<template>
  <vue-header />
  <RouterView />
</template>


<style>
html,
body {
  background-color: rgb(116, 79, 0);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  overflow-x: hidden !important;
  color: white;
  height: 100vh;
}

h1,
h2,
h3 {
  text-align: center;
}

.container {
  width: 1280px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  font-size: 42px;
}
</style>