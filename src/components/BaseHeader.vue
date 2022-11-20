<!-- eslint-disable no-var -->
<!-- eslint-disable no-var -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <header class="header">
        <section class="header_thumbnail">
          <img class="header__img" src="@/assets/images/pokemon_logo.png" alt="">
        </section>
        <section v-if="condicion" class="header_profile">
          <button class="btn btn--header"
          @click="confirmar($store.dispatch('logout'))">Cerrar Sesion</button>
        </section>
    </header>
</template>
<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      condicion: true,
    };
  },
  methods: {
    confirmar() {
      // eslint-disable-next-line no-alert, no-restricted-globals, no-var
      var respuesta = confirm('¿Seguro que desea salir?');
      // eslint-disable-next-line eqeqeq
      if (respuesta == true) {
        return true;
      } return false;
    },
  },
};
</script>
