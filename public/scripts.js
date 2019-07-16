const tableType = "1";
const articleType = "2";

const main = document.getElementById("main");

// GET

fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(info => {
    let widget = "";
    info.data.forEach(item => {
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
      // else {
      //   widget += `<p class="p">`
      //               item.data.forEach(rowData => {
      //                 rowData.author;
      //               })
      //             `</p>
      //               <article class="article">`
      //               item.data.forEach(rowData => {
      //                 rowData.message;
      //               })
      //               `</article>
      //             `
      // }
      widget += `</div>`
    });
    main.insertAdjacentHTML("afterbegin", widget);
  })
  .catch(err => console.log(err));

// POST  

let info = { id: 4, firstName: "Larry", lastName: "theBird", userName: "twitter" };

fetch("http://localhost:3000/post", {
  method: 'POST',
  body: JSON.stringify(info),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => console.log(JSON.stringify(res)))
  .catch(err => console.log(err));

  






















// { "id": "4", "firstName": "Larry", "lastName": "theBird", "userName": "twitter" }