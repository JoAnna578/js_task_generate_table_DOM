'use strict';

const people = [...]; // Twoja tablica osób

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');

  if (!table) return; // zabezpieczenie, jeśli tabela nie istnieje

  people.forEach(person => {
    const tr = document.createElement('tr');

    // obliczamy brakujące wartości
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    // tworzymy 6 komórek
    const cells = [
      person.name,
      person.sex,
      person.born,
      person.died,
      age,
      century,
    ];

    cells.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
});
