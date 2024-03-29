import { defineStore, createPinia } from 'pinia';
import {store} from 'quasar/wrappers'
import axios from 'axios'


export const useCounterStore = defineStore('store', {
  state: () => ({
   category: [],
   boys:[],
   womens:[],
   childern:[],
   smartphones:[],
   products: [],
   search_product: []
  }),
  getters: {

  },
  actions: {
    async GETAPI() {
      let apiInfo = await axios.get("http://bazarcom.pythonanywhere.com/category/")
        this.category = apiInfo.data
        console.log(this.category);
        this.boys = this.category[0].products
        this.womens = this.category[1].products
        this.childern = this.category[2].products
        this.smartphones = this.category[3].products

        console.log(this.boys)
    },
    async GETPRODUCTS(){
      let apiproduct = await axios.get("http://bazarcom.pythonanywhere.com/products/")
      this.products = [...apiproduct.data]
      this.search_product = [...apiproduct.data]
    }
  },

});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
