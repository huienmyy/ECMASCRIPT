const API_URL = "http://localhost:3000/";

function view() {
  let html = "";
  fetch(API_URL + "categories")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const list = document.getElementById("cate");

      data.forEach((item, i) => {
        html += `
          <tr>
            <th>${i + 1}</th>
            <th>${item.name_cate}</th>
            <th>${item.name_product}</th>
            <th><img src="/client/assets/images/${item.image}" alt="${item.image}" width="130px" /></th>
            <th>${item.star}</th>
            <th><button  type="button" class="btn btn-warning">Xóa</button></th>
          </tr>
        `;
      });

      list.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

view();
