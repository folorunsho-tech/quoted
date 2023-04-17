import { defineStore } from "pinia";
import axios from "axios";
const base_url = "https://api.quotable.io";
export const useQouteOfTheDayStore = defineStore({
  id: "qouteOfTheDay",
  state: () => ({
    qoute: {},
  }),
  actions: {
    async getQoute() {
      try {
        const quotes = await axios
          .get(`${base_url}/quotes/random`)
          .then((res) => (this.qoute = res.data));
        return (this.qoute = quotes);
      } catch (error) {
        return error;
      }
    },
  },
});
