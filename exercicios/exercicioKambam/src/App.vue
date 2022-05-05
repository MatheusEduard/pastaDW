<script>
import ListasKambam from "./components/ListasKambam.vue";
import AdicionarTodo from "./components/AdicionarTodo.vue";

export default {
  components: { ListasKambam, AdicionarTodo },
  data(){
    return {
      novoItem: ""
    }
  },
  methods: {
    novoTodo(valor) {
      this.novoItem = valor;
    },
  },
};
</script>

<template>
  <AdicionarTodo @novoTodo="novoTodo" />
  <ListasKambam @limparItem="limparItem" :novoTodo="novoItem"/>
</template>

<style>
@import "./assets/base.css";
</style>
