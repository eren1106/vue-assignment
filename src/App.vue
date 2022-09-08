<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dragndrop">Drag & Drop</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useCardStateStore } from "./stores/cardState.js";

export default {
  setup() {
    const store = useCardStateStore();
    store.fetchInitialData();
    return { store };
  }
}
</script>

<style scoped>
nav * {
  padding-right: 10px;
}
</style>
