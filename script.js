// Mengambil data dari data.json
fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal memuat file data.json');
    }
    return response.json();
  })
  .then(data => {
    const summaryContainer = document.getElementById('summary-items');

    data.forEach(item => {
      // Membuat elemen kartu ringkasan untuk tiap kategori
      const article = document.createElement('article');
      article.className = `summary-item ${item.category.toLowerCase()}`;

      article.innerHTML = `
        <div class="item-category">
          <img src="${item.icon}" alt="" aria-hidden="true">
          <span>${item.category}</span>
        </div>
        <div class="item-score">
          <strong>${item.score}</strong> / 100
        </div>
      `;

      summaryContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));