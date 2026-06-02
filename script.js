document.addEventListener('DOMContentLoaded', () => {

    // 1. MENÚ HAMBURGUESA
    const hamburguesa = document.getElementById('hamburguesa');
    const menu = document.getElementById('menu');

    // Validación defensiva por si acaso el elemento no existe en alguna página
    if (hamburguesa && menu) {
        hamburguesa.addEventListener('click', () => {
            menu.classList.toggle('activo');
        });
    }

    // 2. BOTÓN VOTAR (Encuesta)
    const btnVotar = document.getElementById('btnVotar');

    if (btnVotar) {
        btnVotar.addEventListener('click', () => {
            // Modernización: Usamos querySelector para encontrar directamente la opción marcada
            const opcionSeleccionada = document.querySelector('input[name="plan"]:checked');

            if (opcionSeleccionada) {
                // Obtenemos el texto que acompaña al radio button limpiando espacios
                const respuestaText = opcionSeleccionada.parentElement.textContent.trim();
                alert(`¡Gracias por votar por: ${respuestaText}!`);
            } else {
                alert('Por favor, selecciona una opción antes de votar.');
            }
        });
    }

    // 3. REPRODUCTOR DE VIDEO
    const btnPlay = document.getElementById('btnPlay');

    if (btnPlay) {
        btnPlay.addEventListener('click', function() {
            // Alternamos el estado usando un operador ternario (más limpio que el if-else)
            this.textContent = (this.textContent === '▶') ? '⏸' : '▶';
        });
    }

    // 4. INTERCAMBIO DE CLASE ACTIVA EN EL MENÚ
    const itemsMenu = document.querySelectorAll('.menu-item');

    itemsMenu.forEach(item => {
        item.addEventListener('click', function(e) {
            // Opcional: Evita el salto brusco si usas enlaces vacíos "#"
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            // Quitamos la clase al que la tenga actualmente
            document.querySelector('.menu-item.active')?.classList.remove('active');
            
            // Se la asignamos al elemento clickeado
            this.classList.add('active');

            // Opcional: Cierra el menú hamburguesa automáticamente tras elegir sección en móvil
            menu?.classList.remove('activo');
        });
    });
});
