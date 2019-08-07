<template>
  <header class="header" id="header">
      <div class="container">
        <div class="header-top">
          <div class="header-top-logo">
            <img src="../assets/images/logo.png" alt="" class="header-top-logo__img">
          </div>
          <nav class="header-top-nav">
            <ul class="header-top-nav__list">
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#header">HOME</a></li>
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#about">ABOUT</a></li>
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#service">SERVICES</a></li>
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#portfolio">PORTFOLIO</a></li>
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#rewievs">TESTIMONIALS</a></li>
              <li class="header-top-nav__item"><a class="header-top-nav__link" href="#contact">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div class="header-info">
          <h1 class="header-info__title">wELCOME on <span class="header-info__title-color">mycompany</span></h1>
          <div class="header-info__desc">We are a digital agency with years of experience and with extraordinary people</div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTemplate',
};
</script>


<style scoped lang="scss">

  @import "../assets/scss/core.scss";

.header {
  width: 100%;
  height: 100vh;
  padding-top: 56px;
  background-color: $color-god-gray;
  &-top {
    display: flex;
    justify-content: space-between;
    &-nav {
      &__list {
        display: flex;
        justify-content: center;
        flex-direction: row;
      }
      &__item {
        margin: 0 15px;
      }
      &__link {
        text-decoration: none;
        color: $color-white;
        border-bottom: 2px solid transparent;
        padding-bottom: 10px;
        transition: border-bottom .3s ease-in;
        &:hover {
          border-bottom: 2px solid $color-yellow-orange;
        }
      }
    }
  }
  &-info {
    margin-top: 212px;
    text-align: center;
    color: $color-dusty-gray;
    &__title {
      font-size: 44px;
      text-transform: uppercase;
      &-color {
        color: $color-yellow-orange;
      }
    }
    &__desc {
      margin-top: 22px;
      font-size: 20px;
    }
  }
}


</style>
