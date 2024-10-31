document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Informações salvas com sucesso!");
});

document.querySelector(".cancel-btn").addEventListener("click", function() {
    document.getElementById("editForm").reset();
});
