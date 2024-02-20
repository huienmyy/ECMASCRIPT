//Thêm vào giỏ hàng
function addToCart() {
    // Create a new cart item HTML structure
    var cartItemHTML = `
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" class="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
          </div>
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p><strong>Blue denim shirt</strong></p>
          <p>Color: blue</p>
          <p>Size: M</p>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <p class="text-start text-md-center"><strong>$17.99</strong></p>
        </div>
      </div>
      <hr class="my-4" />
    `;
    
    // Append the new cart item to the cart body
    $('#cart-body').append(cartItemHTML);
  }
  
//show cart
cart.forEach((item, index) => {
  document.getElementById("cart").innerHTML += `
    <p><strong>${item.name}</strong></p>
                <p>Danh Mục: ${item.name_cate}</p>
                
                <button type="button" data-id="${item.id}" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                  <i class="fa fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                  <i class="fa fa-heart"></i> 
                </button>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="d-flex mb-4" style="max-width: 200px">
                    <button style="height: 35px" class="btn btn-primary px-3 me-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fa fa-plus"></i>
                    </button>
  
                    <div class="form-outline">
                      <label class="form-label" for="form1">${item.qty}</label>
                    </div>
  
                    <button style="height: 35px" class="btn btn-primary px-3 ms-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                <!-- Quantity -->

                <!-- Price -->
                <p class="text-start text-md-center">
                  <strong>${item.qty * item.price}</strong>
                </p>`;
});

//tổng tiền
let sum = 0;
cart.forEach((item) => {
  sum += item.sale * item.qty;
});
