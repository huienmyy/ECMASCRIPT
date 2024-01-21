let header = `
<header class="header-area header-sticky">
<div class="container">
  <div class="row">
    <div class="col-12">
      <nav class="main-nav">
        <!-- ***** Logo Start ***** -->
        <a href="index.html" class="logo">
          <img src="assets/images/0101.png" width="80px" />
        </a>
        <!-- ***** Logo End ***** -->
        <!-- ***** Menu Start ***** -->
        <ul class="nav">
          <li class="scroll-to-section">
            <a href="index.html" >Home</a>
          </li>              
            <li class="submenu">
            <a href="products.html"  >Product</a>
            <ul>
                <li class="scroll-to-section"><a href="#men" >Nike</a></li>          
                <li class="scroll-to-section"><a href="#women">Adidas</a></li>
            </ul>
            </li>
                <li><a href="about.html" >About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="single-product.html">Your Order</a></li>
         
        <a class="menu-trigger">
          <span>Menu</span>
        </a>
        <!-- ***** Menu End ***** -->
      </nav>
    </div>
  </div>
</div>
</header>
`;

document.getElementById("header").innerHTML = header;
