import axios from "axios";

const AnimeProviders = {
  ANIMEPAHE: "animepahe",
  GOGO: "gogoanime",
  ZORO: "zoro",
  ENIME: "enime",
  CRUNCHYROLL: "crunchyroll",
};

export class AnimeApi {
  constructor(provider = "GOGO") {
    this.host = "https://api.consumet.org/anime";
    this.provider = AnimeProviders[provider];
  }

  async consumetApiGetCall(path = "", params = {}) {
      const url = `${this.host}/${this.provider}${path}`;
    return (
        await axios.get(url, {
            params: { provider: this.provider, ...params, },
        })
        ).data;
  }

  async getTopAiring() {
    return this.consumetApiGetCall("/top-airing");
  }
}

export const animeApi = new AnimeApi();
