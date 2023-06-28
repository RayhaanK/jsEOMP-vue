<template>
  <div class="home">
    <Home/>
    <About/>
    <Products/>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Products from "@/components/FeaturedProducts.vue"

  export default {
    components: {
      Home, About, Products
    }
  }
</script>

<style scoped>
  .home {
    background-color: #C38154;
  }
</style>