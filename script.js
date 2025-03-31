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



