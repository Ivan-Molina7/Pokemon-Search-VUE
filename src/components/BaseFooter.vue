<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <footer class="footer">
      <h1 class="footer__title">SEGUINOS EN:</h1>
      <div class="footer__media">
        <div class="media media__instagram">
         <a href="https://www.instagram.com/pokemon/" target="_blank">
          <img src="@/assets/images/social/instagram.png" alt="" class="social__img">
        </a>
       </div>
        <div class="media media__twitter">
          <a href="https://twitter.com/Pokemon" target="_blank">
            <img src="@/assets/images/social/twitter.png" alt="" class="social__img">
          </a>
        </div>
        <div class="media media__youtube">
          <a href="https://www.youtube.com/c/pokemon" target="_blank">
            <img src="@/assets/images/social/youtube.png" alt="" class="social__img">
          </a>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
};
</script>
