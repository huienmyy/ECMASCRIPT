const API_URL = "http://localhost:3000/";

function view() {
  let html = "";
  fetch(API_URL + "products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const list = document.getElementById("view");

      data.forEach((item) => {
        html += `
          <tr>
            <th>${item.id}</th>
            <th>${item.name_cate}</th>
            <th>${item.name}</th>
            <th><img src="/client/assets/images/${item.image}" alt="${item.image}" width="100px" /></th>
            <th>${item.price}</th>
            <th>${item.sale}</th>
            <th>${item.describe}</th>
            <th><input class="btn btn-danger" type="submit" value="Xóa" name="delete" onclick="return confirm('Bạn có chắc muốn xóa không?')"></th>
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
