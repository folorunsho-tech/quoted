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
        const topQuotes = await axios.get(
          `${base_url}/quotes/random?limit=20&tags=famous-quotes`
        );
        const authors_link = await Promise.all(
          topQuotes.data.map(async (quote: any) => {
            const author_slug = quote.authorSlug;
            const author_link = (
              await axios.get(`${base_url}/authors/?slug=${author_slug}`)
            ).data?.results[0]?.link;
            return {
              ...quote,
              author_link,
            };
          })
        );
        return (this.qoutes = authors_link);
      } catch (error) {
        return error;
      }
    },
  },
});
