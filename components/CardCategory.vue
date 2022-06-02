<template>
  <div class="card-category">
    <img
      src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-cat-1.png?resize=100%2C86&ssl=1"
      alt=""
    />
    <div class="card-name-category">description</div>
  </div>
</template>
<script>
export default {
  name: 'CardCategory',
}
</script>
<style lang="scss" scoped>
.card-category {
  background-color: #f7f7f6;
  border-radius: 10px;
  width: 210px;
  cursor: pointer;
  padding: 46px 27px 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
