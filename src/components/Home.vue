<template>
     <section id="landingPage" class="landingSection">
        <div class="container-fluid">
          <div class="container landingText">
            <h1 class="dispay-1 text-center">
              Welcome to <span class="bold">Inspector Gadgets</span>
            </h1>
            <p class="text-center">
              At Inspector Gadgets our <span class="bold">Aim</span> it to keep
              <span class="bold">You</span> up to date with the
              <span class="bold">Latest Technology</span>
            </p>
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.landingText {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-direction: column;
    height: 90vh;
}

p {
    font-size: 16px;
}


.bold {
    font-weight: bold;
}
</style>