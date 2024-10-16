AOS.init();


    // Defina a data do evento
    const eventDate = new Date('2024-12-12T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime(); // Data e hora atuais
        const timeLeft = eventDate - now; // Diferença entre a data do evento e o momento atual

        // Cálculos de dias, horas, minutos e segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Atualiza o conteúdo do HTML com o tempo restante
        document.getElementById('contador').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Se o tempo acabar, mostrar uma mensagem
        if (timeLeft < 0) {
            document.getElementById('contador').innerHTML = 'O evento já começou!';
        }
    }

    // Atualiza a contagem a cada segundo
    setInterval(updateCountdown, 1000);
