<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__image-wrapper">
      <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="">
    </div>
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">{{product_data.price}} ₽</p>
    <button class="v-catalog-item__add-to-cart-btn" @click="addToCart"></button>
  </div>
</template>

<script>
export default{
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
    return{}
  },
  methods:{
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    // min-width: 278px;
    min-width: 250px;
    max-width: 278px;
    max-height: 376px;
    margin: 0 12px;
    padding: 22px 0;
    flex-basis: 0;
    flex-grow: 1;
    // white-space: nowrap;
    position: relative;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    display: flex;
    flex-direction: column;
    justify-content: center;

    &__image-wrapper {
    min-width: 250px;
      max-width: 278px;
      min-height: 250ps;
      max-height: 278px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      margin: 0;
      display: block;
      min-width: 250px;
      max-width: 278px;
      max-height: 278px;
    }

    &__name {
      margin: 16px 0 0 0;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 112%;

      letter-spacing: 0.02em;
      text-align: left;
    }

    &__price {
      margin: 24px 0 0 0;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      text-align: left;
    }

    &__add-to-cart-btn {
      display: none;
      cursor: pointer;
      width: 80px;
      height: 32px;
      border: none;
      border-radius: 8px;
      background-color: #7BB899;
      background: url(../assets/images/plus.png) center center no-repeat #7BB899;

      position: absolute;
      bottom: 14px;
      right: 6px;

      &:hover {
        opacity: 0.9;
      }
    }

    &:hover &__add-to-cart-btn{
      display: block;
    }
  }
</style>
