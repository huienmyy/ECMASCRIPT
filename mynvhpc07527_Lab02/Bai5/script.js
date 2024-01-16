let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";

function genratetableheader(headerTitles) {
  let html = ``;
  headerTitles.forEach((element) => {
    html += `<th>${element}</th>`;
  });
  return `<thead><tr>${html}</tr></thead>`;
}

function genratetablerow(data) {
  return `<tr>
        <td>${data.id}</td>
        <td><img src="${data.avatar}" width="200px"></td>
        <td>${data.name}</td>
        <td>${data.date}</td>
    </tr>`;
}

function genratetable(header, data) {
  let html = ``;
  let headerrow = genratetableheader(header);
  data.forEach((element) => {
    html += genratetablerow(element);
  });

  return `<table>${headerrow}<tbody>${html}</tbody></table>`;
}

fetch(API_URL)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (data) {
    let datafake = [
      {
        id: 1,
        name: "Huyền My",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCmQoAXzay7KJhbTSxCy_mczkyfzrEugCqA&usqp=CAU",
        date: "09/01/2024",
      },
    ];

    let header = ["id", "avatar", "name", "date"];

    let app = document.getElementById("app");
    app.innerHTML = genratetable(header, datafake);
  })
  .catch(function (error) {
    console.error("Error during fetch:", error);
  });
