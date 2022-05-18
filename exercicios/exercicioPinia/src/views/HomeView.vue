<script>
import { mapStores, mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, "counter", "doubleCount"),
  },

  methods: {
    ...mapActions(useCounterStore, ["increment"]),
    adicionar() {
      this.increment();
    },
  },
};
</script>

<template>
  <main>
    <h1>Home</h1>
    <h1>Contador{{ counter }}</h1>
  </main>
</template>
