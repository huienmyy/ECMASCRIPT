/**thêm sửa xóa */
const API_URL = "https://mynvh-8513d-default-rtdb.firebaseio.com/";

let getUsers = async () => {
  const response = await fetch(API_URL + "products.json");
  let data = await response.json();
  return data;
};
/** Thêm */
let creteProduct = (form) => {
    let data = new FormData(form);
    console.log(data.get("id"));
    console.log(data.get("name"));
    console.log(data.get("price"));
  
    let Object = {
      id: "",
      name: "Adidas",
      price: 1000000,
    };
  
    let product = fetch(API_URL + "products.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object),
    });
  };
  
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(this);
  });

/** Sửa */
let editProduct = async (id) => {
    const response = await fetch(API_URL + "products/" + id);
    let product = await response.json();
    data.then((data) => {
      form.querySelector('input[name="id"]').value = data.name;
    });
  };

/** Xóa */
let deleteProduct = (id) => {
    fetch(API_URL + "products/" + id, {
      method: "DELETE",
    });
  };