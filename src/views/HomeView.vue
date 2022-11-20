<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/valid-v-on -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable prefer-const -->
<!-- eslint-disable prefer-const -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
   <BaseHeader/>
  <main class="container_home" >
    <div class="container_presentation">
      <input
      class="presentation__input input"
      type="text"
      v-model="search"
      placeholder="Buscar Pokemon..."
      >
      <nav class="nav" aria-label="Page navigation ">
      <ul class="pagination justify-content-center  pagination-sm">
        <li v-on:click="getPreviousPage()"
        class="page-item "><a class="page-link" href="#">Anterior</a></li>
        <li v-for="pagina in totalPaginas()" v-on:click="getDataPagina(pagina)"
        :class="isActive(pagina)"
        class="page-item" :key="pagina">
        <a class="page-link" href="#">{{pagina}}</a></li>
        <li v-on:click="getNextPage()" class="page-item">
        <a class="page-link" href="#">Siguiente</a></li>
      </ul>
    </nav>
      <h2 class="presentation__subtitle presentation__text">¡Busca todo lo que necesites saber sobre ellos!</h2>
    </div>
    <div class="container_pokemon">
        <div class="pokemon__card flip-card" v-for="(data, index) in filtrarPokemon" :key="index">
          <div class="flip-card-inner">
          <div div class="flip-card-front">
              <div class="pokemon__card__thumbnail">
              <img class="pokemon__card__img" :src="data.url" />
              </div>
              <div class="pokemon__titles">
                <p class="pokemon__id">#{{data.pokedex}}</p>
                <p class="pokemon__title">{{data.name}}</p>
              </div>
              <div class="pokemon__information">
                  <p class="pokemon__information__text click">
                    Mas informacion <i class="material-symbols-outlined right"
                    style="vertical-align: middle">fingerprint</i></p>
                </div>
          </div>
            <div class="flip-card-back">
              <div class="pokemon__card__thumbnail pokemon__card__thumbnail--shiny">
                <img class="pokemon__card__img" :src="data.url_shiny" />
              </div>
              <div class="pokemon__type">
                      <h4 class="type__title title">Tipo(s)</h4>
                      <div class="type__list">
                        <li v-for="(pokemon, i) in data.types" :key="i" class="tipo lista" :class="pokemon.type.name">
                          <p>{{pokemon.type.name}}</p>
                        </li>
                    </div>
                    </div>
                     <div class="pokemon__abilities">
                      <h4 class="abilities_title title">Ataque(s)</h4>
                      <div class="abilities__container">
                        <li v-for="(pokemon, i) in data.abilities" :key="i" class="abilities__list">
                          <p>{{pokemon.ability.name}}</p>
                        </li>
                      </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
  </main>
  <BaseFooter/>
</template>
<script>
import axios from 'axios';
import BaseFooter from '@/components/BaseFooter.vue';
import BaseHeader from '@/components/BaseHeader.vue';
// eslint-disable-next-line import/no-unresolved

export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'pokemones',
  data() {
    return {
      pokemones: [],
      datosPaginados: [],
      elementosPorPagina: 30,
      fullElementos: 1,
      paginaActual: 1,
      search: '',
    };
  },
  mounted() {
    this.getDataPagina(1);
  },
  components: {
    BaseFooter,
    BaseHeader,
    // eslint-disable-next-line vue/no-unused-components
  },
  created() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 250; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        .then((response) => {
          // eslint-disable-next-line prefer-const
          let pokemon = {
            name: response.data.name,
            url: response.data.sprites.front_default,
            url_shiny: response.data.sprites.front_shiny,
            abilities: response.data.abilities,
            types: response.data.types,
            pokedex: response.data.id,
          };
          this.pokemones.push(pokemon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  computed: {
    filtrarPokemon() {
      if (Object.entries(this.search).length > 0) {
        // eslint-disable-next-line max-len
        return this.pokemones.filter((data) => data.name.toLowerCase().includes(this.search.toLowerCase()));
      }
      // eslint-disable-next-line max-len
      return this.datosPaginados;
    },
  },
  methods: {
    totalPaginas() {
      if (Object.entries(this.search).length > 0) {
        // eslint-disable-next-line max-len
        // return Math.ceil(this.pokemones.filter((data) => data.name.toLowerCase().includes(this.search.toLowerCase())).length / this.elementosPorPagina);
        return this.fullElementos;
      }
      return Math.ceil(this.pokemones.length / this.elementosPorPagina);
    },
    getDataPagina(noPagina) {
      this.paginaActual = noPagina;
      this.datosPaginados = [];
      const ini = (noPagina * this.elementosPorPagina) - this.elementosPorPagina;
      const fin = (noPagina * this.elementosPorPagina);
      this.datosPaginados = this.pokemones.slice(ini, fin);
    },
    getPreviousPage() {
      if (this.paginaActual > 1) {
        // eslint-disable-next-line no-plusplus
        this.paginaActual--;
      }
      this.getDataPagina(this.paginaActual);
    },
    getNextPage() {
      if (this.paginaActual < this.totalPaginas()) {
        // eslint-disable-next-line no-plusplus
        this.paginaActual++;
      }
      this.getDataPagina(this.paginaActual);
    },
    isActive(noPagina) {
      // eslint-disable-next-line
      return noPagina == this.paginaActual ? 'active' : '';
    },
  },
}
);

</script>
