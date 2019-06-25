<template>
    <div class="work">
      <div class="container">
        <h2 class="title work__title">
          take a look at <span class="work__title-color">our work</span>
        </h2>
        <div class="work__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.
        </div>
        <div class="work-portfolio">
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>          <div class="work-portfolio-item">
          <img src="../assets/images/work.png" alt="">
        </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>
          <div class="work-portfolio-item">
            <img src="../assets/images/work.png" alt="">
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WorkTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";
  .work {
    padding-top: 100px;
    padding-bottom: 103px;
    &__title {
      color: $color-black;
      &-color {
        font-weight: bold;
      }
    }
    &__desc {
      margin-top: 55px;
      font-size: 16px;
      font-style: italic;
      color: $color-dove-gray;
      text-align: center;
    }
    &-portfolio {
      margin-top: 176px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      &-item {
        flex: 1;
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
  }
</style>
