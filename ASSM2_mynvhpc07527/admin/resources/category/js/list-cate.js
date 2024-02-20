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
                        <th>${item.id}</th>
                        <th>${item.name_cate}</th>
                        
                        <th><img src="/client/assets/images/${item.image}" alt="${item.image}" width="100px" /></th>
                        <th>${item.star}</th>
                        <th>
                            <input class="btn btn-info" type="button" value="Sửa" onclick="editProduct(${item.id})">
                            <input class="btn btn-danger" type="button" value="Xóa" onclick="deleteProduct(${item.id})">
                        </th>
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
