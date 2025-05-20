// script.js - Funcionalidades interativas do site PC Components Hub

document.addEventListener('DOMContentLoaded', () => { const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => { link.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
    
    const exploreBtn = document.querySelector('.btn'); if (exploreBtn) { exploreBtn.addEventListener('click', () => { const componentSection = document.querySelector('.components'); if (componentSection) { componentSection.scrollIntoView({ behavior: 'smooth' }); } }); } });