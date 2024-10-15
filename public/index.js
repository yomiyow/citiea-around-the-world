const tableBody = document.getElementById('citiesTableBody');

fetch('/cities')
  .then((response) => response.json())
  .then((cities) => {
    cities.forEach((city) => {
      renderCitiesTable(city);
    });
  })
  .catch((err) => console.error('Error fetching data: ', err));

  function renderCitiesTable(city) {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell(0);
    const countryCodeCell = row.insertCell(1);
    const districtCell = row.insertCell(2);
    const populationCell = row.insertCell(3);

    nameCell.textContent = city.Name;
    countryCodeCell.textContent = city.CountryCode;
    districtCell.textContent = city.District;
    populationCell.textContent = city.Population;
  }