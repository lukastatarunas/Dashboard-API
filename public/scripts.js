fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => {
    appendData(data);
    console.log(data);
  })
  .catch(err => console.log(err));

function appendData(data) {
  data.map(dt => {
    let element = document.getElementById(`tr${dt.firstName}`);
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    th.innerHTML = dt.id;
    td1.innerHTML = dt.firstName;
    td2.innerHTML = dt.lastName;
    td3.innerHTML = dt.userName;
    element.appendChild(th);
    element.appendChild(td1);
    element.appendChild(td2);
    element.appendChild(td3);
  })
}