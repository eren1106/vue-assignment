<template>
  <div
    :id="id"
    draggable="true"
    @dragstart="startDrag($event, card)"
    @dragover.stop
  >
    <div class="card-wrapper">
      <p>Name: {{ card.name }}</p>
      <p v-if="!!card.gender">Gender: {{ card.gender }}</p>
      <p v-if="!!card.birthDate">Birth Date: {{ card.birthDate }}</p>
      <p v-if="!!card.address">Address: {{ card.address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card", "id"],
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  background-color: white;
  padding: 16px;
  margin: 10px;
}
</style>

