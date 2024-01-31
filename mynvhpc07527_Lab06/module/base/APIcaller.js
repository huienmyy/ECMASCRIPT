const API = " http://localhost:3000/comments";
export class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    get(endpoint) {
        const apiUrl = `${this.baseUrl}/${endpoint}`;
        return axios.get(apiUrl);
    }
}
export default API;