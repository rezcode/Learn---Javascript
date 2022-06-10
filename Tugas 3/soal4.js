const axios = require("axios");

const getData = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  axios.get(url).then((data) => {
    // console.log(data.data);
    let names = data.data.map((item) => item.name);
    console.log(names);
  });
};

getData();
