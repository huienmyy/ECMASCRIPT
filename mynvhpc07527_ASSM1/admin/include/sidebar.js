let sidebar = `
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
    <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>



<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-th-list"></i>
        <span>Danh mục</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Danh mục</h6>
            <a class="collapse-item" href="./resources/category/add-pr.html">Thêm mới</a>
            <a class="collapse-item" href="./resources/category/list-pr.html">Danh sách</a>
        </div>
    </div>
</li>
<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProduct"
        aria-expanded="true" aria-controls="collapseProduct">
        <i class="fas fa-gift"></i>
        <span>Sản Phẩm</span>
    </a>
    <div id="collapseProduct" class="collapse" aria-labelledby="headingProduct" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Sản Phẩm</h6>
            <a class="collapse-item" href="./resources/product/add-pr.html">Thêm mới</a>
            <a class="collapse-item" href="./resources/product/list-pr.html">Danh sách</a>
        </div>
    </div>
</li>
<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOrder"
        aria-expanded="true" aria-controls="collapseOrder">
        <i class="fas fa-fw fa-table"></i>
        <span>Đơn hàng</span>
    </a>
    <div id="collapseOrder" class="collapse" aria-labelledby="headingOrder" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Đơn hàng:</h6>
            <a class="collapse-item" href="./resources/order/list-pr.html">Danh sách đơn hàng</a>
        </div>
    </div>
</li>


<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
`;
document.getElementById('sidebar').innerHTML = sidebar;