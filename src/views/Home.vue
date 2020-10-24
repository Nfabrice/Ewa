<template>
  <div class="home">
    <div class="nav">
      <NavBar/>
    </div>
    <div class="landing-page">
      <Landing/>
    </div>
    <div class="shop">
      <Shop/>
    </div>
    <div class="products">
      <Products/>
    </div> <br>
    <div class="testimonial">
      <Testimonial/>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Landing from '@/components/Landing.vue'
import Shop from '@/components/Shop.vue'
import Products from '@/components/Products.vue'
import Testimonial from '@/components/Testimonial.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Landing,
    Shop,
    Products,
    Testimonial,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
  }
</style>
