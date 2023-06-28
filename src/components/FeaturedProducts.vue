<template>
  <section id="featuredProducts" class="featuredP">
    <div class="container-fluid">
      <div class="featuredH">
        <h2
          class="display-3 text-white text-center text-decoration-underline p-4"
        >
          A glimpse of what's ahead!
        </h2>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-3 mx-sm-5 featPost"
      >
        <div class="col g-3 mt-4" v-for="item in prod" :key="item.id">
          <div class="card bg-dark-subtle">
            <h4 class="text-center prodTitle">{{ item.title }}</h4>
            <div class="image">
              <img
                :src="item.image"
                class="card-img-top img-fluid prodImg"
                :alt="item.title"
              />
            </div>
            <div class="card-body">
              <div class="cardText">
                <p class="card-text">{{ item.description }}</p>
              </div>
            </div>
            <div>
              <p class="amount text-center">
                <span class="boldP"> R{{ item.amount }} </span>
              </p>
              <div class="addCart">
                <router-link to="/product">Go to Products</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      prod: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch(
        "https://rayhaank.github.io/exercise-jsonServer/products.json"
      );
      let parsedProd = await res.json();
      this.prod = parsedProd.products.slice(0 , 3);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.featuredP {
  height: max-content;
  border-bottom: 1px solid black;
}

.prodTitle {
  font-size: 1.9rem !important;
  height: 100px !important;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  height: 17rem;
  width: 17rem;
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.466));
}

.prodImg {
  background-size: cover !important;
}

.cardText {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.card-text {
  text-align: center;
}

.addCart {
  display: flex;
  justify-content: center;
}

.boldW {
  font-weight: 600;
}

.boldP {
  font-weight: 600;
  color: black;
}

a {
  color: black;
  background-color: #F7F7F7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
  margin-top: 2px;
  margin-bottom: 5px;
  text-decoration: none;
}

a:hover {
    background-color: #f7f7f788;
}


</style>
