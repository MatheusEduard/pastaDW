<script>
import ItensLista from "./ItensLista.vue";
export default {
    props: ["title","lista"],
    components: { ItensLista },
    methods: {
        concluirItem(i) {
            this.$emit("concluirItem", i);
    },
        refazerItem(i) {
            this.$emit("refazerItem", i);
        },
    }
};
</script>

<template>
  <div class="box">
      <h2>{{ title }}</h2>
      <ItensLista :lista = "lista" :title = "title" @concluirItem="concluirItem" @refazerItem="refazerItem"/>
      </div>
  
</template>
