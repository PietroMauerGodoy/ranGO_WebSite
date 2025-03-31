// Função para abrir e fechar o popup
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("contact-popup");
    const contactBtn = document.getElementById("contact-btn");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    contactBtn.onclick = () => {
        popup.style.display = "flex";
    };

    closeBtn.onclick = () => {
        popup.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});

// Aceitar apenas números no campo "telefone"
document.getElementById('telefone').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Abrir link externo com rolagem suave
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Exibir imagens do produto com texto correspondente
const images = document.querySelectorAll('.fade-img');
const texts = [
    "Login",
    "Inicial (home)",
    "Dashboard",
    "Estoque",
    "Fornecedor",
    "Pedidos",
    "Opções"
];
const textElement = document.getElementById('text');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].classList.remove('show');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('show');

    textElement.style.opacity = 0; 
    setTimeout(() => {
        textElement.textContent = texts[currentImageIndex];
        textElement.style.opacity = 1; 
    }, 500); 
}
setInterval(showNextImage, 3500);

// Redirecionar para telas de pagamento
function goToPayment(planName, price, isPro = false) {
    const page = isPro ? 'pixPro.html' : 'pixInicial.html';
    window.location.href = `${page}?plan=${planName}&price=${price}`;
}