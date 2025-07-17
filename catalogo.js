fetch('data/books.json')
  .then(response => response.json())
  .then(data => {
    const catalogo = document.getElementById('catalogo');
    const searchInput = document.getElementById('search');

    function renderBooks(filter = '') {
      catalogo.innerHTML = '';
      data.filter(libro => libro.titolo.toLowerCase().includes(filter.toLowerCase()))
          .forEach(libro => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="\${libro.copertina}" alt="\${libro.titolo}">
          <h3>\${libro.titolo}</h3>
          <p><strong>\${libro.autore}</strong></p>
          <p><em>\${libro.categoria}</em></p>
          <p>\${libro.descrizione}</p>
          <a href="\${libro.amazon}" target="_blank">Acquista su Amazon</a>
        `;
        catalogo.appendChild(card);
      });
    }

    searchInput.addEventListener('input', () => {
      renderBooks(searchInput.value);
    });

    renderBooks();
  });