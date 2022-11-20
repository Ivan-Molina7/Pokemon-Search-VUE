<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <main class="container_log">
  <div class="container_global">
  <section class="bloque bloque_saludo bloque_saludo--register">
   <div class="bloque_saludo__presentacion">
    <h2 class="bloque_saludo__h2">Bienvenido de vuelta!</h2>
    <h3 class="login_form__h3">+2.509.876 usuarios conectados</h3>
   </div>
  <div class="bloque_saludo__register">
    <p class="bloque_saludo__p">¿Ya tienes una cuenta?</p>
    <router-link to="/login" tag="button"
       class="btn bloque_saludo__register__btn">Iniciar Sesion</router-link>
  </div>
  </section>
  <section class="forms bloque bloque_login bloque_login--register">
    <div class="bloque_login__titles">
      <h1 class="login__title">
        Registrate en nuestra Pokedex Online
      </h1>
    </div>
    <form action="" class="login_form" @submit.prevent="register">
      <h3 class="login__title__sub">
       Usa tu correo electronico para registrarte.
      </h3>
      <div class="login_form__body">
     <div class="login_form__group login_form__email ">
      <label for="Correo" class="login_form__label">Correo electronico</label>
      <input
        class="login_form__input input"
        type="email"
        placeholder="Direaccion de correo"
        v-model="registerForm.email">
     </div>
     <div class="login_form__group login_form__pass">
      <label for="password" class="login_form__label">Contraseña</label>
      <input
        class="login_form__input input"
        name="password"
        type="password"
        placeholder="Contraseña"
        v-model="registerForm.password">
     </div>
      <button class="login_form__btn btn" type="submit" value="Register">Registrarse</button>
      </div>
    </form>
  </section>
</div>
</main>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// import BaseHeaderLog from '@/components/BaseHeaderLog.vue';

export default {
  setup() {
    const registerForm = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch('register', registerForm.value);
    };
    return {
      registerForm,
      register,
    };
  },
  components: {
    // BaseHeaderLog,
  },
};
</script>
