const list = document.getElementById("list");
const day = document.getElementById("day");
const base = document.getElementById("base");



const urlData =
  "https://v6.exchangerate-api.com/v6/9910584e296bf5bb26d55618/latest/EUR";

async function getData() {
  const promiseData = await fetch(urlData);
  const data = await promiseData.json();
  let ConversionRates = data.conversion_rates;

  for (key in ConversionRates) {
    list.innerHTML += `<div class='row'>${key} <span>${ConversionRates[key]}</span></div>`;
    

  }

  base.innerHTML = `Base value is <strong>${data.base_code}</strong>`;

  let time = data.time_last_update_utc;
  day.innerHTML = time.slice(0, 16);

  btn.addEventListener("click", converts);
  return data;
}
getData()
  .then((data) => {
    JSON.parse(data.conversion_rates);
  })
  .catch((error) => console.error);
