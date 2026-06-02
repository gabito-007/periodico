document.addEventListener('DOMContentLoaded', () => {

    // 1. MENÚ HAMBURGUESA
    const hamburguesa = document.getElementById('hamburguesa');
    const menu = document.getElementById('menu');

    if (hamburguesa && menu) {
        hamburguesa.addEventListener('click', () => {
            menu.classList.toggle('activo');
        });
    }

    // 2. BOTÓN VOTAR (Encuesta)
    const btnVotar = document.getElementById('btnVotar');

    if (btnVotar) {
        btnVotar.addEventListener('click', () => {
            // Buscamos directamente el radio button seleccionado usando selectores avanzados
            const opcionSeleccionada = document.querySelector('input[name="plan"]:checked');

            if (opcionSeleccionada) {
                // Obtenemos el texto de la etiqueta contenedora eliminando espacios adicionales
                const respuestaText = opcionSeleccionada.parentElement.textContent.trim();
                alert(`¡Gracias por votar por: ${respuestaText}!`);
            } else {
                alert('Por favor, selecciona una opción antes de votar.');
            }
        });
    }

    // 3. REPRODUCTOR DE VIDEO (Play / Pause toggle)
    const btnPlay = document.getElementById('btnPlay');

    if (btnPlay) {
        btnPlay.addEventListener('click', function() {
            // Un operador ternario alterna el símbolo de reproducción de manera limpia
            this.textContent = (this.textContent === '▶') ? '⏸' : '▶';
        });
    }

    // 4. INTERCAMBIO DE CLASE ACTIVA EN EL MENÚ
    const itemsMenu = document.querySelectorAll('.menu-item');

    itemsMenu.forEach(item => {
        item.addEventListener('click', function(e) {
            // Evita saltos molestos del navegador al usar href="#"
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            // Remueve la clase del enlace que la tenga activa actualmente
            document.querySelector('.menu-item.active')?.classList.remove('active');
            
            // Se le asigna la clase al enlace clickeado
            this.classList.add('active');

            // Cierra el menú automáticamente en el diseño móvil al hacer click en una sección
            menu?.classList.remove('activo');
        });
    });
});
