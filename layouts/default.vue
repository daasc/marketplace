<template>
  <div>
    <!-- deve add um navbar aqui -->
    <Nuxt />
    <banner-component></banner-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
import BannerComponent from '~/components/BannerComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterComponent, BannerComponent },
}
</script>
<style lang="scss" scoped></style>
