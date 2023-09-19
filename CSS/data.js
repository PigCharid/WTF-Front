var fs = require("fs");

let myData;

fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  myData = data.toString();
  myData = myData.replace(/\r?\n/g, "");
  let temp = formatData(myData);
   
});

function formatData(data) {
  const structuredData = [];
  let currentIndex = 0;

  while (currentIndex < data.length) {
    const fields = [];

    for (let i = 0; i < 10; i++) {
      const nextDelimiter = data.indexOf("----", currentIndex);
      if (nextDelimiter === -1) {
        fields.push(data.slice(currentIndex));
        currentIndex = data.length;
      } else if (i == 9) {
        fields.push(data.slice(currentIndex, currentIndex+9));
        currentIndex = currentIndex+9;
      } else {
        fields.push(data.slice(currentIndex, nextDelimiter));
        currentIndex = nextDelimiter + 4;
      }
    }

    structuredData.push({
      email: fields[0],
      firstName: fields[1],
      lastName: fields[2],
      address: fields[3],
      city: fields[4],
      state: fields[5],
      zip: fields[6],
      phone: fields[7],
      dob: fields[8],
      id: fields[9],
    });
  }

  return structuredData;
}
