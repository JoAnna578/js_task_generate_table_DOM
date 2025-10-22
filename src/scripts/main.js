'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const people = [
    { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 },
    { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 },
    { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 },
    { name: 'Jan van Brussel', sex: 'm', born: 1714, died: 1748 },
    { name: 'Philibert Haverbeke', sex: 'm', born: 1907, died: 1997 },
    { name: 'Jan Frans van Brussel', sex: 'm', born: 1761, died: 1833 },
    { name: 'Pauwels van Haverbeke', sex: 'm', born: 1535, died: 1582 },
    { name: 'Clara Aernoudts', sex: 'f', born: 1918, died: 2012 },
    { name: 'Emile Haverbeke', sex: 'm', born: 1877, died: 1968 },
    { name: 'Lieven de Causmaecker', sex: 'm', born: 1696, died: 1724 },
    { name: 'Pieter Haverbeke', sex: 'm', born: 1602, died: 1642 },
    { name: 'Livina Haverbeke', sex: 'f', born: 1692, died: 1743 },
    { name: 'Pieter Bernard Haverbeke', sex: 'm', born: 1695, died: 1762 },
    { name: 'Lieven van Haverbeke', sex: 'm', born: 1570, died: 1636 },
    { name: 'Joanna de Causmaecker', sex: 'f', born: 1762, died: 1807 },
    { name: 'Willem Haverbeke', sex: 'm', born: 1668, died: 1731 },
    { name: 'Pieter Antone Haverbeke', sex: 'm', born: 1753, died: 1798 },
    { name: 'Maria van Brussel', sex: 'f', born: 1801, died: 1834 },
    { name: 'Angela Haverbeke', sex: 'f', born: 1728, died: 1734 },
    { name: 'Elisabeth Haverbeke', sex: 'f', born: 1711, died: 1754 },
    { name: 'Lievijne Jans', sex: 'f', born: 1542, died: 1582 },
    { name: 'Bernardus de Causmaecker', sex: 'm', born: 1721, died: 1789 },
    { name: 'Jacoba Lammens', sex: 'f', born: 1699, died: 1740 },
    { name: 'Pieter de Decker', sex: 'm', born: 1705, died: 1780 },
    { name: 'Joanna de Pape', sex: 'f', born: 1654, died: 1723 },
    { name: 'Daniel Haverbeke', sex: 'm', born: 1652, died: 1723 },
    { name: 'Lieven Haverbeke', sex: 'm', born: 1631, died: 1676 },
    { name: 'Martina de Pape', sex: 'f', born: 1666, died: 1727 },
    { name: 'Jan Francies Haverbeke', sex: 'm', born: 1725, died: 1779 },
    { name: 'Maria Haverbeke', sex: 'm', born: 1905, died: 1997 },
    { name: 'Petronella de Decker', sex: 'f', born: 1731, died: 1781 },
    { name: 'Livina Sierens', sex: 'f', born: 1761, died: 1826 },
    { name: 'Laurentia Haverbeke', sex: 'f', born: 1710, died: 1786 },
    { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 },
    { name: 'Elisabeth Hercke', sex: 'f', born: 1632, died: 1674 },
    { name: 'Jan Haverbeke', sex: 'm', born: 1671, died: 1731 },
    { name: 'Anna van Hecke', sex: 'f', born: 1607, died: 1670 },
    { name: 'Maria Sturm', sex: 'f', born: 1835, died: 1917 },
    { name: 'Jacobus Bernardus van Brussel', sex: 'm', born: 1736, died: 1809 },
  ];

  const table = document.querySelector('.dashboard');

  people.forEach(person => {
    const tr = document.createElement('tr');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    const cells = [
      person.name,
      person.sex,
      person.born,
      person.died,
      age,
      century,
    ];

    cells.forEach(text => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
});




 
