document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('search-bar');
  const cards = document.querySelectorAll('.card');

  searchBar.addEventListener('keyup', function(event) {
      const searchTerm = event.target.value.toLowerCase().trim();

      cards.forEach(function(card) {
          const title = card.querySelector('.article-title').textContent.toLowerCase();

          if (title.includes(searchTerm)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });
});