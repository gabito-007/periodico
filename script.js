document.addEventListener('DOMContentLoaded', () => {

    // MENÚ HAMBURGUESA

    const hamburguesa = document.getElementById('hamburguesa');

    const menu = document.getElementById('menu');

    hamburguesa.addEventListener('click', () => {

        menu.classList.toggle('activo');

    });

    // BOTÓN VOTAR

    const btnVotar = document.getElementById('btnVotar');

    if(btnVotar){

        btnVotar.addEventListener('click', () => {

            const opciones = document.getElementsByName('plan');

            let seleccionado = false;

            for(const opcion of opciones){

                if(opcion.checked){

                    seleccionado = true;

                }

            }

            if(seleccionado){

                alert('¡Gracias por votar!');

            }else{

                alert('Selecciona una opción.');

            }

        });

    }

    // VIDEO

    const btnPlay = document.getElementById('btnPlay');

    if(btnPlay){

        btnPlay.addEventListener('click', function(){

            if(this.textContent === '▶'){

                this.textContent = '⏸';

            }else{

                this.textContent = '▶';

            }

        });

    }

    // MENÚ ACTIVO

    const itemsMenu = document.querySelectorAll('.menu-item');

    itemsMenu.forEach(item => {

        item.addEventListener('click', function(){

            itemsMenu.forEach(i => i.classList.remove('active'));

            this.classList.add('active');

        });

    });

});
