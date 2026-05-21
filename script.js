// CONTROL INTERACTIVO DEL BOCETO MULTIMEDIA
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interacción de la Encuesta
    const btnVotar = document.getElementById('btnVotar');
    if (btnVotar) {
        btnVotar.addEventListener('click', () => {
            const opciones = document.getElementsByName('plan');
            let seleccionado = false;
            let valorSeleccionado = '';

            for (const opcion of opciones) {
                if (opcion.checked) {
                    seleccionado = true;
                    valorSeleccionado = opcion.parentNode.textContent.trim();
                    break;
                }
            }

            if (seleccionado) {
                alert(`¡Voto registrado con éxito!\nElegiste: ${valorSeleccionado}\nGracias por participar en ZONE PORTAL.`);
            } else {
                alert('Por favor, selecciona una opción antes de votar.');
            }
        });
    }

    // 2. Control del Reproductor Multimedia (Video del Día)
    const btnPlay = document.getElementById('btnPlay');
    if (btnPlay) {
        btnPlay.addEventListener('click', function() {
            if (this.textContent === '▶') {
                this.textContent = '⏸';
                this.style.backgroundColor = '#e67e22';
            } else {
                this.textContent = '▶';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    }

    // 3. Manejo de estados activos del Menú Lateral
    const itemsMenu = document.querySelectorAll('.menu-item');
    itemsMenu.forEach(item => {
        item.addEventListener('click', function() {
            itemsMenu.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});