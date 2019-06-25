<template>
    <div class="client">
      <div class="container">
        <h2 class="title client__title">
          SOME OF <span class="client__title-color">OUR</span> CLIENTS
        </h2>
        <div class="client-logos">
          <div class="client-logos-item"><img src="../assets/images/logos1.png" alt=""></div>
          <div class="client-logos-item"><img src="../assets/images/logos2.png" alt=""></div>
          <div class="client-logos-item"><img src="../assets/images/logos3.png" alt=""></div>
          <div class="client-logos-item"><img src="../assets/images/logos4.png" alt=""></div>
          <div class="client-logos-item"><img src="../assets/images/logos5.png" alt=""></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ClientTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";

  .client {
    width: 100%;
    padding-bottom: 212px;
    padding-top: 100px;
    background-color: $color-black;
    &__title {
      color: $color-white;
      &-color {
        color: $color-yellow-orange;
      }
    }
    &-logos {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 112px;
      align-items: center;
    }
  }


</style>
