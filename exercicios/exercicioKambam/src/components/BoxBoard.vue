<script>
import ItensLista from "./ItensLista.vue";
export default {
    props: ["title","lista"],
    components: { ItensLista }
};
</script>

<template>
  <div class="box">
      <h2>{{ title }}</h2>
      <ItensLista :lista = "lista"/>
      </div>
  
</template>
