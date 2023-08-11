export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');
    homeDiv.textContent = "Welcome to Vibe Restaurent! Our culinary delights will mesmerize your taste buds.";
  
    content.appendChild(homeDiv);
  }
loadHome()  