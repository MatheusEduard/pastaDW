<script>
export default {
  props: ["lista", "title"],
  methods: {
    concluirItem(i) {
      this.$emit("concluirItem", i);
    },
    refazerItem(i) {
      this.$emit("refazerItem", i);
    },
  },
};
</script>

<template>
  <div v-if="this.title === 'To do'">
    <article class="block" v-for="(item, i) in lista" :key="item.id">
      <p class="descricao">{{ item.descricao }}</p>
      <button class="botao" @click="concluirItem(i)">Completar</button>
    </article>
  </div>
  <div v-else>
    <article class="block" v-for="(item, i) in lista" :key="item.id">
      <p class="descricao">{{ item.descricao }}</p>
      <button class="botao" @click="refazerItem(i)">Refazer</button>
    </article>
  </div>
</template>
