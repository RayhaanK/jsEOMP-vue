import { createStore } from "vuex";

const dataURL = "https://rayhaank.github.io/exercise-jsonServer/products.json";

export default createStore({
  state: {
    products: null,
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        let res = await fetch(dataURL);
        let { products } = await res.json();
        if (products) {
          context.commit("setProducts", products);
          context.commit("setMsg", "No Products");
        } else {
          context.commit("setMsg", "error");
        }
      } catch (e) {
        alert(e.message);
      }
    },

  },
  modules: {},
});

// async featuredProducts(context){
//   try{
//   let feat = await fetch(dataURL);
//   let {featProducts} = await feat.json()
//   if(featProducts){
//     context.commit('setFeaturedProducts',featProducts)
//     context.commit('setSpinner',false)
//   }else{
//     context.commit('setSpinner',true)
//   }
// }catch(e) {
//   alert(e.message)
// }
// }