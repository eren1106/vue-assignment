<template>
  <div>
    <p>Hello, this is the onboarding assignment!</p>
    <p>Current Time: {{ timestamp }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeView.vue",
  data() {
    return {
      timestamp: "",
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
