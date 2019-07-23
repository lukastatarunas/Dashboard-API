const tableType = "1";
const main = document.getElementById("main");

// GET

// document.getElementById("spinner").style.display  = "none";

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
    setTimeout(function(){ 
      document.getElementById("spinner").style.display  = "none";
      main.insertAdjacentHTML("afterbegin", widget);
    }, 1000);
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
  return window.location.href = "http://localhost:3000";
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
        let typeSelection = document.getElementById("type-selection");
        let headerTypeSelection = document.getElementById("header-type-selection");
        let textarea = document.getElementById("textarea");
        if (item.id === detectId()) {
          if (detectId() === "1") {
            typeSelection.value = "1";
            headerTypeSelection.value = "1";
            textarea.value = JSON.stringify(item.data);
          }
          else if (detectId() === "2") {
            typeSelection.value = "1";
            headerTypeSelection.value = "2";
            textarea.value = JSON.stringify(item.data);
          }
          else {
            typeSelection.value = "2";
            headerTypeSelection.value = "2";
            textarea.value = JSON.stringify(item.data);
          }
        }
      })
    })
}

function onPutFormSubmit(event) {
  event.preventDefault();
  let textarea = document.getElementById("textarea").value;
  fetch(`http://localhost:3000/put/${detectId()}`, {
    method: 'PUT',
    body: textarea,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return window.location.href = "http://localhost:3000";
}

// DELETE

function onDeleteButtonClick() {
  fetch(`http://localhost:3000/delete/${detectId()}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return window.location.href = "http://localhost:3000";
}