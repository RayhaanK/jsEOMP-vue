<template>
  <div class="home">
    <Home/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Contact from "@/components/Contact.vue"

  export default {
    components: {
      Home, About, Contact
    }
  }
</script>

<style scoped>
  .home {
    background-color: #C38154;
  }
</style>