<template>
  <div class="cc-wrapper">
      <div :key="index" v-for="(card, index) in cards">
        <Card :card="card" :id="card.id"/>
      </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "CardContainer",
  props: ["cards"],
  components: { Card },
};
</script>

<style scoped>
  .cc-wrapper{
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 128, 107);
    padding: 10px;
    margin: 20px;
    height: 550px;
    width: 300px;
  }
</style>