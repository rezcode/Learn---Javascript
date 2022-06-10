const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const newData = {
  ...data,
  name: "Rezha Riansyah R.",
  email: "rezharians@gmail.com",
  hobby: "Gaming",
};

const { street, city } = data.address;

console.log(`========soal 4.a========`);
console.log(newData);
console.log(`========soal 4.b========`);
console.log(`${street} dan ${city}`);
