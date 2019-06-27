<template>
    <footer class="footer">
      <div class="footer-social">
        <div class="footer-social__item"><i class="demo-icon icon-facebook-circled">&#xe800;</i></div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";

  .footer {
    width: 100%;
    background-color: $color-black;
    padding-top: 33px;
    padding-bottom: 30px;
    &-social {
      font-family: 'footer';
    }
  }

</style>
