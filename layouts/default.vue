<template>
  <div>
    <!-- deve add um navbar aqui -->
    <Nuxt />
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterComponent },
}
</script>
<style lang="scss" scoped></style>
