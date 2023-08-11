export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');
    menuDiv.textContent = "Explore our exquisite menu filled with a variety of mouthwatering dishes.";
  
    content.appendChild(menuDiv);
  }
  