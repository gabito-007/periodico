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

    // 4. FUNCIONALIDAD DEL MENÚ (MARCAR ACTIVO Y CERRAR EN MÓVIL)
    const itemsMenu = document.querySelectorAll('.menu-item');

    itemsMenu.forEach(item => {
        item.addEventListener('click', function() {
            // 1. Quitamos la clase 'active' de cualquier otro botón anterior
            document.querySelector('.menu-item.active')?.classList.remove('active');
            
            // 2. Le agregamos 'active' (color azul) al botón presionado
            this.classList.add('active');

            // 3. Si estamos en móvil, cerramos el menú automáticamente al cambiar de sección
            if (menu) {
                menu.classList.remove('activo');
            }
        });
    });
});
