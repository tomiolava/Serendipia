// Select all cards
const cards = document.querySelectorAll('.publi-card');

// Check localStorage for clicked cards
cards.forEach(card => {
    const id = card.getAttribute('data-id');
    if (localStorage.getItem(`card-${id}`) === 'clicked') {
        card.classList.add('clicked');
    }

    // Add click event listener to each card
    card.addEventListener('click', function() {
        // Toggle clicked state
        card.classList.toggle('clicked');

        // Store the state in localStorage
        if (card.classList.contains('clicked')) {
            localStorage.setItem(`card-${id}`, 'clicked');

            // Open the associated link from data-link attribute
            const link = card.getAttribute('data-link');
            window.open(link, '_blank'); // Open in a new tab
        } else {
            localStorage.removeItem(`card-${id}`);
        }
    });
});







document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.toggle-strikethrough');

    // Función para cargar el estado desde localStorage
    function loadState() {
        links.forEach(link => {
            const parent = link.closest('.containertematw');
            const textContainer = parent.querySelector('.textotematw');
            const checkbox = parent.querySelector('.checkboxtw');
            const stateKey = parent.dataset.stateKey;

            // Verifica si hay un estado guardado en localStorage
            const isChecked = localStorage.getItem(stateKey);
            if (isChecked === 'true') {
                textContainer.classList.add('striked');
                checkbox.classList.add('checked');
            }
        });
    }

    // Función para guardar el estado en localStorage
    function saveState(stateKey, isChecked) {
        localStorage.setItem(stateKey, isChecked);
    }

    // Carga el estado al cargar la página
    loadState();

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Encuentra los elementos a modificar
            const parent = this.closest('.containertematw');
            const textContainer = parent.querySelector('.textotematw');
            const checkbox = parent.querySelector('.checkboxtw');
            const stateKey = parent.dataset.stateKey;

            // Alterna el estado visual
            const isStriked = textContainer.classList.toggle('striked');
            checkbox.classList.toggle('checked');

            // Guarda el estado en localStorage
            saveState(stateKey, isStriked);
        });
    });
});




// Función para manejar el clic en las tarjetas y guardar el estado en localStorage
document.querySelectorAll('.vids').forEach((vid, index) => {
    // Si no existe un estado, inicialízalo en false
    if (localStorage.getItem(`vid-${index}`) === null) {
        localStorage.setItem(`vid-${index}`, 'false'); // Inicializa como no clickeado
    }

    // Restaurar el estado desde localStorage
    const isClicked = localStorage.getItem(`vid-${index}`);
    if (isClicked === 'true') {
        vid.classList.add('clicked');
    }

    // Añadir evento de clic
    vid.addEventListener('click', function () {
        this.classList.toggle('clicked');

        // Guardar el estado en localStorage
        const clicked = this.classList.contains('clicked');
        localStorage.setItem(`vid-${index}`, clicked);
    });
});

function setBackgroundImages() {
    const pics = document.querySelectorAll('.row-alo');

    pics.forEach(pic => {
        const imageUrl = pic.getAttribute('data-bg');
        if (window.innerWidth < 600) {
            pic.style.backgroundImage = `url(${imageUrl})`;
            pic.style.backgroundSize = 'cover';
            pic.style.backgroundPosition = 'center';
        } else {
            pic.style.backgroundImage = ''; // Remove background on larger screens
        }
    });
}

// Run on load
setBackgroundImages();

// Run on window resize
window.addEventListener('resize', setBackgroundImages);
