<template>
    <div class="about">
      <div class="container">
        <div class="about-info">
          <div class="about-info-image">
            <img src="../assets/images/body.png" alt="" class="about-info-image__photo">
          </div>
          <div class="about-info-text">
            <h2 class="about-info-text__title">Some words <span class="about-info-text__title-bold">about us</span></h2>
            <p class="about-info-text__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus .</p>
            <ul class="about-info-text__list">
              <li class="about-info-text__item"><span class="about-info-text__item-bold">Mission</span> - <span class="about-info-text__item-style">We deliver uniqueness and quality</span></li>
              <li class="about-info-text__item"><span class="about-info-text__item-bold">Skills</span> - <span class="about-info-text__item-style">Delivering fast and excellent results</span></li>
              <li class="about-info-text__item"><span class="about-info-text__item-bold">Clients</span> - <span class="about-info-text__item-style">Satisfied clients thanks to our experience</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AboutTemplate"
    }
</script>

<style scoped lang="scss">

  @import "../assets/scss/core.scss";

  .about {
    width: 100%;
    margin-top: 150px;
    margin-bottom: 120px;
    &-info {
       display: flex;
       justify-content: center;
       flex-direction: row;
      &-image {
        align-items: center;
      }
      &-text {
        padding: 30px 50px 0 100px;
        text-align: left;
        &__title {
          font-size: 34px;
          padding-bottom: 30px;
          text-transform: uppercase;
          position: relative;
          &-bold {
            font-weight: bold;
          }
          &:before {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 430px;
            height: 4px;
            background: $color-yellow-orange;
          }
        }
        &__desc {
          margin-top: 30px;
          font-size: 18px;
          color: $color-dove-gray;
          line-height: 25px;
        }
        &__list {
          margin-top: 46px;
        }
        &__item {
          padding-left: 26px;
          position: relative;
          font-size: 16px;
          &:before {
            position: absolute;
            content: '';
            left: 0;
            top: 4px;
            background: url(../assets/images/circle.png)no-repeat;
            width: 15px;
            height: 15px;
          }
          &-bold {
            font-weight: bold;
            color: $color-scorpion;
            font-size: 18px;
          }
          &-style {
            font-style: italic;
            font-size: 16px;
            line-height: 25px;
          }
        }
      }
     }
  }
</style>
