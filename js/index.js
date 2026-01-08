 
        /* --- JavaScript: A Lógica --- */

        const bola = document.getElementById('bolaBasquete');
        const rede = document.getElementById('redeBasquete');
        const mensagem = document.getElementById('mensagemFinal');
        const cena = document.querySelector('.cena');

        // Inicia a animação 1 segundo após a página carregar
        setTimeout(() => {
            bola.classList.add('bola-caindo');
        }, 1000);

        // Monitora o momento que a rede deve balançar (Swish!)
        // Acontece por volta de 1.2 segundos da animação da bola
        setTimeout(() => {
             rede.classList.add('swish');
        }, 2200);


        // Quando a animação da bola termina (ela cai no chão imaginário)
        bola.addEventListener('animationend', () => {
            // 1. Pega a posição final da bola para a explosão ocorrer lá
            const rect = bola.getBoundingClientRect();
            const centroX = rect.left + rect.width / 2;
            const centroY = rect.top + rect.height / 2;

            // 2. Esconde a bola original
            bola.style.display = 'none';

            // 3. Cria a explosão de confetes
            criarExplosao(centroX, centroY);

            // 4. Mostra a mensagem com um pequeno atraso
            setTimeout(() => {
                mensagem.style.display = 'block';
                mensagem.classList.add('aparecer-texto');
            }, 300);
        });

        // Função para criar as partículas da explosão
        function criarExplosao(x, y) {
            const cores = ['#e67e22', '#d63031', '#0984e3', '#fdcb6e', '#fff'];
            const quantidadeParticulas = 50;

            for (let i = 0; i < quantidadeParticulas; i++) {
                const particula = document.createElement('div');
                particula.classList.add('particula');
                document.body.appendChild(particula);

                // Cor aleatória
                const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
                particula.style.backgroundColor = corAleatoria;

                // Posição inicial (onde a bola sumiu)
                particula.style.left = `${x}px`;
                particula.style.top = `${y}px`;

                // Direção e velocidade aleatórias para a explosão
                const destinoX = (Math.random() - 0.5) * 400; // Espalha 200px para cada lado
                const destinoY = (Math.random() - 0.5) * 400;
                const rotacao = Math.random() * 520;
                const duracao = 0.8 + Math.random() * 0.5; // Entre 0.8s e 1.3s

                // Animação da partícula usando Web Animations API (Javascript puro)
                particula.animate([
                    { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                    { transform: `translate(${destinoX}px, ${destinoY}px) rotate(${rotacao}deg)`, opacity: 0 }
                ], {
                    duration: duracao * 1000,
                    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // Efeito de "explosão rápida"
                    fill: 'forwards'
                });

                // Remove a partícula do HTML depois que a animação acaba para não pesar a página
                setTimeout(() => {
                    particula.remove();
                }, duracao * 1000);
            }
     