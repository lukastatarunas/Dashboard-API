  fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(data => {
      document.querySelector('#first').innerHTML = data[0].id;
      document.querySelector('#Mark').innerHTML = data[0].firstName;
      document.querySelector('#Otto').innerHTML = data[0].lastName;
      document.querySelector('#mdo').innerHTML = data[0].userName;
      document.querySelector('#second').innerHTML = data[1].id;
      document.querySelector('#Jacob').innerHTML = data[1].firstName;
      document.querySelector('#Thornton').innerHTML = data[1].lastName;
      document.querySelector('#fat').innerHTML = data[1].userName;
      document.querySelector('#third').innerHTML = data[2].id;
      document.querySelector('#Larry').innerHTML = data[2].firstName;
      document.querySelector('#the-Bird').innerHTML = data[2].lastName;
      document.querySelector('#twitter').innerHTML = data[2].userName;
    })
    .catch(err => console.log(err));

    fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
