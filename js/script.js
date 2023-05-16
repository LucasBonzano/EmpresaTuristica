var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'css\css.css';
document.head.appendChild(link);

fetch('index.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(html) {
    var container = document.getElementById('container');
    container.innerHTML = html;
  });