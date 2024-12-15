const carouselItems = document.querySelectorAll('.carousel-item');
const selectedImage = document.getElementById('selected-image');
const selectedTitle = document.getElementById('selected-title');
const selectedDescription = document.getElementById('selected-description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Para rastrear la imagen seleccionada

// Función para actualizar la imagen seleccionada
function updateSelectedImage(index) {
    const item = carouselItems[index];
    const src = item.src;
    const title = item.dataset.title;
    const description = item.dataset.description;

    selectedImage.src = src;
    selectedTitle.textContent = title;
    selectedDescription.textContent = description;

    // Resaltar el elemento seleccionado
    carouselItems.forEach(i => i.style.borderColor = 'transparent');
    item.style.borderColor = '#007bff';
}

// Agregar evento de clic para las imágenes del carrusel
carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateSelectedImage(currentIndex);
    });
});

// Función para mover el carrusel a la izquierda
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateSelectedImage(currentIndex);
});

// Función para mover el carrusel a la derecha
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateSelectedImage(currentIndex);
});

// Inicializar con la primera imagen seleccionada
updateSelectedImage(currentIndex);
