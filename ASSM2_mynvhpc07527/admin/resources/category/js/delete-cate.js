// Hàm xóa danh mục
async function deleteCategory(categoryId) {
  try {
    // Hiển thị cảnh báo xác nhận trước khi xóa
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa danh mục này không?"
    );

    if (!confirmDelete) {
      // Nếu người dùng không xác nhận, không thực hiện xóa
      console.log("Hủy xóa danh mục.");
      return;
    }

    // Gửi yêu cầu xóa danh mục đến API hoặc URL phù hợp
    const deleteUrl = `http://localhost:3000/categories/${categoryId}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Danh mục đã được xóa thành công.");
    } else {
      console.error("Lỗi khi xóa danh mục:", response.statusText);
    }
  } catch (error) {
    console.error("Lỗi khi xóa danh mục:", error.message);
  }
}

// Gán sự kiện click cho nút "Xóa" trong mỗi hàng của bảng danh sách danh mục
document.addEventListener("DOMContentLoaded", function () {
  const deleteCategoryBtns = document.querySelectorAll(".btn-delete");

  if (deleteCategoryBtns) {
    deleteCategoryBtns.forEach((btn) => {
      btn.onclick = async function () {
        const categoryId = btn.dataset.id;

        try {
          await deleteCategory(categoryId);
        } catch (error) {
          console.error("Lỗi khi xóa danh mục:", error);
        }
      };
    });
  } else {
    console.error("Không tìm thấy các nút xóa danh mục");
  }
});
