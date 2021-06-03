<template>
  <div class="v-main-wrapper">
    <v-header />
    <v-catalog
      :products="products"
      @addToCart="addToCart"
    />
    <!-- <v-cart
      :cart="cart"
      @addToCart="addToCart"
      @increaseQuantity="increaseProductQuantity"
      @decreaseQuantity="decreaseProductQuantity"
      @removeFromCart="removeFromCart"
    /> -->
  </div>
</template>

<script>
// import VCart from './v-cart.vue'
import vCatalog from './v-catalog.vue'
import VHeader from './v-header.vue'

export default{
  components: { vCatalog, VHeader },
  // components: { vCatalog, VCart },
  name: "v-main-wrapper",
  data(){
    return{
      cart: [],
      "products": [
        {
          "image": "1.jpg",
          "name": "Краска Wallquest, Brownsone MS90102",
          "price": 100,
          "article": "T1",
          "available": true,
          "category": "Мужские"
        },
        {
          "image": "2.jpg",
          "name": "Краска Wallquest, Brownsone MS90103",
          "price": 150,
          "article": "T2",
          "available": true,
          "category": "Женские"
        },
        {
          "image": "3.jpg",
          "name": "Краска Wallquest, Brownsone MS90104",
          "price": 200,
          "article": "T3",
          "available": false,
          "category": "Женские"
        },
        {
          "image": "4.jpg",
          "name": "Краска Wallquest, Brownsone MS90105",
          "price": 250,
          "article": "T4",
          "available": true,
          "category": "Мужские"
        },
        {
          "image": "5.jpg",
          "name": "Краска Wallquest, Brownsone MS90106",
          "price": 300,
          "article": "T5",
          "available": false,
          "category": "Женские"
        },
        {
          "image": "6.jpg",
          "name": "Краска Wallquest, Brownsone MS90107",
          "price": 350,
          "article": "T6",
          "available": true,
          "category": "Женские"
        }
      ]
    }
  },
  computed: {
  },
  methods:{
    addToCart(product) {
      // this.cart.push(data)
      if(this.cart.length !== 0) {
        let isProductExists = false;
        this.cart.map( item => {
          if(item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if(!isProductExists) {
          // product.quantity = 1;
          this.$set(product, "quantity", 1)
          this.cart.push(product);
        }
      } else {
        // product.quantity = 1;
        this.$set(product, "quantity", 1)
        this.cart.push(product);
      }
      // console.log(product)
    },

    increaseProductQuantity(productArticle) {
      this.cart.map( item => {
        if(item.article === productArticle) {
          item.quantity++;
        }
      });
    },
    
    decreaseProductQuantity(productArticle) {
      this.cart.map( item => {
        if(item.article === productArticle) {
          if(item.quantity > 1){
            item.quantity--;
          }
        }
      });
    },

    removeFromCart(productArticle) {
      this.cart = this.cart.filter( item => {
        return item.article !== productArticle;
      });
    }
  }
}
</script>

<style lang="scss">
</style>
