<template>
  <section id="admin" class="adm">
    <div class="container-fluid">
      <h1
        class="display-1 text-center text-white mb-2 text-decoration-underline p-4"
      >
        Admin Interface
      </h1>
      <div class="container-fluid">
        <button class="btn2 float-start" id="sort">Sort By ID(asc/desc)</button>
        <div class="d-flex justify-content-center mb-2">
          <button
            type="button"
            class="btn2 mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Item
          </button>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark-subtle">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Item
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Title</p>
                <input type="text" id="title" />
                <p>Description</p>
                <input type="text" id="description" />
                <p>Content</p>
                <input type="text" id="content" />
                <p>Image Link</p>
                <input type="text" id="imageLink" />
                <p>Price</p>
                <input type="text" id="price" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn1" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn1" id="addProduct">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table
        class="table table-responsive table-bordered border-black table-secondary table-hover"
      >
        <thead>
          <tr>
            <th scope="col">ID#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody id="adminInput">
          <tr v-for="item in products" :key="item.id">
            <th>
              <div class="tablerows">{{ item.id }}</div>
            </th>
            <td>
              <div class="tablerows">{{ item.title }}</div>
            </td>
            <td>
                <div class="tableRows">
                    <img :src="item.image" :alt="item.title" loading="lazy" />
                </div>
            </td>
            <td>
              <div class="tablerows">{{ item.description }}</div>
            </td>
            <td><div class="tablerows"> R{{ item.amount }}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.adm {
  height: max-content;
}

.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f788;
}

.btn2 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn2:hover {
  background-color: #f7f7f7d3;
}

.modal-body {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tableRows {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

img {
  width: 11rem;
  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.466));
}

th {
  text-align: center;
}
td {
  height: 160px;
}

.selectF {
  width: 20%;
}
</style>
