<script>
import MenuLateral from "@/components/MenuLateral.vue";
import CabecalhoTeste from "@/components/CabecalhoTeste.vue";
import PrincipalTeste from "./components/PrincipalTeste.vue";
import RodapeTeste from "./components/RodapeTeste.vue";
export default {
  components: { MenuLateral, CabecalhoTeste, PrincipalTeste, RodapeTeste },
};
</script>
<template>
  <MenuLateral />
  <CabecalhoTeste />
  <PrincipalTeste />
  <RodapeTeste />
  <footer id="footer">Rodapé</footer>
</template>
<style></style>
