<template>
    <div class="contact" id="contact">
      <div class="container">
        <h2 class="title contact__title">contact us</h2>
        <div class="contact__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <form class="contact-form" action="#">
          <div class="contact-form-section">
            <div class="contact-form-section-name">
              <div class="contact-form-section__title">Name <span class="contact-form-section__circle">*</span></div>
              <input type="text" required class="input contact-form-section-name__input" placeholder="Your name">
            </div>
            <div class="contact-form-section-email">
            <div class="contact-form-section__title">Email <span class="contact-form-section__circle">*</span></div>
            <input type="email" required class="input contact-form-section-email__input" placeholder="Your email">
          </div>
          </div>
          <div class="contact-form-section__title">Message <span class="contact-form-section__circle">*</span></div>
          <textarea class="textarea contact-form-section__textarea" placeholder="Your message for us" name="" id="" cols="30" rows="10"></textarea>
          <div class="contact-form-section-submit">
            <button class="contact-form-section-submit__btn" type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactTemplate"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/core.scss";
  .contact {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 102px;
    padding-left: 94px;
    padding-right: 94px;
    @media screen and (max-width: 1199px) {
      & {
        padding-left: 0;
        padding-right: 0;
      }
    }
    &__title {
      color: $color-black;
    }
    &__desc {
      font-size: 16px;
      margin-top: 65px;
      font-style: italic;
      color: $color-dusty-gray;
      text-align: center;
      line-height: 24px;
    }
    &-form {
      margin-top: 96px;
      &-section {
        display: flex;
        justify-content: center;
        flex-direction: row;
        @media screen and (max-width: 767px) {
          & {
            flex-direction: column;
          }
        }
        &__title {
          font-size: 16px;
          line-height: 24px;
          color: $color-dove-gray;
          margin-bottom: 12px;
        }
        &__circle {
          color: red;
          vertical-align: top;
        }
        &-name {
          flex: 1;
          width: 50%;
          margin-right: 15px;
          @media screen and (max-width: 767px) {
            & {
              width: 100%;
              margin-bottom: 15px;
              margin-right: 0;
            }
          }
        }
        &-email {
          flex: 1;
          width: 50%;
          margin-left: 15px;
          @media screen and (max-width: 767px) {
            & {
              width: 100%;
              margin-left: 0;
              margin-bottom: 15px;
            }
          }
        }
        &__textarea {
          width: 100%;
        }
        &-submit {
          display: flex;
          justify-content: flex-end;
          &__btn {
            text-align: right;
            height: 42px;
            background: $color-yellow-orange;
            padding: 0 63px;
            color: $color-white;
            font-size: 16px;
            line-height: 24px;
            font-weight: bold;
            margin-top: 34px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
