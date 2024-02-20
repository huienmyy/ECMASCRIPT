const API_URL = ' http://localhost:3000/';
let products =  (Name) => {
    fetch(API_URL + `${Name}`)
        .then(response =>  response.json())
           .then(data => {
                console.log(data);
                const pd_details = productsDetails(data);
                const id_products = document.getElementById('produc_details');
               id_products.innerHTML = pd_details;
            })
      
        .catch(function (error) {
            console.error('There was a problem with the products request:', error);
        });
}

products("products");


let productsDetails = (data) =>{
    const product = data[0];
    return `  
    <div class="row">
    <div class="col-lg-8">
      <div class="left-images">
        <img src="assets/images/${product.image}" alt="" />
      </div>
    </div>
    <div class="col-lg-4">
      <div class="right-content">
        <h4>${product.name}</h4>
        <span class="price">${product.price}</span>
        <ul class="stars">
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
        </ul>
        <div class="quote">
          <i class="fa fa-quote-left"></i>
          <h3>
          ${product.describe}
          </h3>
        </div>
        <div class="quantity-content">
          <div class="left-content">
            <h6>Quantity</h6>
          </div>
          <div class="right-content">
            <div class="quantity buttons_added">
              <input type="button" value="-" class="minus" /><input
                type="number"
                step="1"
                min="1"
                max=""
                name="quantity"
                value="1"
                title="Qty"
                class="input-text qty text"
                size="4"
                pattern=""
                inputmode=""
              /><input type="button" value="+" class="plus" />
            </div>
          </div>
        </div>
        <div class="total">
          <h4>Total: ${product.price}</h4>
          <div class="main-border-button">
            <a href="cart.html">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div> `
}





















