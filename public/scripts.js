fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));