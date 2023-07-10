<template>
  <div class="home">
    <Landing/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import Landing from "@/components/Landing.vue"
import About from "@/components/About.vue"
import Contact from "@/components/Contact.vue"

  export default {
    components: {
      Home, About, Contact, Landing
    }
  }
</script>

<style scoped>
</style>