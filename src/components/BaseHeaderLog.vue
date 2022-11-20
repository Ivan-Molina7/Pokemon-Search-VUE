<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <header class="header">
        <section class="header_thumbnail">
          <img class="header__img" src="@/assets/images/pokemon_logo.png" alt="">
        </section>
        <section v-if="condicion" class="header_profile">
          <button class="btn" v-on:click="confirmar()"
          @click="$store.dispatch('logout')">Cerrar Sesion</button>
        </section>
    </header>
</template>
<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      condicion: false,
    };
  },
  methods: {
    confirmar() {
      // eslint-disable-next-line no-restricted-globals
      confirm('¿Seguro que desea salir?');
    },
  },
};
</script>
