<template>
  <div>
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
  </div>
</template>
<script>
import ButtonNextAndPrevByCategory from '~/components/ButtonNextAndPrevByCategory.vue'
export default {
  name: 'HomePage',
  components: { ButtonNextAndPrevByCategory },
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
