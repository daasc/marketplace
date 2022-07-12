<template>
  <main class="main">
    <banner-component></banner-component>
    <div class="category">
      <h2>Browse by Category</h2>
      <ButtonNextAndPrevByCategory></ButtonNextAndPrevByCategory>
    </div>
    <section id="list_category" class="list-category">
      <CardCategory
        v-for="(item, index) in categories"
        :key="index"
        :url-image="item.urlImage"
        :description="item.description"
      ></CardCategory>
    </section>
    <section id="list_promotion" class="list-promotion">
      <div class="category">
        <h2>Featured Brands</h2>
        <ButtonNextAndPrevByCategory></ButtonNextAndPrevByCategory>
      </div>
      <CardPromotion></CardPromotion>
    </section>
    <section id="list_product" class="list-product">
      <div class="category">
        <h2>Top Saver Today</h2>
        <ButtonNextAndPrevByCategory></ButtonNextAndPrevByCategory>
      </div>
      <CardProduct
        v-for="(item, index) in products"
        :id="item.id"
        :key="index"
        :name="item.name"
        :url-image="item.urlImage"
        :price="item.price"
        :weight="item.weight"
        :stock="item.stock"
      ></CardProduct>
    </section>
  </main>
</template>
<script>
import BannerComponent from '~/components/BannerComponent.vue'
import ButtonNextAndPrevByCategory from '~/components/ButtonNextAndPrevByCategory.vue'
import CardCategory from '~/components/CardCategory.vue'
import CardProduct from '~/components/CardProduct.vue'
export default {
  name: 'HomePage',
  components: {
    ButtonNextAndPrevByCategory,
    CardCategory,
    CardProduct,
    BannerComponent,
  },
  layout: 'default',
  data() {
    return {
      categories: [
        {
          urlImage:
            'https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-cat-1.png?resize=100%2C86&ssl=1',
          description: 'description',
        },
      ],
    }
  },
  computed: {
    products() {
      return this.$store.state.product.products
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  async created() {
    await this.$store.dispatch('product/getProducts')
    this.$nuxt.$loading.finish()
  },
}
</script>
<style lang="scss">
.category {
  display: flex;
  width: 99%;
  justify-content: space-between;
  margin: 25px 10px;
}
.list-category {
  padding: 10px;
  display: flex;
  width: 98%;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-top: 4px;
  h3 {
    margin: 15px 0px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
.list-promotion {
  display: flex;
  flex-direction: column;
  width: 98%;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-top: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.list-product {
  margin: 70px 0 100px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  width: 98%;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-top: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
