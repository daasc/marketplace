<template>
  <div>
    <!-- deve add um navbar aqui -->
    <banner-component></banner-component>
    <Nuxt />
    <information-component></information-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
import InformationComponent from '~/components/InformationComponent.vue'
import BannerComponent from '~/components/BannerComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterComponent, InformationComponent, BannerComponent },
}
</script>
<style lang="scss" scoped></style>
