<script>
import BoxBoard from "./BoxBoard.vue";
import AdicionarTodo from "./AdicionarTodo.vue";
export default {
  components: { BoxBoard, AdicionarTodo },

  data() {
    return {
      todo: [
        {
          id: 1,
          descricao: "Fazer Botão de Like",
        },
        {
          id: 2,
          descricao: "Fazer Botão de Dislike",
        },
        {
          id: 3,
          descricao: "Fazer Página de Login",
        },
      ],
      done: [
        {
          id: 4,
          descricao: "Fazer a segurança  do Site",
        },
        {
          id: 5,
          descricao: "Fazer as cores do site",
        },
      ],

    };
  },
  methods: {
    concluirItem(pos) {
      this.done.push({
        id: this.todo[pos].id,
        descricao: this.todo[pos].descricao,
      });
      this.todo.splice([pos], 1);
    },
    refazerItem(pos) {
      this.todo.push({
        id: this.done[pos].id,
        descricao: this.done[pos].descricao,
      });
      this.done.splice([pos], 1);
    },
    novoTodo(novoTodo) {
      if(novoTodo === "")
        return
        
      this.todo.push({ id: Math.random, descricao: novoTodo });
    },
    limparItem() {
      this.$emit("limparItem");
    },
  },
};
</script>
<template>
  <AdicionarTodo @novoTodo="novoTodo"/>
  <div class="listaKambam">
    <BoxBoard title="To do" :lista="todo" @concluirItem="concluirItem" />
    <BoxBoard title="Done" :lista="done" @refazerItem="refazerItem" />
  </div>
</template>

<style></style>
