const cartas= ['😀', '😀', '😍', '😍', '🥲', '🥲', '😑', '😑', '😴', '😴', '😓', '😓', '😢', '😢', '😡', '😡', '🤣', '🤣', '🥰', '🥰', '😤', '😤', '🥵', '🥵', '🥶', '🥶', '🤕', '🤕', '🤒', '🤒', '😨', '😨', '😇','😇', '🤑', '🤑'];
let cartasElegidas = [];
let paresEncontrados = 0;
const tablero = document.getElementById('tablero');
const botonReiniciar = document.getElementById('reiniciar');

function iniciarJuego() {
    paresEncontrados = 0;
    cartasElegidas = [];
    tablero.innerHTML = '';
    const mezcladas = cartas.sort(() => Math.random() - 0.5);
    mezcladas.forEach((carta, index) => {
        const divCarta = document.createElement('div');
        divCarta.classList.add('carta');
        divCarta.dataset.index = index;
        divCarta.addEventListener('click', () => mostrarCarta(divCarta, carta));
        tablero.appendChild(divCarta);
    });
}

function mostrarCarta(divCarta, carta) {
    if (divCarta.classList.contains('revelada') || cartasElegidas.length === 2) return;
    divCarta.textContent = carta;
    divCarta.classList.add('revelada');
    cartasElegidas.push({ divCarta, carta });
    
    if (cartasElegidas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    const [carta1, carta2] = cartasElegidas;
    if (carta1.carta === carta2.carta) {
        carta1.divCarta.classList.add('pareja');
        carta2.divCarta.classList.add('pareja');
        paresEncontrados++;
        if (paresEncontrados === cartas.length / 2) {
            setTimeout(() => alert('¡Ganaste!'), 500);
        }
    } else {
        setTimeout(() => {
            carta1.divCarta.textContent = '';
            carta2.divCarta.textContent = '';
            carta1.divCarta.classList.remove('revelada');
            carta2.divCarta.classList.remove('revelada');
        }, 1000);
    }
    cartasElegidas = [];
}

botonReiniciar.addEventListener('click', iniciarJuego);

iniciarJuego();