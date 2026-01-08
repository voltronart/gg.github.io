function abrirPresente() {
    // Adiciona a classe que dispara a animação CSS
    const envelope = document.getElementById('envelopeWrapper');
    envelope.classList.add('aberto');

    // Mostra o conteúdo após a animação da carta subir
    setTimeout(() => {
        const conteudo = document.getElementById('conteudo');
        conteudo.style.display = 'block';
        iniciarContador();
    }, 1000);
}

function iniciarContador() {
    // AJUSTE SUA DATA AQUI: (Ano, Mês-1, Dia)
    // Exemplo: 12 de Junho de 2023 -> (2023, 5, 12)
    const dataInicio = new Date(2024, 5, 12); 

    setInterval(() => {
        const agora = new Date();
        const diferenca = agora - dataInicio;

        // Cálculos matemáticos para converter milissegundos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        const contadorElemento = document.getElementById('contador');
        contadorElemento.innerHTML = `❤️ Juntos há: ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}