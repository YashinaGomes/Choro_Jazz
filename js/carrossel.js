function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modal.style.display = "flex"; // Exibe o modal
    modalImage.src = img.src; // Define a imagem no modal
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
