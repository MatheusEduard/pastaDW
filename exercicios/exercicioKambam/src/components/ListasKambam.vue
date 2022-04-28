<script>
import BoxBoard from "./BoxBoard.vue";
export default {
  components: { BoxBoard },

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
          id: 1,
          descricao: "Fazer a segurança  do Site",
        },
        {
          id: 2,
          descricao: "Fazer as cores do site",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="listaKambam">
    <BoxBoard title="Todo"  :lista = "todo"/>
    <BoxBoard title="Done" :lista = "done"/>
  </div>
</template>

<style></style>
