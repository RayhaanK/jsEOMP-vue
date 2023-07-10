<template>
    <header>
        <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/J4kSP0ZC/Inspector-Gadgets-Logo.png"
            alt="Logo"
            loading="lazy"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item p-2">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item p-2">
              <router-link class="nav-link" to="/product">Products</router-link>
            </li>
            <li class="nav-item p-2">
              <router-link class="nav-link" to="/admin">Admin Interface</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>  

      <section id="landingPage">
        <div class="container-fluid">
          <div class="container landingText">
            <h1 class="dispay-1 text-white text-center">
              Welcome to <span class="bold">Inspector Gadgets</span>
            </h1>
            <p class="text-center text-white">
              At Inspector Gadgets our <span class="bold">Aim</span> it to keep
              <span class="bold">You</span> up to date with the
              <span class="bold">Latest Technology</span>
            </p>
          </div>
        </div>
      </section>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    header {
    background-size: cover;
    background-image: linear-gradient(180deg, 
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.8) 100%), 
    url("https://i.postimg.cc/y6yCrXcc/vinicius-amnx-amano-XOnbUXqILzA-unsplash.jpg"); 
    height: 100vh;
}

img[alt="Logo"] {
  width: 11rem;
}

img[alt="Logo"]:hover {
  outline: 3px solid #ffcb74;
  border-radius: 10px;
}


.bold {
    font-weight: 600;
    color: #FFCB74;
}

.nav-link {
    color: #F7F7F7  !important;
    border-bottom: 1px solid #F7F7F7;
}

.nav-link:hover {
    background-color: #ffcc74cb !important;
}

.hamburger {
    color: #FFCB74 !important;
    background-color: #ffcc74cb !important;
}

.landingText {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-direction: column;
    height: 60vh;
}

p {
    font-size: 16px;
}


.boldW {
    font-weight: 600;
    color: #fff;
}

</style>