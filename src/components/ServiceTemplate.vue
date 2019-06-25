<template>
    <div class="service">
        <div class="container">
          <h2 class="title service__title">
            our services
          </h2>
          <p class="service__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.
          </p>
          <div class="service-info">
            <div class="service-info-section">
              <img src="../assets/images/forma-1.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title"></h4>
              <p class="service-info-section__desc"></p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/forma-2.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title"></h4>
              <p class="service-info-section__desc"></p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/forma3.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title"></h4>
              <p class="service-info-section__desc"></p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/form4.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title"></h4>
              <p class="service-info-section__desc"></p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";

  .service {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 106px;
    &__title {
      color: $color-black;
    }
    &__desc {
      font-size: 14px;
      font-style: italic;
      line-height: 24px;
      color: $color-dove-gray;
      margin-top: 56px;
      text-align: center;
      padding: 0 10px;
    }
    &-info {
      display: flex;
      justify-content: center;
      flex-direction: row;
      margin-top: 100px;
      &-section {

      }
    }
  }
</style>
