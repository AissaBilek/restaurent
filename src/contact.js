export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');
    contactDiv.textContent = "Get in touch with us. Phone: +213 98 63 05 24| Email: aissablk@VibeRestaurent.com";
  
    content.appendChild(contactDiv);
  }
  