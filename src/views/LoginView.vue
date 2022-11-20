<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template class="template_dd">
      <!-- <BaseHeaderLog/> -->
  <main class="container_log">
    <div class="container_global">
    <section class="bloque bloque_saludo">
     <div class="bloque_saludo__presentacion">
      <h2 class="bloque_saludo__h2">Hola, Bienvenido!</h2>
      <h3 class="login_form__h3">+5.323.223 usuarios registrados</h3>
     </div>
    <div class="bloque_saludo__register">
      <p class="bloque_saludo__p">¿Todavia no tienes una cuenta?</p>
      <router-link to="/register" tag="button"
       class="btn bloque_saludo__register__btn">Registrarse</router-link>
    </div>
    </section>
    <section class="forms bloque bloque_login">
      <div class="bloque_login__titles">
        <h1 class="login__title">
          Logueate en nuestra Pokedex Online
        </h1>
      </div>
      <form action="" class="login_form" @submit.prevent="login">
        <h3 class="login__title__sub">
          Inicia sesión con tu correo electronico.
        </h3>
        <div class="login_form__body">
       <div class="login_form__group login_form__email ">
        <label for="Correo" class="login_form__label">Correo electronico</label>
        <input
        class="login_form__input input"
        type="email"
        placeholder="Direaccion de correo"
        v-model="loginForm.email">
       </div>
       <div class="login_form__group login_form__pass">
        <label for="password" class="login_form__label">Contraseña</label>
        <input
        class="login_form__input input"
        name="password"
        type="password"
        placeholder="Contraseña"
        v-model="loginForm.password">
       </div>
        <button class="login_form__btn btn" type="submit" value="Login">Iniciar Sesion</button>
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
    const loginForm = ref({});
    const registerForm = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch('login', loginForm.value);
    };
    const register = () => {
      store.dispatch('register', registerForm.value);
    };
    return {
      loginForm,
      registerForm,
      login,
      register,
    };
  },
  // components: { BaseHeaderLog },
};
</script>
