const tableType = "1";
const articleType = "2";

const main = document.getElementById("main");

fetch("http://localhost:8080/data")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
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
      widget += `</div>`
    });
    main.insertAdjacentHTML("afterbegin", widget);
  })
  .catch(err => console.log(err));