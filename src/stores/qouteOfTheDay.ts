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
        const quotes = await axios.get(
          `${base_url}/quotes/random/?tags=inspirational`
        );
        const author_slug = quotes.data[0].authorSlug;
        const author_link = (
          await axios.get(`${base_url}/authors/?slug=${author_slug}`)
        ).data?.results[0]?.link;
        const quote = {
          ...quotes.data[0],
          author_link,
        };

        return (this.qoute = quote);
      } catch (error) {
        return error;
      }
    },
  },
});
