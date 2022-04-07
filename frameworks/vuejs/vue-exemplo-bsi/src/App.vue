<script>
export default {
  data() {
    return {
      nome: "Matheusão",
      nacionalidade: "Brasileiro",
      likes: 0,
      valor: 6.0,
      frutas: ["Pera", "Uva", "Laranja"],
      novoCarro: { id: "SI", nome: "Uga" },

      carros: [
        {
          id: "SK",
          nome: "Uno",
        },
        {
          id: "SS",
          nome: "Ferrari",
        },
        {
          id: "SO",
          nome: "Camaro",
        },
      ],
    };
  },
  //Funções
  methods: {
    addlike() {
      this.likes = this.likes + 1;
    },
    //Evitar, fazer esse tipo de operação no computed
    getlikes() {
      return this.likes;
    },
    adicionarCarro() {
      this.carros.push(this.novoCarro);
      this.novoCarro = {};
    },
    removerCarro(id) {
      const pos = this.carros.findIndex((carro) => carro.id === id);
      this.carros.splice(pos, 1);
    },
  },
  //informações computadas(atualizadas automaticamente)
  computed: {
    meta1() {
      return this.likes === 5;
    },
    getlikes2() {
      return this.likes;
    },
    icms() {
      // if (this.valor < 5) return this.valor * 0.3;
      // else if (this.valor < 6) return this.valor * 0.25;
      // else return this.valor * 0.2;
      let porcentagem = 0.2;
      if (this.valor < 5) porcentagem = 0.3;
      else if (this.valor < 6) porcentagem = 0.25;
      return this.valor * porcentagem;
    },
  },
};
</script>

<template>
  <h1>Ola Vue!!!</h1>
  <h1>Nome: {{ nome }}</h1>
  <h1>Nacionalidade: {{ nacionalidade }}</h1>
  <h1>Likes: {{ likes }}</h1>
  <button v-on:click="addlike">Like</button>
  <button @click="likes--">Dislike</button>
  <input type="text" v-model="nome" />
  <div v-show="meta1">Parabéns! Você alcançou a Meta(com v-show)</div>
  <div v-if="likes == 4">
    Parabéns! Você alcançou a Meta(com v-if){{ getlikes }}
  </div>
  <div v-else-if="likes > 4">passou da meta (com v-else-if)</div>
  <div v-else>continue tentando {{ getlikes2 }}(com v-else)</div>
  <hr />
  <input type="number" v-model="valor" />
  Valor do Combustivel: {{ valor }} com icms de {{ icms }}
  <hr />
  <div>
    <h1>Frutas:</h1>
    <ul>
      <li v-for="(fruta, i) in frutas" v-bind:key="i">{{ i }} - {{ fruta }}</li>
    </ul>
  </div>
  <hr />
  <div>
    <h1>Carros:</h1>
    <input
      type="text"
      placeholder="ID"
      :value="novoCarro.id"
      @input="novoCarro.id = $event.target.value"
    />
    <input type="text" placeholder="Nome" v-model="novoCarro.nome" />
    <button @click="adicionarCarro">Adicionar</button>
    {{ novoCarro.id }} - {{ novoCarro.nome }}
    <ul>
      <li v-for="carro in carros" :key="carro">
        {{ carro.id }} - {{ carro.nome }}
        <button @click="removerCarro(carro.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
