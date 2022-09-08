import { defineStore } from "pinia";

export const useCardStateStore = defineStore("cardState", {
  state: () => ({
    cards: [],
  }),
  getters: {
    getContainer1: (state) => state.cards.filter((card) => card.container === 1),
    getContainer2: (state) => state.cards.filter((card) => card.container === 2),
  },
  actions: {
    async fetchInitialData() {
      const res = await fetch(
        "https://build.fhir.org/patient-example.json"
      );
      const data = await res.json();
      this.cards = [
        {
          id: 0,
          container: 1,
          name: data.name[1].given[0],
          gender: data.gender,
        },
        {
          id: 1,
          container: 1,
          name: data.name[1].given[0],
          birthDate: data.birthDate,
        },
        {
          id: 2,
          container: 2,
          name: data.name[1].given[0],
          address: data.address[0].text,
        },
      ];
    },
  },
});
