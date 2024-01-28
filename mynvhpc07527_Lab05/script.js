/**
 * Bài 5.1 - This trong js là gì
  * Trong javascript, từ khóa this để đại diện cho một đối tượng (Object). 
 Đối tượng đó là chủ thế của ngữ cảnh, hoặc là chủ thế của code đang được chạy. 
 Giá trị của this có thể thay đổi tùy vào cách nó được sử dụng: 
    + Nếu nó được sử dụng trong một phương thức của đối tượng, nó sẽ tham chiếu đến đối tượng đó; 
    + Nếu nó được sử dụng ngoài hàm hoặc đối tượng, giá trị của this sẽ tham chiếu đến đối tượng global hoặc là undefined trong trường hợp 'strict mode'.
 */
function vdThis(name) {
  this.name = name;
}
const person = new vdThis("Hmyy cute");
console.log("Bài 1");
console.log("My name is", person.name);

/**
 * Bài 5.2 - Chuyển đổi sang ES6
 */
class Shape {
  // tạo lớp Shape
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  // di chuyển đối tượng
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Sử dụng class Shape
const myShape = new Shape(10, 20);
console.log("Bài 2");
console.log("Tọa độ ban đầu: x =", myShape.x, ", y =", myShape.y);

myShape.move(10, 20); // Di chuyển đối tượng đến vị trí mới
console.log("Tọa độ mới: x =", myShape.x, ", y =", myShape.y);

/**
 * Bài 5.3 - Chuyển đổi đối tượng Clock từ function sang Class
 */
class Clock {
  // đối tượng
  constructor({ template }) {
    // phương thức
    this.template = template; // thuộc tính
    this.timer = null;
  }

  render() {
    // phương thức
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    // thuộc tính
    clearInterval(this.timer); // xóa bộ hẹn giờ
  }

  start() {
    // thuộc tính
    this.render();
    this.timer = setInterval(() => this.render(), 1000); // 1s/lần
  }
}

let clock = new Clock({ template: "h:m:s" }); // định dạng
console.log("Bài 3");
clock.start();

/**
 * Bài 5.4 -
 */
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  // firstName
  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    this._lastName = name;
  }
  // lastName
  get lastName() {
    return this._lastName;
  }
  set lastName(name) {
    this._lastName = name;
  }
}

let firstName = "John";
let lastName = "Doe";
let newPerson = new Person(firstName, lastName);
console.log("Bài 4");
console.log("Full name is:", newPerson.fullName);

/**
 * Bài 5.5 -
 */
const API_URL = "  http://localhost:3000/";
const axios = require("axios");

class APICaller {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // Sử dụng axios thay vì fetch để thực hiện các yêu cầu HTTP
  async get(endpoint) {
    const response = await axios.get(this.baseUrl + endpoint);
    return response.data;
  }
}

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

// class Post {
//     // Sửa lỗi ở đây: Thêm tham số id vào phương thức getOne
//     static async getOne(id) {
//       const apiCaller = new APICaller(API_URL + "post/");
//       return apiCaller.get(id);
//     }

//     // Sửa lỗi ở đây: Thêm tham số vào phương thức getAll nếu cần
//     static async getAll() {
//       const apiCaller = new APICaller(API_URL + "post");
//       return apiCaller.get('');
//     }
//   }
let demoAPI = async () => {
  try {
    const oneGetComment = await Comment.getOne(1);
    console.log("Bài 5");
    console.log("Get one Comment:", oneGetComment);

    const allGetComment = await Comment.getAll();
    console.log("Get all Comment:", allGetComment);
  } catch (error) {
    console.error("Error", error);
  }
};

demoAPI();
