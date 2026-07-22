const boton = document.getElementById('menu-btn');
boton.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});


const banner = document.getElementById('cookie-banner');
const botonAceptar = document.getElementById('aceptar-cookies');

const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

console.log('valor:', cookiesAceptadas);

if (!cookiesAceptadas){
    banner.classList.remove('oculto');
}


botonAceptar.addEventListener('click', () =>{

    console.log('click ejecutado');
    localStorage.setItem('cookiesAceptadas', 'true');

    banner.classList.add('oculto');

});

const fotos = document.querySelectorAll('.slide');
const botonSiguiente= document.getElementById('btn-siguiente');
let IndiceActual = 0;

botonSiguiente.addEventListener('click',() => {

    fotos[IndiceActual].classList.remove('activo');

    IndiceActual = IndiceActual + 1;

    if (IndiceActual === fotos.length){
        IndiceActual = 0;
    }

    fotos[IndiceActual].classList.add('activo');

});

const botonAnterior= document.getElementById('btn-Anterior');

botonAnterior.addEventListener('click', () => {
    
    fotos[IndiceActual].classList.remove('activo');

    IndiceActual = IndiceActual - 1;

    if (IndiceActual < 0){
        IndiceActual = fotos.length - 1;
    }

    fotos[IndiceActual].classList.add('activo');
})