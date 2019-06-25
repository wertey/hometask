<template>
    <div class="contact">
      <div class="container">
        <h2 class="title contact__title">contact us</h2>
        <div class="contact__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";
  .contact {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 102px;
    &__title {
      color: $color-black;
    }
    &__desc {
      font-size: 16px;
      margin-top: 65px;
      font-style: italic;
      color: $color-dusty-gray;
      text-align: center;
      line-height: 24px;
    }
  }
</style>
