<template>
    <footer class="footer">
      <div class="footer-social">
        <div class="footer-social__circle"> <i class="fab fa-facebook-f"></i></div>
        <div class="footer-social__circle"> <i class="fab fa-twitter"></i></div>
        <div class="footer-social__circle"> <i class="fab fa-google-plus-square"></i></div>
        <div class="footer-social__circle"> <i class="fab fa-linkedin-in"></i></div>
        <div class="footer-social__circle"> <i class="fab fa-dribbble"></i></div>
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
  $fa-font-path : "~@fortawesome/fontawesome-free-webfonts/webfonts";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-brands.scss";

  .footer {
    width: 100%;
    background-color: $color-black;
    padding-top: 33px;
    padding-bottom: 30px;
    &-social {
      color: $color-silver-chalice;
      display: flex;
      justify-content: center;
      &__circle {
        display: flex;
        justify-content: center;
        border: 1px solid $color-silver-chalice;
        border-radius: 50%;
        width: 30px;
        align-items: center;
        height: 30px;
        cursor: pointer;
        transition: all .3s ease-in;
        & {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

</style>
