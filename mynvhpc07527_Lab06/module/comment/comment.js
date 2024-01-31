import { APICaller } from "../base/APIcaller.js";
import API from "../base/APIcaller.js";
const piCaller = new APICaller(API);
export default class Comment {
    static getAll() {
        return piCaller.get('');
    }
    static getOne(id) {
        return piCaller.get(id);
    }
}
