<script>
export default {
  data() {
      return {
          novoItem: ""
      }
  },
  props:["limparItem"],
  methods: {
    novoTodo() {
      this.$emit("novoTodo", this.novoItem);
    },
    limparItem(){
        novoItem = ""
    }
  },
};
</script>

<template>
  <div class="adicionarTodo">
    <textarea placeholder="Novo Item em To Do" v-model="novoItem"></textarea>
    <button @click="novoTodo">Enviar</button>
  </div>
</template>
