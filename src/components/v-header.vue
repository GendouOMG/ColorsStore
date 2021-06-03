<template>
  <div class="v-header">
    <div class="v-header__nav-wrapper">
      <a href="#" class="v-header__logo-link">
        <img class="v-header__logo" src="../assets/images/logo.png" alt="COLORS">
      </a>
      <nav class="v-header__nav">
        <a class="v-header__nav-link" href="#">Продукты</a>
        <a class="v-header__nav-link" href="#">Цвета</a>
        <a class="v-header__nav-link" href="#">Вдохновение</a>
        <a class="v-header__nav-link" href="#">Советы</a>
        <a class="v-header__nav-link" href="#">Найти магазин</a>
      </nav>
    </div>
    
    <div class="v-header__sub-nav-wrapper">
      <div class="v-header__contacts">
        <p class="v-header__phone">+7 (495) 221-77-69 </p>
        <button class="v-header__call-back">Заказать звонок</button>
      </div>
      <div class="v-header__sub-nav">
        <button class="v-header__sub-nav-btn v-header__sub-nav-btn--search"></button>
        <button class="v-header__sub-nav-btn v-header__sub-nav-btn--profile"></button>
        <button class="v-header__sub-nav-btn v-header__sub-nav-btn--like"></button>
        <button class="v-header__sub-nav-btn v-header__sub-nav-btn--cart">0</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: "v-header",
  props: {},
  data(){
    return{}
  },
  computed: {},
  methods:{
  }
}
</script>

<style lang="scss">
  .v-header{
    margin: 0;
    padding: 0 3.3%;

    width: auto;
    height: 104px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &__nav-wrapper {
      margin-right: 20px;
      min-width: 700px;
      width: 845px;
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &__sub-nav-wrapper {
      min-width: 320px;
      width: 425px;
      max-width: 470px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &__logo-link {
      margin-right: 20px;
      padding: 0;
    }

    &__logo {
      width: 131px;
      height: 26px;

      display: block;
    }

    &__nav {
      margin: 0;
      padding: 0;
    }

    &__nav-link {
      margin: 0 24px 0 0;
      padding: 0;

      white-space: nowrap;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;

      color: #1F2020;

      &:last-child {
        margin: 0;
      }
    }

    &__contacts {
      margin-right: 20px;
      padding: 0;
    }

    &__phone {
      margin: 0;
      padding: 0;

      text-align: left;
      white-space: nowrap;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.02em;

      color: #1F2020;
    }

    &__call-back {
      cursor: pointer;
      margin: 0;
      padding: 0;

      text-align: left;
      white-space: nowrap;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;

      color: #1F2020;
      opacity: 0.3;

      background: rgba($color: #FFFFFF, $alpha: 0);
      border: none;
    }

    &__sub-nav {
      margin: 0;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &__sub-nav-btn {
      cursor: pointer;
      margin: 0 24px 0 0;
      padding: 0;

      width: 24px;
      height: 24px;

      border: none;
      border-radius: 50%;
      background: olive;

      &--search {
        background: no-repeat center url("../assets/images/search.svg") rgba($color: #FFFFFF, $alpha: 0);
      }

      &--profile {
        background: no-repeat center url("../assets/images/profile.svg") rgba($color: #FFFFFF, $alpha: 0);
      }

      &--like {
        background: no-repeat center url("../assets/images/like.svg") rgba($color: #FFFFFF, $alpha: 0);
      }

      &--cart {
        background: rgba($color: #7BB899, $alpha: 1.0);

        white-space: nowrap;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.06em;
        text-transform: uppercase;

        color: #1F2020;
      }

      &:last-child {
        margin: 0;
      }
    }

  }
</style>
