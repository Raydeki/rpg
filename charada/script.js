function verificarResposta() {
    var resposta = document.getElementById('resposta').value.toLowerCase();

    if (resposta === 'copo') {
        document.getElementById('resultado').textContent = 'Parabéns! Você agora está pronto para o despertar!!!"';
        var botao = document.createElement("button");
        botao.innerText = "Despertar";

        // Adicionando um evento de clique ao botão
        botao.addEventListener("click", function() {
            window.location.href="video.html"
        });

        // Adicionando o botão ao corpo do documento
        document.body.appendChild(botao);
    } else {
        document.getElementById('resultado').textContent = 'Resposta incorreta. Tente novamente.';
    }
}
