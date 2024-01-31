import { APICaller } from "../base/APIcaller.js";
import API from "../base/APIcaller.js";
const apiCaller = new APICaller(API);
export default class Comment {
    static getAll() {
        return apiCaller.get('');
    }
    static getOne(id) {
        return apiCaller.get(id);
    }
}
