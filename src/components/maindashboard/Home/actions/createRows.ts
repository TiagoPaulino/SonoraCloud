import { RowIten } from "@/store/homePage.slice";
import axios from "axios";


export class RowFetch {
    name: string;
    type: string;
    _data: RowIten[]|[]

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this._data = []
    }
    async fechData(){
        try {
            const data = await axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=4fe40b6c&format=jsonpretty&limit=20&tags=[${this.type}]`);
            this._data  = await data.data.results
        } catch (error) {
            console.log(error)
        }
    }
    async getdata() {
        await this.fechData();
        const RowData={
            name: this.name,
            itens: this._data,
        }
        return RowData
    }
}
