const API_URL = "https://www.boredapi.com/api/activity";

fetch("https://www.boredapi.com/api/activity")
  .then(function (response) {
    response.json().then(function(data) {

      let app = document.getElementById('PC07527');
      let list = data.data;

      let html = `<ul>
            <li>${data.accessibility}</li>
            <li>${data.activity}</li>
            <li>${data.key}</li>
            <li>${data.link}</li>
            <li>${data.participants}</li>
            <li>${data.price}</li>
            <li>${data.type}</li>
        </ul>`;

      app.innerHTML = html;
      console.log(data);
    })
  })
  .catch(function (error) {
    
  })
