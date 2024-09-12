import axios from "axios";

class SearchResolts {
    term: string;
    resolts: { tracks: Object[], albums: Object[], artists: Object[] };

    constructor(term: string) {
        this.term = term;
        this.resolts = { tracks: [], albums: [], artists: [] };
    }

    async fetchData() {
        try {
            const [tracksResponse, albumsResponse, artistsResponse] = await Promise.all([
                axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=4fe40b6c&format=jsonpretty&limit=20&search=${this.term}`),
                axios.get(`https://api.jamendo.com/v3.0/albums/?client_id=4fe40b6c&format=jsonpretty&limit=20&namesearch=${this.term}`),
                axios.get(`https://api.jamendo.com/v3.0/artists/?client_id=4fe40b6c&format=jsonpretty&limit=20&namesearch=${this.term}`)
            ]);

            this.resolts = {
                tracks: tracksResponse.data.results,
                albums: albumsResponse.data.results,
                artists: artistsResponse.data.results
            };
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async getResolts() {
        await this.fetchData();
        return this.resolts;
    }
}

export default SearchResolts