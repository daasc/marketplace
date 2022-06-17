<template>
  <div>
    <nav-bar-component></nav-bar-component>

    <a name="scroll-top"></a>
    <!-- deve add um navbar aqui -->
    <top-component></top-component>
    <Nuxt />
    <information-component></information-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavBarComponent from '~/components/NavBarComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import InformationComponent from '~/components/InformationComponent.vue'
import TopComponent from '~/components/TopComponent.vue'

export default {
  name: 'DefaultLayout',
  components: {
    FooterComponent,
    InformationComponent,
    TopComponent,
    'nav-bar-component': NavBarComponent,
  },
}
</script>
<style lang="scss" scoped></style>
