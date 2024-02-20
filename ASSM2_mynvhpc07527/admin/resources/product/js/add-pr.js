class Handle_Products {
	static async fetchData(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching data:', error.message);
			throw error;
		}
	}

	static async addData(url, newData) {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newData),
			});
			const addedData = await response.json();
			return addedData;
		} catch (error) {
			console.error('Error adding data:', error.message);
			throw error;
		}
	}

	static async deleteData(url) {
		try {
			const response = await fetch(url, {
				method: 'DELETE',
			});
			const deletedData = await response.json();
			return deletedData;
		} catch (error) {
			console.error('Error deleting data:', error.message);
			throw error;
		}
	}

	static async getLastProductId() {
		try {
			const response = await fetch('http://localhost:3000/products');
			const data = await response.json();
			return data[data.length - 1].id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}


document.addEventListener('DOMContentLoaded', (event) => {
	view();
});

// end show list products

// Hiển thị danh sách danh mục trong dropdown
function displayCategories(categories) {
	const selectElement = document.getElementById('productCategory');

	// Xóa tất cả các tùy chọn hiện có
	selectElement.innerHTML = '';

	// Thêm tùy chọn cho từng danh mục
	categories.forEach((category) => {
		const option = document.createElement('option');
		option.value = category.name_cate;
		option.textContent = category.name_cate;
		selectElement.appendChild(option);
	});
}

// Hàm lấy danh sách danh mục từ server
async function getCategoryListFromServer() {
	try {
		const response = await fetch('http://localhost:3000/categories');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw error;
	}
}

// Gọi hàm hiển thị danh sách danh mục khi DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
	try {
		// Lấy danh sách danh mục từ server hoặc một nguồn dữ liệu nào đó
		const categories = await getCategoryListFromServer();

		// Hiển thị danh sách danh mục trong dropdown
		displayCategories(categories);
	} catch (error) {
		console.error('Error fetching categories:', error);
	}
});

// Thêm mới
async function addProduct(newProduct) {
	const addUrl = 'http://localhost:3000/products';

	try {
		const lastId = await Handle_Products.getLastProductId();
		if (lastId === null) {
			throw new Error('Could not retrieve last product ID.');
		}

		// Lấy giá trị của danh mục từ thẻ select
		const category = document.querySelector('#productCategory').value;

		// Thêm giá trị danh mục vào đối tượng newProduct
		newProduct.category = category;

		// Thiết lập id cho sản phẩm mới
		newProduct.id = (Number(lastId) + 1).toString();

		// Thực hiện thêm sản phẩm vào cơ sở dữ liệu
		const addedProduct = await Handle_Products.addData(addUrl, newProduct);

		// Trả về thông tin sản phẩm đã thêm
		return addedProduct;
	} catch (error) {
		console.error('Error adding product:', error.message);
		throw error;
	}
}

// Gán sự kiện click cho nút "Thêm mới"
document.addEventListener('DOMContentLoaded', function () {
	const createProductBtn = document.querySelector('#create');

	if (createProductBtn) {
		createProductBtn.onclick = async function () {
			const name = document.querySelector('#productName').value;
			const image = document.querySelector('#productImage').value.split('\\').pop();
			const price = parseFloat(document.querySelector('#productPrice').value);

			try {
				const lastId = await Handle_Products.getLastProductId();
				const productData = {
					id: (Number(lastId) + 1).toString(),
					name: name,
					image: image,
					price: price,
				};

				const addedProduct = await addProduct(productData);
				console.log('Sản phẩm đã được thêm:', addedProduct);

				// Chuyển hướng đến trang danh sách sản phẩm sau khi thêm thành công
				window.location.href = 'list-pr.html';
			} catch (error) {
				console.error('Lỗi khi thêm sản phẩm:', error);
			}
		};
	} else {
		console.error('Không tìm thấy phần tử có ID là create');
	}
});
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
  // Thêm hàm xử lý sự kiện khi submit form thêm danh mục
  document.addEventListener('DOMContentLoaded', function () {
    const addCategoryForm = document.getElementById('addCategoryForm');
    const addCategoryBtn = document.getElementById('addCategoryBtn');

    if (addCategoryForm && addCategoryBtn) {
        addCategoryForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const categoryName = document.getElementById('categoryName').value.trim();

            if (!categoryName) {
                alert('Vui lòng nhập tên danh mục');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name_cate: categoryName })
                });

                if (response.ok) {
                    alert('Thêm danh mục thành công');
                    // Reset form
                    addCategoryForm.reset();
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message);
                }
            } catch (error) {
                console.error('Lỗi khi thêm danh mục:', error);
                alert('Đã xảy ra lỗi khi thêm danh mục');
            }
        });
    } else {
        console.error('Không tìm thấy form hoặc nút thêm danh mục');
    }
});