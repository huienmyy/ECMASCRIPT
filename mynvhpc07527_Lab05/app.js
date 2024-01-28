// const { Axios } = require('axios');

// const getComment = () => {
//   return new Promise((resolve, reject) => {
//     let getComment = fetch("http://localhost:3000/comments")
    //   .then((reponse) => {
    //    reponse.json().then((data) => {
    //         resolve(data);
    //     });
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
//     // return comment;
//   });
// };
// getComment().then(function(data){
//     console.log(getComment());
// })

// // resolve chạy vào then
// // reject chạy vào catch

// let getA = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("A 2 giây mới xuất hiện");
//     },2000)
// })

// let getB = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("B 8 giây mới xuất hiện");
//     },8000)
// })

// let getC = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("C 10 giây mới xuất hiện");
//     },10000)
// })
// getA.then( (data) => console.log(data) );
// getB.then( (data) => console.log(data) );
// getC.then( (data) => console.log(data) );

/**
let ({data}) = data;
const axios = require ('axios').default;

const API_URL = " http://localhost:3000/";

//axios.get(API_URL + "comments").then((data)=>console.log(data.data));// cũ

axios.get(API_URL + "comments").then(({data})=>console.log(data));

//thêm mới
axios.post(API_URL + "comments", comment).then((response)=>console.log(response));
//sửa
axios.put(API_URL + "comments/"+2, comment).then(({respone})=>console.log(data));
//xóa
axios.delete(API_URL + "comments").then(({data})=>console.log(data));
//lấy 1
axios.get(API_URL + "comments/"+5).then(({data})
*/
