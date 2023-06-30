<template>
  <div class="home">
    <Home/>
    <About/>
    <FeaturedProducts/>
    <Contact/>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import FeaturedProducts from "@/components/FeaturedProducts.vue"
import Contact from "@/components/Contact.vue"

  export default {
    components: {
      Home, About, FeaturedProducts, Contact
    }
  }
</script>

<style scoped>
  .home {
    background-color: #C38154;
  }
</style>