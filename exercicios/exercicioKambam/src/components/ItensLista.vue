<script>
export default {
  props: ["lista"]
};
</script>

<template>
  <div>
    <article class="block" v-for="item in lista" :key="item.id">
      <p class="descricao">{{ item.descricao }}</p>
      <button @click = "$emit('click', $event.target.item.id)">Completo</button>
    </article>
  </div>
</template>
