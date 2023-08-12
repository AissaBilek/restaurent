

import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function setActiveTab(tabId) {
  const tabs = ['home-tab', 'menu-tab', 'contact-tab'];
  tabs.forEach(tab => {
    const button = document.getElementById(tab);
    if (tab === tabId) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

document.getElementById('home-tab').addEventListener('click', () => {
  console.log(setActiveTab('home-tab'));
  loadHome();
});

document.getElementById('menu-tab').addEventListener('click', () => {
  setActiveTab('menu-tab');
  loadMenu();
});

document.getElementById('contact-tab').addEventListener('click', () => {
  setActiveTab('contact-tab');
  loadContact();
});


loadHome();
