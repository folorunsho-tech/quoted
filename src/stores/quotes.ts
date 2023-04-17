import { defineStore } from "pinia";
import axios from "axios";
const base_url = "https://api.quotable.io";
export const useQuotesStore = defineStore({
  id: "qoutes",
  state: () => ({
    qoutes: [],
  }),
  actions: {
    async getQuotes() {
      try {
        const topQuotes = await axios
          .get(`${base_url}/quotes/random?limit=20&tags=famous-quotes`)
          .then((res) => (this.qoutes = res.data));
        return (this.qoutes = topQuotes);
      } catch (error) {
        return error;
      }
    },
  },
});
