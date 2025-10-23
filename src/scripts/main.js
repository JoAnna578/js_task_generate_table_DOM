// Załaduj dane z people.json (tak jak w testach Cypress)
const people = require('../lib/people.json');

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');
  if (!table) return;

  people.forEach((person) => {
    const row = document.createElement('tr');

    // Name
    const nameTd = document.createElement('td');
    nameTd.textContent = person.name;
    row.appendChild(nameTd);

    // Gender
    const genderTd = document.createElement('td');
    genderTd.textContent = person.sex === 'm' ? 'Male' : 'Female';
    row.appendChild(genderTd);

    // Born
    const bornTd = document.createElement('td');
    bornTd.textContent = person.born;
    row.appendChild(bornTd);

    // Died
    const diedTd = document.createElement('td');
    diedTd.textContent = person.died;
    row.appendChild(diedTd);

    // Age
    const ageTd = document.createElement('td');
    ageTd.textContent = person.died - person.born;
    row.appendChild(ageTd);

    // Century
    const centuryTd = document.createElement('td');
    centuryTd.textContent = Math.ceil(person.died / 100);
    row.appendChild(centuryTd);

    table.appendChild(row);
  });
});





 
