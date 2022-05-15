<template>
  <div>
    <nav-bar-component></nav-bar-component>
    <Nuxt />
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavBarComponent from '~/components/NavBarComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterComponent, 'nav-bar-component': NavBarComponent },
}
</script>
<style lang="scss" scoped></style>
