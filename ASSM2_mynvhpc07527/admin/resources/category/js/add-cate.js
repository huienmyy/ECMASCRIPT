async function addCategory(categoryName, image) {
    try {
      const addUrl = "http://localhost:3000/categories";
  
      // Data object 
      const data = {
        name_cate: categoryName,
        image: image,
      };
  
      // Options với hương thức Post
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      // Send the POST request to add a new category
      const response = await fetch(addUrl, options);
      const addedCategory = await response.json();
  
      console.log("Added category:", addedCategory);
  
      //chuyển trang sau khi thêm
      window.location.href = "list-cate.html";
    } catch (error) {
      console.error("Error adding category:", error);
    }
  }
  
  document
    .getElementById("addCategoryForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const categoryName = document.getElementById("categoryName").value;
      const image = document.getElementById("image").files[0]; // Lấy file ảnh từ input
  
      addCategory(categoryName, image);
    });
  