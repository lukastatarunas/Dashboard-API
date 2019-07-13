fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => {
    appendData(data);
    console.log(data);
  })
  .catch(err => console.log(err));

function appendData(data) {
  data.map(dt => {
    let table = document.getElementById("table").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data[0].id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data[0].firstName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data[0].lastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data[0].userName;
  })
}