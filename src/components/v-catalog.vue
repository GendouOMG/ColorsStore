<template>
  <div class="v-catalog">
    <div class="v-catalog__filters">
      <p>Новинки</p>
      <p>Новинки</p>
      <p>Новинки</p>
    </div>
    <div class="v-catalog__item-wrapper">
      <div class="v-catalog__headline">
        <p>Найдено товаров: {{products.length}}</p>
        <p>Фильтр</p>
      </div>
      <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>

  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
export default{
  components: { vCatalogItem },
  name: "v-catalog",
  props: {
    products: {
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
  methods:{

    addToCart(data){
      // console.log(data);
      this.$emit('addToCart', data)
      
    }
  }
}
</script>

<style lang="scss">
  .v-catalog {
    margin: 72px 0 140px 0;
    padding: 0 3.3%;
    display: flex;

    &__filters {
      min-width: 170px;
      padding-right: 64px;
    }

    &__item-wrapper {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      // justify-content: space-between;
    }

    &__headline {
      margin: 0 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.06em;
      text-transform: uppercase;

      color: #1F2020;
    }
  }
</style>
