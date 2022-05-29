<template>
  <div>
    <banner-component></banner-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
export default {
  name: 'HomePage',
  components: {
    'footer-component': FooterComponent,
    'banner-component': BannerComponent,
  },
}
</script>
