const axios = require("axios");

const getData = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(url);
      // console.log(request);
      if (request?.data?.length) {
        resolve(request.data);
      }
    } catch (err) {
      reject(err);
    }
  });
};

getData()
  .then((res) => {
    let names = res.map((item) => item.name);
    console.log(names.join(","));
  })
  .catch((err) => {
    // console.log(err.message);
    const { status, statusText } = err.response;
    if (status === 404) {
      console.log(`error code ${status},data ${statusText}`);
    } else {
      console.log(err.message);
    }
  });
