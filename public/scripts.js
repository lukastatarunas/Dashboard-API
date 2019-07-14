fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => {
    getData(data);
    console.log(data);
  })
  .catch(err => console.log(err));

function getData(data) {
  for (let i = 0; i < 4; i++) {
    let table = document.getElementById("table1").getElementsByTagName("tbody")[0];

    let newRowForMark = table.insertRow(table.length);
    cell1ForMark = newRowForMark.insertCell(0);
    cell1ForMark.innerHTML = data[0].id;
    cell2ForMark = newRowForMark.insertCell(1);
    cell2ForMark.innerHTML = data[0].firstName;
    cell3ForMark = newRowForMark.insertCell(2);
    cell3ForMark.innerHTML = data[0].lastName;
    cell4ForMark = newRowForMark.insertCell(3);
    cell4ForMark.innerHTML = data[0].userName;

    let newRowForJacob = table.insertRow(table.length);
    cell1ForJacob = newRowForJacob.insertCell(0);
    cell1ForJacob.innerHTML = data[1].id;
    cell2ForJacob = newRowForJacob.insertCell(1);
    cell2ForJacob.innerHTML = data[1].firstName;
    cell3ForJacob = newRowForJacob.insertCell(2);
    cell3ForJacob.innerHTML = data[1].lastName;
    cell4ForJacob = newRowForJacob.insertCell(3);
    cell4ForJacob.innerHTML = data[1].userName;

    let newRowForLarry = table.insertRow(table.length);
    cell1ForLarry = newRowForLarry.insertCell(0);
    cell1ForLarry.innerHTML = data[2].id;
    cell1ForLarry = newRowForLarry.insertCell(1);
    cell1ForLarry.innerHTML = data[2].firstName;
    cell1ForLarry = newRowForLarry.insertCell(2);
    cell1ForLarry.innerHTML = data[2].lastName;
    cell1ForLarry = newRowForLarry.insertCell(3);
    cell1ForLarry.innerHTML = data[2].userName;
  }

  for (let i = 0; i < 1; i++) {
    let table = document.getElementById("table2").getElementsByTagName("tbody")[0];

    let newRowForMark = table.insertRow(table.length);
    cell1ForMark = newRowForMark.insertCell(0);
    cell1ForMark.innerHTML = data[0].id;
    cell2ForMark = newRowForMark.insertCell(1);
    cell2ForMark.innerHTML = data[0].firstName;
    cell3ForMark = newRowForMark.insertCell(2);
    cell3ForMark.innerHTML = data[0].lastName;
    cell4ForMark = newRowForMark.insertCell(3);
    cell4ForMark.innerHTML = data[0].userName;

    let newRowForJacob = table.insertRow(table.length);
    cell1ForJacob = newRowForJacob.insertCell(0);
    cell1ForJacob.innerHTML = data[1].id;
    cell2ForJacob = newRowForJacob.insertCell(1);
    cell2ForJacob.innerHTML = data[1].firstName;
    cell3ForJacob = newRowForJacob.insertCell(2);
    cell3ForJacob.innerHTML = data[1].lastName;
    cell4ForJacob = newRowForJacob.insertCell(3);
    cell4ForJacob.innerHTML = data[1].userName;

    let newRowForLarry = table.insertRow(table.length);
    cell1ForLarry = newRowForLarry.insertCell(0);
    cell1ForLarry.innerHTML = data[2].id;
    cell1ForLarry = newRowForLarry.insertCell(1);
    cell1ForLarry.innerHTML = data[2].firstName;
    cell1ForLarry = newRowForLarry.insertCell(2);
    cell1ForLarry.innerHTML = data[2].lastName;
    cell1ForLarry = newRowForLarry.insertCell(3);
    cell1ForLarry.innerHTML = data[2].userName;
  }

  for (let i = 0; i < 2; i++) {
    let table = document.getElementById("table3").getElementsByTagName("tbody")[0];

    let newRowForMark = table.insertRow(table.length);
    cell1ForMark = newRowForMark.insertCell(0);
    cell1ForMark.innerHTML = data[0].id;
    cell2ForMark = newRowForMark.insertCell(1);
    cell2ForMark.innerHTML = data[0].firstName;
    cell3ForMark = newRowForMark.insertCell(2);
    cell3ForMark.innerHTML = data[0].lastName;
    cell4ForMark = newRowForMark.insertCell(3);
    cell4ForMark.innerHTML = data[0].userName;

    let newRowForJacob = table.insertRow(table.length);
    cell1ForJacob = newRowForJacob.insertCell(0);
    cell1ForJacob.innerHTML = data[1].id;
    cell2ForJacob = newRowForJacob.insertCell(1);
    cell2ForJacob.innerHTML = data[1].firstName;
    cell3ForJacob = newRowForJacob.insertCell(2);
    cell3ForJacob.innerHTML = data[1].lastName;
    cell4ForJacob = newRowForJacob.insertCell(3);
    cell4ForJacob.innerHTML = data[1].userName;

    let newRowForLarry = table.insertRow(table.length);
    cell1ForLarry = newRowForLarry.insertCell(0);
    cell1ForLarry.innerHTML = data[2].id;
    cell1ForLarry = newRowForLarry.insertCell(1);
    cell1ForLarry.innerHTML = data[2].firstName;
    cell1ForLarry = newRowForLarry.insertCell(2);
    cell1ForLarry.innerHTML = data[2].lastName;
    cell1ForLarry = newRowForLarry.insertCell(3);
    cell1ForLarry.innerHTML = data[2].userName;
  }

  for (let i = 0; i < 2; i++) {
    let table = document.getElementById("table4").getElementsByTagName("tbody")[0];

    let newRowForMark = table.insertRow(table.length);
    cell1ForMark = newRowForMark.insertCell(0);
    cell1ForMark.innerHTML = data[0].id;
    cell2ForMark = newRowForMark.insertCell(1);
    cell2ForMark.innerHTML = data[0].firstName;
    cell3ForMark = newRowForMark.insertCell(2);
    cell3ForMark.innerHTML = data[0].lastName;
    cell4ForMark = newRowForMark.insertCell(3);
    cell4ForMark.innerHTML = data[0].userName;

    let newRowForJacob = table.insertRow(table.length);
    cell1ForJacob = newRowForJacob.insertCell(0);
    cell1ForJacob.innerHTML = data[1].id;
    cell2ForJacob = newRowForJacob.insertCell(1);
    cell2ForJacob.innerHTML = data[1].firstName;
    cell3ForJacob = newRowForJacob.insertCell(2);
    cell3ForJacob.innerHTML = data[1].lastName;
    cell4ForJacob = newRowForJacob.insertCell(3);
    cell4ForJacob.innerHTML = data[1].userName;

    let newRowForLarry = table.insertRow(table.length);
    cell1ForLarry = newRowForLarry.insertCell(0);
    cell1ForLarry.innerHTML = data[2].id;
    cell1ForLarry = newRowForLarry.insertCell(1);
    cell1ForLarry.innerHTML = data[2].firstName;
    cell1ForLarry = newRowForLarry.insertCell(2);
    cell1ForLarry.innerHTML = data[2].lastName;
    cell1ForLarry = newRowForLarry.insertCell(3);
    cell1ForLarry.innerHTML = data[2].userName;
  }

  for (let i = 0; i < 1; i++) {
    let table = document.getElementById("table5").getElementsByTagName("tbody")[0];

    let newRowForMark = table.insertRow(table.length);
    cell1ForMark = newRowForMark.insertCell(0);
    cell1ForMark.innerHTML = data[0].id;
    cell2ForMark = newRowForMark.insertCell(1);
    cell2ForMark.innerHTML = data[0].firstName;
    cell3ForMark = newRowForMark.insertCell(2);
    cell3ForMark.innerHTML = data[0].lastName;
    cell4ForMark = newRowForMark.insertCell(3);
    cell4ForMark.innerHTML = data[0].userName;

    let newRowForJacob = table.insertRow(table.length);
    cell1ForJacob = newRowForJacob.insertCell(0);
    cell1ForJacob.innerHTML = data[1].id;
    cell2ForJacob = newRowForJacob.insertCell(1);
    cell2ForJacob.innerHTML = data[1].firstName;
    cell3ForJacob = newRowForJacob.insertCell(2);
    cell3ForJacob.innerHTML = data[1].lastName;
    cell4ForJacob = newRowForJacob.insertCell(3);
    cell4ForJacob.innerHTML = data[1].userName;

    let newRowForLarry = table.insertRow(table.length);
    cell1ForLarry = newRowForLarry.insertCell(0);
    cell1ForLarry.innerHTML = data[2].id;
    cell1ForLarry = newRowForLarry.insertCell(1);
    cell1ForLarry.innerHTML = data[2].firstName;
    cell1ForLarry = newRowForLarry.insertCell(2);
    cell1ForLarry.innerHTML = data[2].lastName;
    cell1ForLarry = newRowForLarry.insertCell(3);
    cell1ForLarry.innerHTML = data[2].userName;
  }
}

function readFormData() {
  let formData = {};
  formData["id"] = document.getElementById("id").value;
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["userName"] = document.getElementById("userName").value;
  return formData;
}

function onFormSubmit() {
  let formData = readFormData();
  postFormData(formData);
}

function postFormData(data) {
  let table = document.getElementById("table1").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.firstName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.lastName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.userName;
}