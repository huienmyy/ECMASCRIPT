// Thêm hàm xóa sản phẩm
async function deleteProduct(productId) {
    try {
        // Hiển thị cảnh báo xác nhận trước khi xóa
        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');

        if (!confirmDelete) {
            // Nếu người dùng không xác nhận, không thực hiện xóa
            console.log('Hủy xóa sản phẩm.');
            return;
        }

        const deleteUrl = `http://localhost:3000/products/${productId}`;
        const deletedProduct = await Handle_Products.deleteData(deleteUrl);

        // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
        view();

        console.log('Sản phẩm đã được xóa:', deletedProduct);
    } catch (error) {
        console.error('Lỗi khi xóa sản phẩm:', error);
    }
}