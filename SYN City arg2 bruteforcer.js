const axios = require('axios');
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

accestoken = "8xIcZlf49WDVnZGLYuPp8ddy2NV7Id";
userId = "692466056358526998";
walletAddy = "0xACdBC3142Bc143c37c90508c4014C5cFE814B965"
digits = "6715";
names = ["Meyer", "Mickey", "Cohen", "Charles", "Lucky", "Luciano", "Al", "Capone", "Pablo", "Escobar", "Giovanni", "John", "Stanfa", "Jimmy", "Hoffa", "Henry", "Hill", "Lefty", "Richard", "Iceman", "Kuklinski ", "Sonny", "Benjamin", "Bugsy", "Siegel"]
let combo = []
const result = [];
result.length = 3; //n=3

function combine(input, len, start) {
  if (len === 0) {
    combo.push(result); //process here the result
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len - 1, i + 1);
  }
}

combine(names, result.length, 0);

//console.log(JSON.stringify(combo));

for (let i = 1; i < combo.length; i++) {
  url = "https://nft.syn.city/api/v1/validate-solution?accessToken=" + accestoken + "&userId=" + userId + "&answer1=" + combo[i][0] + "&answer2=" + combo[i][1] + "&answer3=" + combo[i][2] + "&digits=" + digits + "&discriminator=7907";
  await sleep(5000);
  axios.get(url)
    .then(function (response) {
      data = response.data;
      if (data.success == false) {
        console.log(response.message);
      } else {
        console.log("url =" + url);
      }
    })
    .catch(err => { console.log(err); });
}
