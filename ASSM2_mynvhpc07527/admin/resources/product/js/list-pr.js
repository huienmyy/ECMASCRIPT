/** Hiển thị danh sách sản phẩm */
function view() {
  let html = '';
  const list = document.getElementById('view');

  Handle_Products.fetchData('http://localhost:3000/products')
      .then(function (data) {
          data.forEach((item) => {
              // Định dạng giá tiền trước khi thêm vào HTML
              const formattedPrice = frm_price(item.price);

              html += `
                  <tr>
                      <th>${item.id}</th>
                      <th>${item.category}</th>
                      <th>${item.name}</th>
                      <th><img src="/client/assets/images/${item.image}" alt="${item.image}" width="100px" /></th>
                      <th>${formattedPrice}</th> <!-- Sử dụng giá tiền đã được định dạng -->
                      <th>
                          <input class="btn btn-info" type="button" value="Sửa" onclick="editProduct(${item.id})">
                          <input class="btn btn-danger" type="button" value="Xóa" onclick="deleteProduct(${item.id})">
                      </th>
                  </tr>
              `;
          });

          list.innerHTML = html;

          // Gán sự kiện click cho nút "Sửa"
          document.querySelectorAll('.btn-info').forEach((editBtn) => {
              editBtn.addEventListener('click', function (event) {
                  // Lấy ID của sản phẩm từ thuộc tính data-id của nút "Sửa"
                  const productId = event.currentTarget.dataset.id;

                  // Chuyển hướng đến trang cập nhật sản phẩm và truyền ID sản phẩm
                  window.location.href = `update-pr.html?id=${productId}`;
              });
          });
      })
      .catch((error) => {
          console.error('Error fetching data:', error);
      });
}

document.addEventListener('DOMContentLoaded', (event) => {
  view();
});

// Hàm định dạng giá tiền
function frm_price(price) {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'VND');
}


