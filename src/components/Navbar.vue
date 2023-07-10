<template>
  <div class="main">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img[alt="Logo"] {
  width: 11rem;
}

img[alt="Logo"]:hover {
  outline: 3px solid #ffcb74;
  border-radius: 10px;
}

.nav-link {
  color: #f7f7f7 !important;
  border-bottom: 1px solid #f7f7f7;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #ffcc74cb !important;
}

.hamburger {
  color: #ffcb74 !important;
  background-color: #ffcc74cb !important;
}
</style>
