<template>
  <div>
    <a name="scroll-top"></a>
    <!-- deve add um navbar aqui -->
    <top-component></top-component>
    <Nuxt />
    <information-component></information-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '~/components/FooterComponent.vue'
import InformationComponent from '~/components/InformationComponent.vue'
import TopComponent from '~/components/TopComponent.vue'

export default {
  name: 'DefaultLayout',
  components: {
    FooterComponent,
    InformationComponent,
    TopComponent,
  },
}
</script>
<style lang="scss" scoped></style>
