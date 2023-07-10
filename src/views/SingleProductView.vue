<template>
  <section id="singleV" class="singleV">
    <Navbar />
    <div class="container-fluid">
      <h2 class="display-2">Product</h2>
      <div class="container-fluid">
        <div class="row featPost">
          <div class="col g-3 mt-2 d-flex justify-content-center">
            <div class="card bg-dark-subtle" style="width: 442px">
              <h4 class="text-center prodTitle">{{ $route.query.name }}</h4>
              <div class="image">
                <img
                  :src="$route.query.img"
                  class="card-img-top img-fluid prodImg"
                  :alt="$route.query.title"
                />
              </div>
              <div class="card-body">
                <div class="cardText">
                  <p class="card-text">{{ $route.query.description }}</p>
                </div>
                <!-- <div class="modalBtn">
                  <button
                    type="button"
                    class="contentBtn"
                    data-bs-toggle="modal"
                    :data-bs-target="'#s' + $route.query.id"
                  >
                    Content
                  </button>
                  <div
                    class="modal show"
                    :id="'#s' + $route.query.id"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content bg-dark-subtle">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            About
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          {{ $route.query.content }}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
              <div>
                <p class="amount text-center">
                  <span class="boldP"> R{{ $route.query.price }} </span>
                </p>
              </div>
              <div class="addCart">
                <router-link to="/product"
                  ><button class="cartBtn">
                    Back to Products
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.singleV {
  height: 150vh;
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
  ground-size: cover !important;
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

.amount {
  margin-bottom: 1rem;
}

.addCart {
  display: flex;
  justify-content: center;
}

.cartBtn {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
  margin-top: 2px;
  margin-bottom: 5px;
}

.cartBtn:hover {
  background-color: #f7f7f788;
}

.boldW {
  font-weight: 600;
}

.boldP {
  font-weight: 600;
  color: black;
}

/* a {
  color: black;
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
  margin-top: 2px;
  margin-bottom: 5px;
  text-decoration: none;
}

a:hover {
  background-color: #f7f7f788;
} */
.contentBtn {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}
.contentBtn:hover {
  background-color: #f7f7f788;
}

.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f7d3;
}

@media screen and (max-width: 1055px) {
  .prodTitle {
    font-size: 1.3rem !important;
  }
}

@media screen and (max-width: 1025px) {
  .prodTitle {
    font-size: 1.5rem !important;
  }
}
</style>
