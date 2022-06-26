<template>
  <div v-if="loading" class="load">
    <div class="loading2Wrap">
      <div class="loading2_1"></div>
      <div class="loading2_2"></div>
      <div class="loading2_3"></div>
      <div class="loading2_4"></div>
      <div class="loading2_5"></div>
      <div class="loading2_6"></div>
      <div class="loading2_7"></div>
      <div class="loading2_8"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      console.log('start')
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.load {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 10000;
}
.loading2Wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 48px;
  height: 48px;
  margin: 48px auto;
}
.loading2_1,
.loading2_2,
.loading2_3,
.loading2_4,
.loading2_5,
.loading2_6,
.loading2_7,
.loading2_8 {
  position: absolute;
  border: 4px solid transparent;
  border-radius: 100%;
}
.loading2_1 {
  top: 0;
  left: 20px;
  animation: loading2 1s infinite;
}
.loading2_2 {
  top: 5px;
  right: 5px;
  animation: loading2 1s infinite 0.125s;
}
.loading2_3 {
  top: 20px;
  right: 0;
  animation: loading2 1s infinite 0.25s;
}
.loading2_4 {
  bottom: 5px;
  right: 5px;
  animation: loading2 1s infinite 0.375s;
}
.loading2_5 {
  bottom: 0;
  left: 20px;
  animation: loading2 1s infinite 0.5s;
}
.loading2_6 {
  bottom: 5px;
  left: 5px;
  animation: loading2 1s infinite 0.625s;
}
.loading2_7 {
  top: 20px;
  left: 0;
  animation: loading2 1s infinite 0.75s;
}
.loading2_8 {
  top: 5px;
  left: 5px;
  animation: loading2 1s infinite 0.875s;
}
@keyframes loading2 {
  0% {
    border-color: #333;
  }
  100% {
    border-color: #fff;
  }
}
</style>
