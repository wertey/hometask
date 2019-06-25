<template>
    <div class="team">
      <div class="container">
          <div class="title team__title">OUR TEAM</div>
        <div class="team-info">
          <div class="team-info-section">
            <img src="../assets/images/ellipse-6.png" alt="" class="team-info-section__img">
            <h3 class="team-info-section__fullname">Vlad Ivanov</h3>
            <h5 class="team-info-section__position">Designer</h5>
            <div class="team-info-section__desc">Do not seek to change what has come before. Seek to create that which has not.</div>
          </div>
          <div class="team-info-section">
            <img src="../assets/images/ellipse-6.png" alt="" class="team-info-section__img">
            <h3 class="team-info-section__fullname">Bogdan Makarov</h3>
            <h5 class="team-info-section__position">Manager</h5>
            <div class="team-info-section__desc">Do not seek to change what has come before. Seek to create that which has not.</div>
          </div>
          <div class="team-info-section">
            <img src="../assets/images/ellipse-6.png" alt="" class="team-info-section__img">
            <h3 class="team-info-section__fullname">Pavel Konov</h3>
            <h5 class="team-info-section__position">Copywriter</h5>
            <div class="team-info-section__desc">Do not seek to change what has come before. Seek to create that which has not.</div>
          </div>
          <div class="team-info-section">
            <img src="../assets/images/ellipse-6.png" alt="" class="team-info-section__img">
            <h3 class="team-info-section__fullname">Max Belov</h3>
            <h5 class="team-info-section__position">SEO</h5>
            <div class="team-info-section__desc">Do not seek to change what has come before. Seek to create that which has not.</div>
          </div>
        </div>
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
    &__title {
     color: $color-white;
    }
    &-info {
      margin-top: 107px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      &-section {
        color: $color-white;
        flex: 1;
        text-align: center;
        margin: 0 20px;
        &__fullname {
          margin-top: 21px;
          font-weight: bold;
          margin-bottom: 11px;
          font-size: 20px;
        }
        &__position {
          margin-bottom: 40px;
        }
        &__desc {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
</style>
