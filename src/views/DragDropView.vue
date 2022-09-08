<template>
  <div class="dd-wrapper">
    <div @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <CardContainer :cards="this.store.getContainer1" />
    </div>
    <div @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
      <CardContainer :cards="this.store.getContainer2" />
    </div>
  </div>
</template>

<script>
import CardContainer from "../components/CardContainer.vue";
import { useCardStateStore } from "../stores/cardState.js";

export default {
  name: "DragDropView",
  components: { CardContainer },
  setup() {
    const store = useCardStateStore();
    return { store };
  },
  methods: {
    onDrop(evt, container) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.store.cards.find((item) => item.id == itemID);
      item.container = container;
    },
  },
};
</script>

<style scoped>
.dd-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>