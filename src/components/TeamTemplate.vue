<template>
    <div class="team">
      <div class="container">
          <div class="title team__title">OUR TEAM</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TeamTemplate"
    }
</script>

<style scoped lang="scss">

  @import "../assets/scss/core.scss";

  .team {
    width: 100%;
    background: $color-black;
    padding-top: 107px;
    padding-bottom: 160px;
    text-transform: uppercase;
    &__title {
     color: $color-white;
    }
  }
</style>
