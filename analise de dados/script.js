    const botao = document.getElementById('botao');
    const valor = document.getElementById('valor');

    botao.addEventListener('click', function() {
        if (valor.style.display === 'none') {
            valor.style.display = 'block';
            botao.textContent = 'Esconder Valor';
        } else {
            valor.style.display = 'none';
            botao.textContent = 'Mostrar Valor';
        }
    });


const lineChart = new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Vendas",
                data: [12, 19, 3, 5, 2, 3],
                borderColor: "#f4a261",
                backgroundColor: "rgba(244, 162, 97, 0.2)",
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        plugins: {
            legend: { display: true, position: "top" }
        },
        responsive: true,
    }
});

const pieChart = new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: ["Arroz", "Carne", "Legumes", "Outros"],
        datasets: [
            {
                data: [50, 25, 12.5, 12.5],
                backgroundColor: ["#4caf50", "#f44336", "#ffeb3b", "#9e9e9e"]
            }
        ]
    },
    options: {
        plugins: {
            legend: { display: true, position: "right" }
        },
        responsive: true,
    }
});

