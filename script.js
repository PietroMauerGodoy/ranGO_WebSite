/*fechar e abrir o popup*/
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("contact-popup");
    var contactBtn = document.getElementById("contact-btn");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    contactBtn.onclick = function() {
        popup.style.display = "flex";
    }

    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

/*aceitar apenas números em "telefone" */
function openPopup() {
    document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
document.getElementById('telefone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});



function openPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
}

/*abrir link externo */

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('header nav ul li a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

/*telas do produto */

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


function goToPaymentIniciante(planName, price) {
    // Redireciona para a página de pagamento com parâmetros de query string (opcional)
    window.location.href = `pixInicial.html?plan=${planName}&price=${price}`;
}


function goToPaymentPage(planName, price) {
    // Redireciona para a página de pagamento com parâmetros de query string (opcional)
    window.location.href = `pixPro.html?plan=${planName}&price=${price}`;
}






