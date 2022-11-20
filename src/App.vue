<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  data() {
    return {
      condicion: false,
    };
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch('fetchUser');
    });
  },
};
</script>

<style lang="scss">
  @import '@/assets/css/style';
  @import '@/assets/css/normalize.min.css';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
