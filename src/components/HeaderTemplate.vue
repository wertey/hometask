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
          <div class="header-top-nav__close"
          @click.native="openMobileMenu()"
          >X</div>
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
  data() {
    return {
      navigation: false,
    }
  },
  methods: {
    openMobileMenu() {
      return !this.navigation;
    }
  }
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
        @media screen and (max-width: 1023px) {
          & {
            position: fixed;
            bottom: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            display: flex;
            flex-direction: column;
            z-index: 10000;
          }
        }
      }
      &__item {
        margin: 0 15px;
        @media screen and (max-width: 1023px) {
          & {
            margin: 30px 15px;
            text-align: center;
            font-size: 38px;
          }
        }
      }
      &__close {
        display: none;
        @media screen and (max-width: 1023px) {
          & {
            color: white;
            position: fixed;
            right: 30px;
            top: 30px;
            z-index: 100001;
            display: block;
            font-size: 44px;
          }
        }
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
      @media screen and (max-width: 767px) {
        & {
          font-size: 30px;
          line-height: 34px;
        }
      }
      &-color {
        color: $color-yellow-orange;
      }
    }
    &__desc {
      margin-top: 22px;
      font-size: 20px;
      @media screen and (max-width: 767px) {
        & {
          font-size: 17px;
          line-height: 24px;
        }
      }
    }
  }
}


</style>
