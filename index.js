// We want to talk to an API:

// What is our endpoint?
let url = `https://restcountries.eu/rest/v2/name/Malaysia`;
// What parameters are required?
// - dont have
// What parameters are optional?
// - dont have

function waitForData(res) {
  return res.json();
}

function handlerData(data) {
  let pop = data[0].population;
  console.log(`The population of Malaysia is ${pop}`);
}
// What is HTTP method?
// - GET
fetch(url, { method: "GET" }).then(waitForData).then(handlerData);
