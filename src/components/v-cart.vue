<template>
  <form class="v-cart" v-on:submit.prevent>
    <div class="v-cart__content-wrapper">
      <h1 class="v-cart__headline">Корзина</h1>
      <button class="v-cart__close-btn" @click="closeCart"></button>
      <!-- <p>Cart: {{cart}}</p> -->
      <div class="v-cart__cart-info">
        <p class="v-cart__item-quantity">{{itemQuantity}}</p>
      </div>
      <v-cart-item class="v-cart__item"
        v-for="cart_item in cart"
        :key="cart_item.article"
        :cart_item_data="cart_item"
        @addToCart="addToCart"
        @increaseQuantity="increaseQuantity"
        @decreaseQuantity="decreaseQuantity"
        @removeFromCart="removeFromCart"
      />
      <div class="v-cart__total">
        <p class="v-cart__total-price"><span class="v-cart__total-price--subtitle">Итого</span> {{totalPrice}}</p>
        <button class="v-cart__submit-btn">Оформить заказ</button>
      </div>
    </div>
  </form>
</template>

<script>
import vCartItem from './v-cart-item.vue';
export default{
  components: { vCartItem },
  name: "v-cart",
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return{
    }
  },
  computed: {
    itemQuantity() {
      return "Количество товаров: " + this.cart.reduce( (acc, current) => {
        return acc + current.quantity;
      }, 0)
    },

    totalPrice() {
      return this.cart.reduce( (acc, current) => {
        return acc + current.quantity*current.price;
      }, 0).toLocaleString('ru-RU');
    }
  },
  methods:{
    closeCart() {
      this.$emit('closeCart')
    },

    addToCart(data) {
      // console.log(data);
      this.$emit('addToCart', data)
      
    },

    decreaseQuantity(data) {
      this.$emit('decreaseQuantity', data)
    },

    increaseQuantity(data) {
      this.$emit('increaseQuantity', data)
    },

    removeFromCart(data) {
      this.$emit('removeFromCart', data)
    }

  }
}
</script>

<style lang="scss">
  .v-cart {
    position: fixed;
    top: 0;
    right: 0;

    margin: 0;
    padding: 0;
    width: 600px;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    background: #FFFFFF;

    &__content-wrapper {
      margin: 0;
      padding: 40px;

      height: 100%;

      display: flex;
      flex-direction: column;
      flex-grow: 1;

    }

    &__headline {
      margin: 0 0 94px 0;
      padding: 0;

      text-align: left;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 88%;
      letter-spacing: -0.04em;

      color: #1F2020;
    }

    &__close-btn {
      cursor: pointer;

      position: absolute;
      top: 32px;
      right: 40px;

      background: no-repeat center url("../assets/images/btn-cross.svg") rgba($color: #FFF, $alpha: 0);
      margin: 0;
      padding: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      box-sizing: border-box;
    }

    &__item {
      margin: 0;
    }

    &__total {
      margin: auto 0 0 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    &__total-price {
      display: flex;
      flex-direction: column;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 100%;
      letter-spacing: -0.02em;

      color: #1F2020;

      &--subtitle {
        margin-bottom: 6px;
        text-align: left;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;

        color: #1F2020;
      }
    }

    &__submit-btn {
      cursor: pointer;
      width: 240px;
      height: 56px;

      display: block;

      background: #7BB899;
      border: none;
      border-radius: 4px;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      text-align: center;
      letter-spacing: 0.06em;
      text-transform: uppercase;

      color: #1F2020;

      &:hover {
        opacity: 0.9;
      }
    }
  }
</style>
