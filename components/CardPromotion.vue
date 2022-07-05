<template>
  <a href="#">
    <div class="CardPromotion">
      <img src="@/assets/images/promotion1.jpg" alt="Promotion 1" />
      <h3>FOODPOUCH</h3>
      <p>New Snacks Release</p>
    </div>
  </a>
</template>
<script>
export default {
  name: 'CardPromotion',
}
</script>
<style scoped>
.CardPromotion {
  font-family: 'Mulish', sans-serif;
  margin: 0 7.15px;
  padding: 0;
  float: left;
  height: 100%;
  min-height: 1px;
  color: #666;
  font-size: 14px;
  width: 185px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {
  margin: auto;
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

h3 {
  margin: 25px 0 0;
  color: #999;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 700;
}

p {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  transition: 0.5s;
}

p:hover {
  color: #fab528;
}

@media (min-width: 900px) {
  .CardPromotion {
    margin: 0 15px;
    max-width: 25%;
    width: auto;
  }
}
</style>
