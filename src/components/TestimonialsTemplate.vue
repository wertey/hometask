<template>
    <div class="feedback">
      <div class="container">
        <div class="title feedback__title">
          <span class="feedback__title-bold">our clients’</span> testimonials
        </div>
        <div class="feedback__text">
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
        <div class="feedback__position">
          Dean Martin, CEO Acme Inc.
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TestimonialsTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";
  .feedback {
    width: 100%;
    background-color: $color-black;
    padding-bottom: 177px;
    padding-top: 100px;
    &__title {
      &-color {
        font-weight: bold;
      }
    }
    &__text {
      margin-top: 122px;
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      color: $color-mercury;
      text-align: center;
    }
    &__position {
      font-size: 18px;
      color: $color-silver-chalice;
      line-height: 24px;
      margin-top: 54px;
      text-align: center;
    }
  }
</style>
