// Toggle theme button
const button = document.getElementById('toggle-theme');

// Kiểm tra trạng thái khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Lưu trạng thái vào localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Lesson toggle animation
function toggleContent(id) {
  const content = document.getElementById(id);
  const button = document.querySelector(`[onclick="toggleContent('${id}')"]`);
  
  // Toggle button state
  button.classList.toggle('clicked');
  
  // Toggle content with animation
  if (content.style.display === "none" || !content.style.display) {
    content.style.display = "block";
    content.classList.add('showing');
  } else {
    content.style.display = "none";
    content.classList.remove('showing');
  }
  
  // Remove clicked class after animation
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 300);
}

//adding test.txt contents to the website
fetch('README.md')
  .then(response => response.text())
  .then(text => {
    const ul = document.getElementById('thongbao-list');
    text.split(/\r?\n/).forEach(line => {
      if (line.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = line;
        ul.appendChild(li);
      }
    });
  });

//search bar
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            // Get all lesson-list dl elements
            document.querySelectorAll('dl.lesson-search').forEach(dl => {
                let hasVisible = false;
                dl.querySelectorAll('dd').forEach(dd => {
                    const text = dd.textContent.toLowerCase();
                    if (text.includes(filter)) {
                        dd.style.display = '';
                        hasVisible = true;
                    } else {
                        dd.style.display = 'none';
                    }
                });
                // Optionally hide the whole dl if nothing matches
                dl.style.display = (filter && hasVisible) ? '' : 'none';
            });
        });
        searchInput.dispatchEvent(new Event('input'));
    }
});