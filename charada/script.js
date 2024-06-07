function verificarResposta() {
    var resposta = document.getElementById('resposta').value.toLowerCase();

    if (resposta === 'copo') {
        document.getElementById('resultado').textContent = 'Parabéns! Você agora está pronto para o despertar!!!"';
    } else {
        document.getElementById('resultado').textContent = 'Resposta incorreta. Tente novamente.';
    }
}
