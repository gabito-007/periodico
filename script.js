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
            const opcionSeleccionada = document.querySelector('input[name="plan"]:checked');

            if (opcionSeleccionada) {
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
            this.textContent = (this.textContent === '▶') ? '⏸' : '▶';
        });
    }

    // 4. CAMBIO DINÁMICO DE APARTADOS/PÁGINAS (SPA)
    const itemsMenu = document.querySelectorAll('.menu-item');
    const vistasContenido = document.querySelectorAll('.seccion-contenido');

    itemsMenu.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evitamos cualquier comportamiento extraño de enlaces

            // A) Intercambiar la clase active visual en los botones del menú
            document.querySelector('.menu-item.active')?.classList.remove('active');
            this.classList.add('active');

            // B) Obtener el ID del apartado que queremos abrir
            const paginaObjetivoId = this.getAttribute('data-target');

            // C) Ocultar la sección que estaba visible e iluminar la nueva
            document.querySelector('.seccion-contenido.active-view')?.classList.remove('active-view');
            
            const paginaObjetivo = document.getElementById(paginaObjetivoId);
            if (paginaObjetivo) {
                paginaObjetivo.classList.add('active-view');
            }

            // D) Si estamos en diseño móvil, colapsamos el menú de hamburguesa
            if (menu) {
                menu.classList.remove('activo');
            }
        });
    });
});
