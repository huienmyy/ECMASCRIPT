// Dữ liệu mẫu về đơn hàng
const orders = [
    { id: 1, customer: 'Nguyễn Văn A', total: 100000 },
    { id: 2, customer: 'Trần Thị B', total: 150000 },
    { id: 3, customer: 'Phạm Văn C', total: 200000 }
  ];
  
  // Hiển thị danh sách đơn hàng
  function renderOrders() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
  
    orders.forEach(order => {
      const row = `
        <tr>
          <td>${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.total} VNĐ</td>
          <td><button onclick="deleteOrder(${order.id})">Xóa</button></td>
        </tr>
      `;
      orderList.innerHTML += row;
    });
  }
  
  // Xóa đơn hàng
  function deleteOrder(orderId) {
    const index = orders.findIndex(order => order.id === orderId);
    if (index !== -1) {
      orders.splice(index, 1);
      renderOrders();
    }
  }
  
  // Khởi chạy hàm renderOrders để hiển thị danh sách đơn hàng ban đầu
  renderOrders();
  