import { defineStore, createPinia } from 'pinia';
import {store} from 'quasar/wrappers'
import axios from 'axios'


export const useCounterStore = defineStore('store', {
  state: () => ({
    counter: 0,
    category: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async GETAPI() {
      let apiInfo = await axios.get("http://bazarcom.pythonanywhere.com/category/")
        this.category = apiInfo.data
        console.log(this.category)
    }
  },
});



export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
