<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{cart_item_data.name}}</p>
      <!-- <p class="v-cart-item__price">{{cart_item_data.quantity*cart_item_data.price}} ₽</p> -->
      <p class="v-cart-item__price">{{totalItemPrice}} ₽</p>
    </div>
    <div class="v-cart-item__quantity-control">
      <button class="v-cart-item__quantity-btn v-cart-item__quantity-btn--minus" @click="decreaseQuantity"></button>
      <p class="v-cart-item__quantity">{{cart_item_data.quantity}}</p>
      <button class="v-cart-item__quantity-btn v-cart-item__quantity-btn--plus" @click="increaseQuantity"></button>
      <button class="v-cart-item__remove-btn" @click="removeFromCart"></button>
    </div>
    <!-- <p>{{cart_item_data}}</p> -->
  </div>
</template>

<script>
export default{
  name: "v-cart-item",
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      }
    },
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
    return{}
  },
  computed: {
    totalItemPrice() {
      return this.cart_item_data.quantity*this.cart_item_data.price;
    }
  },
  methods:{
    increaseQuantity() {
      this.$emit('increaseQuantity', this.cart_item_data.article)
    },

    decreaseQuantity() {
      this.$emit('decreaseQuantity', this.cart_item_data.article)
    },

    removeFromCart() {
      this.$emit('removeFromCart', this.cart_item_data.article)
    }
  }
}
</script>

<style lang="scss">
  .v-cart-item {
    width: 520px;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);

    &__image {
      width: 96px;
      height: 96px;
      margin: 0;
      padding: 0;
      display: block;
    }

    &__info {
      display: block;
      width: 165px;
      margin: auto 62px auto 8px;
      padding: 0;
    }

    &__name {
      margin: 0;
      padding: 0;

      text-align: left;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 112%;

      letter-spacing: 0.02em;

      color: #1F2020;
    }

    &__price {
      margin: 16px 0 0 0;
    
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }

    &__quantity-control {
      margin: 0;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;

    }

    &__quantity-btn {
      cursor: pointer;

      width: 40px;
      height: 24px;
      border: none;
      border-radius: 4px;

      background: #F2F2F2;
      outline: 1px blue;
      &--minus {
        background: no-repeat center url("../assets/images/btn-minus.svg") #F2F2F2;
      }
      &--plus {
        background: no-repeat center url("../assets/images/btn-plus.svg") #F2F2F2;
      }
    }

    &__quantity {
      margin: 0 1em;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }

    &__remove-btn {
      cursor: pointer;

      margin: 0 0 0 2em;
      width: 24px;
      height: 24px;
      display: block;
      background-color: rgba($color: #FFF, $alpha: 0);
      background: no-repeat center url("../assets/images/btn-cross.svg") rgba($color: #FFF, $alpha: 0);
      opacity: 0.2;
      border: none;
    }
  }
</style>
