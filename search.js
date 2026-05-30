// Simple placeholder for site search. Replace with lunr.js or elasticlunr for real search.
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Example index (replace with real content)
const PAGES = [
  { title: 'Home', url: 'index.html', text: 'Learn Build Remember DevOps AWS Kubernetes Notes Projects' },
  { title: 'About', url: 'about/', text: 'About Me DevOps AWS Kubernetes Automation' },
  { title: 'Projects', url: 'projects/', text: 'Crochet Medium Volunteer Projects DevOps Cloud' },
  { title: 'Contact', url: 'contact/', text: 'Contact Email Comments' },
  { title: 'Kubernetes', url: 'kubernetes/', text: 'Kubernetes Learning Path Notes Guides Diagrams' },
  { title: 'AWS', url: 'aws/', text: 'AWS Learning Path Notes Guides Diagrams' },
  { title: 'Terraform', url: 'terraform/', text: 'Terraform Learning Path Notes Guides Diagrams' },
  { title: 'RabbitMQ', url: 'rabbitmq/', text: 'RabbitMQ Learning Path Notes Guides Diagrams' },
];

searchInput && searchInput.addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '';
    return;
  }
  const results = PAGES.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.text.toLowerCase().includes(q)
  );
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="small">No results found.</div>';
    return;
  }
  searchResults.innerHTML = results.map(r =>
    `<a href="${r.url}" class="card" style="display:block;margin-bottom:10px;">${r.title}</a>`
  ).join('');
});
