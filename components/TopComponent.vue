<template>
  <div id="scroll">
    <a href="#scroll-top" class="top"><i class="fa-solid fa-angle-up"></i></a>
  </div>
  <!--data-anima="scroll"-->
</template>
<script>
export default {
  name: 'TopComponent',
  data() {
    return {
      scrollAnima: null,
      upitem: null,
      ItemVisible: null,
    }
  },
  mounted() {
    this.scrollAnima = document.querySelector('#scroll')
    window.addEventListener('scroll', this.positionScroll)
  },
  methods: {
    positionScroll() {
      this.upitem = this.scrollAnima.getBoundingClientRect().top
      this.ItemVisible = this.upitem < 0
      if (this.ItemVisible) {
        this.scrollAnima.classList.add('show')
      } else {
        this.scrollAnima.classList.remove('show')
      }
    },
  },
}
</script>
<style scoped>
.top {
  position: fixed;
  width: 34px;
  height: 34px;
  right: 30px;
  bottom: 30px;
  line-height: 34px;
  font-size: 14px;
  text-align: center;
  color: #666;
  background-color: #222;
  border-radius: 3px;
  transition: ease 0.3s;
  opacity: 0;
  z-index: -1;
}
.top:hover {
  color: #fff;
}
.show .top {
  opacity: 1;
  z-index: 999;
}
</style>
