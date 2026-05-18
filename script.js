function calcularManejo() {
    // Captura os valores digitados no formulário
    const tipoCultivo = document.getElementById("tipo-solo").value;
    const umidade = parseInt(document.getElementById("umidade-input").value);
    
    // Elementos da interface que serão modificados
    const painelResultado = document.getElementById("resultado-painel");
    const textoResultado = document.getElementById("texto-resultado");

    // Validação simples para evitar campos vazios ou números absurdos
    if (isNaN(umidade) || umidade < 0 || umidade > 100) {
        alert("Por favor, insira uma porcentagem de umidade válida entre 0 e 100.");
        return;
    }

    let recomendacao = "";

    // Lógica algorítmica baseada na necessidade do cultivo e preservação ambiental
    if (umidade < 30) {
        recomendacao = `🚨 **Alerta de Estresse Hídrico:** A umidade está criticamente baixa em ${umidade}%. 
        \n**Ação Sustentável:** Ative o sistema de gotejamento localizado imediatamente por 20 minutos. O uso de microaspersão direcionada evita o desperdício por evaporação e preserva o lençol freático.`;
        
        // Atualiza o card de sensores do painel principal para simular o alerta em tempo real
        document.getElementById("valor-umidade").innerText = umidade + "%";
        document.getElementById("status-umidade").innerText = "Baixa";
        document.getElementById("status-umidade").style.backgroundColor = "#ffebee";
        document.getElementById("status-umidade").style.color = "#c62828";

    } else if (umidade >= 30 && umidade <= 60) {
        recomendacao = `✅ **Equilíbrio Perfeito:** A umidade está em ${umidade}%, faixa ideal para o cultivo de ${tipoCultivo}. 
        \n**Ação Sustentável:** Nenhuma irrigação é necessária no momento. Os sensores inteligentes bloquearam a abertura das válvulas, economizando energia e água. O solo mantém sua estrutura biológica intacta.`;

        document.getElementById("valor-umidade").innerText = umidade + "%";
        document.getElementById("status-umidade").innerText = "Ideal";
        document.getElementById("status-umidade").style.backgroundColor = "#e8f5e9";
        document.getElementById("status-umidade").style.color = "#2e7d32";

    } else {
        recomendacao = `⚠️ **Excesso de Água détectado:** Umidade em ${umidade}%. O solo está saturado.
        \n**Ação Sustentável:** Mantenha a irrigação desligada. O excesso de água causa a lixiviação (lavagem) dos nutrientes do solo e pode apodrecer as raízes, além de desperdiçar um recurso precioso.`;

        document.getElementById("valor-umidade").innerText = umidade + "%";
        document.getElementById("status-umidade").innerText = "Saturado";
        document.getElementById("status-umidade").style.backgroundColor = "#e3f2fd";
        document.getElementById("status-umidade").style.color = "#0d47a1";
    }

    // Exibe o painel de resultados com animação mudando a classe CSS
    textoResultado.innerText = recomendacao;
    painelResultado.className = "resultado-visivel";
}
