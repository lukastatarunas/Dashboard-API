const main = document.getElementById("main");

const div = document.createElement("div");
div.setAttribute("class", "main-card main-1");

main.appendChild(div);

const table = document.createElement("table");
table.setAttribute("class", "table");

div.appendChild(table);

const thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");

table.appendChild(thead);

const tr0 = document.createElement("tr");

thead.appendChild(tr0);

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");

tr0.appendChild(th1);
tr0.appendChild(th2);
tr0.appendChild(th3);
tr0.appendChild(th4);

const tbody = document.createElement("tbody");

table.appendChild(tbody);

const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
const tr3 = document.createElement("tr");

tbody.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);

const th01 = document.createElement("th");
const th02 = document.createElement("th");
const th03 = document.createElement("th");

tr1.appendChild(th01);
tr2.appendChild(th02);
tr3.appendChild(th03);

const tdMark = document.createElement("td");
const tdOtto = document.createElement("td");
const tdmdo = document.createElement("td");

tr1.appendChild(tdMark);
tr1.appendChild(tdOtto);
tr1.appendChild(tdmdo);

const tdJacob = document.createElement("td");
const tdThornton = document.createElement("td");
const tdfat = document.createElement("td");

tr2.appendChild(tdJacob);
tr2.appendChild(tdThornton);
tr2.appendChild(tdfat);

const tdLarry = document.createElement("td");
const tdtheBird = document.createElement("td");
const tdtwitter = document.createElement("td");

tr3.appendChild(tdLarry);
tr3.appendChild(tdtheBird);
tr3.appendChild(tdtwitter);

fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    th1.textContent = "#";
    th2.textContent = "First Name";
    th3.textContent = "Last Name";
    th4.textContent = "User Name";

    th01.textContent = data[0].data[0].id;
    th02.textContent = data[0].data[1].id;
    th03.textContent = data[0].data[2].id;

    tdMark.textContent = data[0].data[0].firstName;
    tdOtto.textContent = data[0].data[0].lastName;
    tdmdo.textContent = data[0].data[0].userName;

    tdJacob.textContent = data[0].data[1].firstName;
    tdThornton.textContent = data[0].data[1].lastName;
    tdfat.textContent = data[0].data[1].userName;

    tdLarry.textContent = data[0].data[2].firstName;
    tdtheBird.textContent = data[0].data[2].lastName;
    tdtwitter.textContent = data[0].data[2].userName;
  })
  .catch(err => console.log(err));