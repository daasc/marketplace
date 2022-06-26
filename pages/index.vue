<template>
  <div>
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

    <section>
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
  </div>
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
      products: [
        {
          name: 'Vimto Squash Remix Apple 1.5',
          urlImage:
            'https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/08_3a.jpg?resize=600%2C600&ssl=1',
          weight: 456,
          price: 6.9,
          id: 'qfafasdfasd',
          stock: 10,
        },
      ],
    }
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
</style>
