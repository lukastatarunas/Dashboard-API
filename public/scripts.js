const tableType = "1";
const articleType = "2";

firstCol = "1";
secondCol = "2";
thirdCol = "3";

const main = document.getElementById("main");

// GET

// fetch("http://localhost:3000/data")
//   .then(res => res.json())
//   .then(data => {
//     let widget = "";
//     data.forEach(item => {
//       widget += `<div class="main-card">`
//       if (item.type === tableType) {
//         let headerType = item.headerType === "1" ? "thead-dark" : null;
//         widget += `<table class="table">
//                     <thead class="${headerType}">
//                       <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">First Name</th>
//                         <th scope="col">Last Name</th>
//                         <th scope="col">User Name</th> 
//                       </tr>
//                     </thead>
//                     <tbody>
//                   `
//                   item.data.forEach(rowData => {
//                     widget += `<tr>
//                                 <td>${rowData.id}</td>
//                                 <td>${rowData.firstName}</td>
//                                 <td>${rowData.lastName}</td>
//                                 <td>${rowData.userName}</td>
//                                </tr>
//                               `
//                   });
//                   widget += `</tbody></table>`;
//       }
//       else {
//         let authors = "";
        
//         item.data.forEach(rowData => {
//           authors += `<p class="author" id="author">${rowData.author}</p>`
//         })

//         let articles = "";

//         item.data.forEach(rowData => {
//           articles += `<article class="article" id="article">${rowData.article}</article>`
//         })

//         widget += `<nav class="nav">
//                     <p class="nav-paragraph">Dashboard: <strong>Users</strong></p>
//                     <i class="fas fa-cog sidenav-icons nav-icon"></i>
//                     <i class="fas fa-sort-down header-icon nav-icon"></i><br>
//                    </nav>
//                       ${authors}  
//                    <article class="article" id="article">
//                       ${articles}
//                    </article>
//                   `
//       }
//       widget += `</div>`
//     });
//     main.insertAdjacentHTML("afterbegin", widget);
//   })
//   .catch(err => console.log(err));

// GET

fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(info => {
    let tableWidgetFirstCol = "";
    let articleWidgetFirstCol = "";

    let tableWidgetSecondCol = "";
    let articleWidgetSecondCol = "";

    let tableWidgetThirdCol1 = "";
    let tableWidgetThirdCol2 = "";

    tableWidgetFirstCol += `<div class="main-card">
                              <table class="table">
                              <thead class="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">User Name</th> 
                                </tr>
                              </thead>
                              <tbody>
                            `
    info[0].data[0].data.forEach(rowData => {
      tableWidgetFirstCol += `<tr>
                                <td>${rowData.id}</td>
                                <td>${rowData.firstName}</td>
                                <td>${rowData.lastName}</td>
                                <td>${rowData.userName}</td>
                              </tr>
                              `
    });
    tableWidgetFirstCol += `</tbody></table></div>`

    articleWidgetFirstCol += `<div class="main-card">`;          
    let authorsFirstCol = "";

    info[1].data[0].data.forEach(rowData => {
      authorsFirstCol += `<p class="author" id="author">${rowData.author}</p>`
    })

    let articlesFirstCol = "";

    info[1].data[0].data.forEach(rowData => {
      articlesFirstCol += `<article class="article" id="article">${rowData.article}</article>`
    })

    articleWidgetFirstCol += `<nav class="nav">
                              <p class="nav-paragraph">Dashboard: <strong>Users</strong></p>
                              <i class="fas fa-cog sidenav-icons nav-icon"></i>
                              <i class="fas fa-sort-down header-icon nav-icon"></i><br>
                              </nav>
                                ${authorsFirstCol}  
                              <article class="article" id="article">
                                ${articlesFirstCol}
                              </article></div>
                            `
    articleWidgetSecondCol += `<div class="main-card">`;
    
    let authorsSecondCol = "";

    info[2].data[0].data.forEach(rowData => {
      authorsSecondCol += `<p class="author" id="author">${rowData.author}</p>`
    })

    let articlesSecondCol = "";

    info[2].data[0].data.forEach(rowData => {
      articlesSecondCol += `<article class="article" id="article">${rowData.article}</article>`
    })

    articleWidgetSecondCol += `<nav class="nav">
                              <p class="nav-paragraph">Dashboard: <strong>Users</strong></p>
                              <i class="fas fa-cog sidenav-icons nav-icon"></i>
                              <i class="fas fa-sort-down header-icon nav-icon"></i><br>
                              </nav>
                                ${authorsSecondCol}  
                              <article class="article" id="article">
                                ${articlesSecondCol}
                              </article></div>
                            `
    tableWidgetSecondCol += `<div class="main-card">
                              <table class="table">
                              <thead class="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">User Name</th> 
                                </tr>
                              </thead>
                              <tbody>
                            `
  info[0].data[0].data.forEach(rowData => {
    tableWidgetSecondCol += `<tr>
                              <td>${rowData.id}</td>
                              <td>${rowData.firstName}</td>
                              <td>${rowData.lastName}</td>
                              <td>${rowData.userName}</td>
                            </tr>
                            `
  });
  tableWidgetSecondCol += `</tbody></table></div>`

  tableWidgetThirdCol1 += `<div class="main-card">
                            <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">User Name</th> 
                              </tr>
                            </thead>
                            <tbody>
                          `
  info[0].data[0].data.forEach(rowData => {
    tableWidgetThirdCol1 += `<tr>
                              <td>${rowData.id}</td>
                              <td>${rowData.firstName}</td>
                              <td>${rowData.lastName}</td>
                              <td>${rowData.userName}</td>
                            </tr>
                            `
  });
  tableWidgetThirdCol1 += `</tbody></table></div>`

  tableWidgetThirdCol2 += `<div class="main-card">
                            <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">User Name</th> 
                              </tr>
                            </thead>
                            <tbody>
                          `
  info[0].data[0].data.forEach(rowData => {
    tableWidgetThirdCol2 += `<tr>
                              <td>${rowData.id}</td>
                              <td>${rowData.firstName}</td>
                              <td>${rowData.lastName}</td>
                              <td>${rowData.userName}</td>
                            </tr>
                            `
  });
  tableWidgetThirdCol2 += `</tbody></table></div>`
  main.insertAdjacentHTML("beforeend", tableWidgetFirstCol);
  main.insertAdjacentHTML("beforeend", articleWidgetFirstCol);
  main.insertAdjacentHTML("beforeend", articleWidgetSecondCol);
  main.insertAdjacentHTML("beforeend", tableWidgetSecondCol);
  main.insertAdjacentHTML("beforeend", tableWidgetThirdCol1);
  main.insertAdjacentHTML("beforeend", tableWidgetThirdCol2);
}).catch(err => console.log(err));

// POST  

function onPostFormSubmit() {
  let json = document.getElementById("textarea").value;
  let title = document.getElementById("title").value;
  let colNum = document.getElementById("col-num").value;
  if (colNum === firstCol) {

  }
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