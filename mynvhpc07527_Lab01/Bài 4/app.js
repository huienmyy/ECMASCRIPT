const API_URL ="https://datausa.io/api/data?drilldowns=Nation&measures=Population";

fetch(API_URL)
  .then(function (response) {
    response.json().then(function (data) {
      let app = document.getElementById("PC07527");
      let list = data.data;
      let STT = 1;

      let html = `<table class="table table-bordered">
         <tr>
         <th scope="col"Numerical order</th>
         <th scope="col">Nation</th>
         <th scope="col">Year</th>
         <th scope="col">Population</th>
         </tr>`;

      list.forEach((element) => {
        console.log(element);
        html += `<tr> 
          <td>${STT}</td>
          <td>${element.Nation}</td>
          <td>${element.Year}</td>
          <td>${element.Population}</td>
          </tr>`;
        STT++;
      });
      html += `</table>`;
      app.innerHTML = html;
      console.log(data.data);
    });
  })
  .catch(function (error) {
    console.error(error);
  });




fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
  .then(function (response) {
    response.json().then(function (data) {
      let app = document.getElementById("pc07527");
      let list = data;
      let STT = 1;

      let html = `<table  class="table table-bordered">
         <tr>
         <th>Numerical order</th>
         <th>IMG</th>
         <th>Full name</th>
         <th>Date created</th>
         </tr>`;

      list.forEach((element) => {
        console.log(element);
        html += `<tr> 
          <td>${STT}</td>
          <td><img src="${element.avatar}" alt=""></td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
          </tr>`;
        STT++;
      });
      html += `</table>`;
      app.innerHTML = html;
      console.log(data.data);
    });
  })

  .catch(function (error) {
    console.error(error);
  });
