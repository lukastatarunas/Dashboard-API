const tableType = "1";
const articleType = "2";

const main = document.getElementById("main");

// GET

fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => {
    let widget = "";
    data.forEach(item => {
      widget += `<div class="main-card">`
      if (item.type === tableType) {
        let headerType = item.headerType === "1" ? "thead-dark" : null;
        widget += `<table class="table">
                    <thead class="${headerType}">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">User Name</th> 
                      </tr>
                    </thead>
                    <tbody>
                  `
                  item.data.forEach(rowData => {
                    widget += `<tr>
                                <td>${rowData.id}</td>
                                <td>${rowData.firstName}</td>
                                <td>${rowData.lastName}</td>
                                <td>${rowData.userName}</td>
                               </tr>
                              `
                  });
                  widget += `</tbody></table>`;
      }
      else {
        let authors = "";
        
        item.data.forEach(rowData => {
          authors += `<p class="author" id="author">${rowData.author}</p>`
        })

        let articles = "";

        item.data.forEach(rowData => {
          articles += `<article class="article" id="article">${rowData.article}</article>`
        })

        widget += `<nav class="nav">
                    <p class="nav-paragraph">Dashboard: <strong>Users</strong></p>
                    <i class="fas fa-cog sidenav-icons nav-icon"></i>
                    <i class="fas fa-sort-down header-icon nav-icon"></i><br>
                   </nav>
                      ${authors}  
                   <article class="article" id="article">
                      ${articles}
                   </article>
                  `
      }
      widget += `</div>`
    });
    main.insertAdjacentHTML("afterbegin", widget);
  })
  .catch(err => console.log(err));

// POST  

function onPostFormSubmit() {
  let json = document.getElementById("textarea").value;
  console.log(json)
  return JSON.parse(json)
}

function post(event) {
  event.preventDefault()
  fetch("http://localhost:3000/post", {
    method: 'POST',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(onPostFormSubmit())
  })
  return window.location.href = "http://localhost:3000"
}