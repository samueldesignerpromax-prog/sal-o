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
    
    // Validação básica
    if (!nome || !email || !telefone || !servico || !data) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simular envio
    alert(`✅ Agendamento enviado com sucesso!\n\nOlá ${nome}, agendamos seu serviço de "${servico}" para o dia ${data}. Entraremos em contato em breve.`);
    
    // Limpar formulário
    form.reset();
});

// ========== DATA MÍNIMA PARA AGENDAMENTO ==========
const dataInput = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
dataInput.setAttribute('min', hoje);

// ========== SCROLL SUAVE PARA LINKS INTERNOS ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== EFEITO DE SCROLL NO HEADER ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
    }
});

// ========== ANIMAÇÃO AO SCROLL (Intersection Observer) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.servico-card, .depoimento-card, .galeria-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

console.log('🌟 Site do Salão Beleza & Estilo carregado com sucesso!');
