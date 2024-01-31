/** xuất biến, hàm, class */

export const upperCaseString = (string) => {
    return string.toUpperCase();
}
export const lowerCaseString = (string) => {
    return string.toLowerCase();
}

/** Bài thêm */
import APICaller from './export.js';
class Comment {
    //Get One
    static async getOne(id) {
      const apiCaller = new APICaller(API_URL + "comments/");
      return apiCaller.get(id);
    }
    // Get All
    static async getAll() {
      const apiCaller = new APICaller(API_URL + "comments");
      return apiCaller.get("");
    }
  }
  export default Comment;
