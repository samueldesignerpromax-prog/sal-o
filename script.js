// ========== MENU HAMBURGER ==========
const menuHamburger = document.getElementById('menuHamburger');
const nav = document.getElementById('nav');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuHamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ========== FORMULÁRIO DE AGENDAMENTO ==========
const form = document.getElementById('formAgendamento');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Pegar dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const mensagem = document.getElementById('mensagem').value.trim();
