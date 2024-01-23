const API_URL = "http://localhost:3000/";
function view() {
  let html = "";
  fetch(API_URL + "products").then(function (response) {
    response.json().then(function (data) {
      const  product = document.getElementById('view');
      html = "<div class='row'>";
      data.forEach((element) => {
        html += `
        <div class="col-lg-4">
                <div class="item">
                    <div class="thumb">
                        <div class="hover-content">
                            <ul>
                                <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <img src="assets/images/${element.image}" width="100%" alt="">
                    </div>
                    <div class="down-content">
                        <h4>${element.name}</h4>
                        <span>${element.price}</span>
                        <ul class="stars">
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>`
      ;
      });
      html += "</div>";
      product.innerHTML = html;
    });
    
  })
  .catch(error => {
    // Handle error
});

}
view();