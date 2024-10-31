function selectCategory(categoryName) {
    document.getElementById('categoryList').style.display = 'none';
    document.getElementById('categoryDetail').style.display = 'block';
    document.getElementById('selectedCategory').textContent = categoryName;
}

function goBack() {
    document.getElementById('categoryList').style.display = 'block';
    document.getElementById('categoryDetail').style.display = 'none';
}

function addCategory() {
    alert("Categoria adicionada com sucesso!");
    goBack();
}