<template>
  <div>
    <!-- deve add um navbar aqui -->
    <Nuxt />
    <information-component></information-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
import InformationComponent from '~/components/InformationComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterComponent, InformationComponent },
}
</script>
<style lang="scss" scoped></style>
