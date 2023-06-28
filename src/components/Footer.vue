<template>
  <footer class="container-fluid foot">
    <div class="email">
      <p class="center">Gmail: rayhaankhan04@gmail.com</p>
    </div>
    <div class="icons">
      <a href="https://www.instagram.com" target="_blank"
        ><i class="fa-brands fa-instagram fa-2xl" style="color: #ad0023"></i>
      </a>
      <a href="https://twitter.com" target="_blank"
        ><i class="fa-brands fa-twitter fa-2xl" style="color: #4379d6"></i>
      </a>
    </div>
    <div class="cop">
      <p class="copyright">Copyright &copy Rayhaan Khan</p>
    </div>
  </footer>
</template>


<script>
export default {};
</script>

<style scoped>
footer {
  height: 100%;
  background-color: black;
}

.center {
  position: relative;
  top: 20px;
  text-align: center;
  color: white;
}

.icons {
  text-align: center;
}

.fa-brands {
  padding: 5px;
}

.copyright {
  color: white;
}

a {
  text-decoration: none;
}

.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.cop {
  display: contents;
  justify-content: start;
  align-items: center;
  width: 100%;
}
</style>
