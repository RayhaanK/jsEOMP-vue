<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
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
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">Admin Interface</router-link>
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
.navbar {
    background-color: #884A39;
}

a {
    color: #C38154;
    text-decoration: none;
}

li {
    padding: 0.8rem;
}
</style>
