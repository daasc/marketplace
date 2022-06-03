<template>
  <div class="card-category">
    <img :src="urlImage" alt="" />
    <div class="card-name-category">description</div>
  </div>
</template>
<script>
export default {
  name: 'CardCategory',
  props: {
    urlImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.card-category {
  background-color: #f7f7f6;
  border-radius: 10px;
  min-width: 190px;
  height: 210px;
  cursor: pointer;
  padding: 46px 27px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
  &:hover {
    box-shadow: 0 30px 40px 0 rgb(131 132 135 / 15%);
    transition: 0.5s;
  }
  img {
    width: 100px;
    height: 86px;
    align-self: center;
  }
  .card-name-category {
    align-self: center;
  }
}
</style>
