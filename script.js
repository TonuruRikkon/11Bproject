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