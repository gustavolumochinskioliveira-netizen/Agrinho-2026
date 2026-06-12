document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("balance-slider");
    const scenery = document.getElementById("scenery");
    const sceneryText = document.getElementById("scenery-text");

    // Função que atualiza o cenário com base no slider
    function updateScenery(value) {
        if (value < 35) {
            // Foco excessivo apenas em produção sem cuidado ambiental
            scenery.style.filter = "grayscale(40%) sepia(40%) contrast(125%)";
            sceneryText.innerText = "⚠️ Alerta: Alta lotação de pasto e desgaste do solo. Escassez de água à vista!";
            sceneryText.style.color = "#b71c1c";
        } else if (value >= 35 && value <= 70) {
            // O equilíbrio perfeito!
            scenery.style.filter = "grayscale(0%) sepia(0%) saturate(140%)";
            sceneryText.innerText = "🌱 Agroforte! Integração perfeita entre lavoura verde e pecuária sustentável em harmonia.";
            sceneryText.style.color = "#1b4332";
        } else {
            // Foco apenas em isolar a natureza sem produzir alimentos
            scenery.style.filter = "hue-rotate(50deg) saturate(85%) brightness(95%)";
            sceneryText.innerText = "Pastagem intocada, mas a produção caiu e falta alimento. O segredo é o manejo equilibrado!";
            sceneryText.style.color = "#e65100";
        }
    }

    // Escuta as mudanças no slider enquanto o usuário arrasta
    slider.addEventListener("input", (e) => {
        updateScenery(e.target.value);
    });

    // Inicia com o valor do meio (Equilibrado)
    updateScenery(slider.value);

    // Efeito de Animação nos cards ao rolar a página
    const cards = document.querySelectorAll('.card');
    
    // Define o estado inicial para animação
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < window.innerHeight - 50) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    // Executa uma vez no início caso os cards já estejam visíveis
    checkScroll();
});