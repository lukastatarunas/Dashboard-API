const tableType = "1";
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
                    <thead onclick="window.location.replace('http://localhost:3000/update_widget.html?id=${item.id}')" class="${headerType}">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">User Name</th> 
                      </tr>
                    </thead>
                    <tbody>
                  `
                  item.data.forEach((rowData, index) => {
                    widget += `<tr id="tr">
                                <td id="index">${index + 1}</td>
                                <td id="firstName">${rowData.firstName}</td>
                                <td id="lastName">${rowData.lastName}</td>
                                <td id="userName">${rowData.userName}</td>
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

        widget += `<nav onclick="window.location.replace('http://localhost:3000/update_widget.html?id=${item.id}')" class="nav">
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
  let typeSelection = document.getElementById("type-selection").value;
  let headerTypeSelection = document.getElementById("header-type-selection").value;
  if (typeSelection === "1") {
    if (headerTypeSelection === "1") {
      let json = {
        "id": "1",
        "type": "1",
        "headerType": "1",
        "data": JSON.parse(document.getElementById("textarea").value)
      };
      return json;
    }
    else {
      let json = {
        "id": "1",
        "type": "1",
        "headerType": "2",
        "data": JSON.parse(document.getElementById("textarea").value)
      };
      return json;
    }
  }
  else {
    let json = {
      "id": "2",
      "type": "2",
      "headerType": "2",
      "data": JSON.parse(document.getElementById("textarea").value)
    };
    return json;
  }
}

function post(event) {
  event.preventDefault()
  fetch("http://localhost:3000/post", {
    method: 'POST',
    body: JSON.stringify(onPostFormSubmit()),
    headers: {
    'Content-Type': 'application/json'
    }
  })
  return window.location.href = "http://localhost:3000"
}

// PUT

function detectId() {
  let currentUrl = window.location.href;
  let url = new URL(currentUrl);
  let id = url.searchParams.get("id");
  return id;
}

if (detectId() != null) {
  fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        if (item.id === detectId()) {
          if (detectId() === "1") {
            let typeSelection = document.getElementById("type-selection");
            typeSelection.value = "1";
            let headerTypeSelection = document.getElementById("header-type-selection");
            headerTypeSelection.value = "1";
          }
          else if (detectId() === "3") {
            let typeSelection = document.getElementById("type-selection");
            typeSelection.value = "1";
            let headerTypeSelection = document.getElementById("header-type-selection");
            headerTypeSelection.value = "2";
          }
          else {
            let typeSelection = document.getElementById("type-selection");
            typeSelection.value = "2";
            let headerTypeSelection = document.getElementById("header-type-selection");
            headerTypeSelection.value = "2";
          }
        }
      })
    })
}

function onPutFormSubmit() {
  
}

function put(event) {
  event.preventDefault()
  fetch("http://localhost:3000/put", {
    method: 'PUT',
    body: JSON.stringify(onPutFormSubmit()),
    headers: {
    'Content-Type': 'application/json'
    }
  })
  return window.location.href = "http://localhost:3000"
}

// DELETE