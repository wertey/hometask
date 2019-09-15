<template>
    <div class="service" id="service">
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
              <h4 class="service-info-section__title">Web design

              </h4>
              <p class="service-info-section__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/forma-2.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title">Mobile apps</h4>
              <p class="service-info-section__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/forma3.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title">PHOTOGRAPHY</h4>
              <p class="service-info-section__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div class="service-info-section">
              <img src="../assets/images/form4.png" alt="" class="service-info-section__img">
              <h4 class="service-info-section__title">marketing</h4>
              <p class="service-info-section__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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
      text-align: center;
      @media screen and (max-width: 1023px) {
        & {
          flex-wrap: wrap;
        }
      }
      &-section {
        margin-left: 12px;
        margin-right: 12px;
        @media screen and (max-width: 1023px) {
          & {
            flex: 1;
            min-width: 300px;
            margin-bottom: 50px;
          }
        }

        &__title {
          margin-top: 30px;
          font-size: 25px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        &__desc {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
</style>
