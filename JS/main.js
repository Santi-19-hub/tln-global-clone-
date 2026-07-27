const boton = document.getElementById('menu-btn');

if(boton){
    boton.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('show');
    });
}


const banner = document.getElementById('cookie-banner');
const botonAceptar = document.getElementById('aceptar-cookies');

const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

console.log('valor:', cookiesAceptadas);

if (!cookiesAceptadas){
    banner.classList.remove('oculto');
}

if(botonAceptar){
    botonAceptar.addEventListener('click', () =>{

        console.log('click ejecutado');
        localStorage.setItem('cookiesAceptadas', 'true');

        banner.classList.add('oculto');

    });
}


const fotos = document.querySelectorAll('.slide');
const botonSiguiente= document.getElementById('btn-siguiente');
let IndiceActual = 0;



if(botonSiguiente){
    botonSiguiente.addEventListener('click',() => {

        fotos[IndiceActual].classList.remove('active');

        IndiceActual = IndiceActual + 1;

        if (IndiceActual === fotos.length){
        IndiceActual = 0;
        }

        fotos[IndiceActual].classList.add('active');

    });
}

const botonAnterior= document.getElementById('btn-Anterior');

if(botonAnterior){
    botonAnterior.addEventListener('click', () => {
    
        fotos[IndiceActual].classList.remove('active');

        IndiceActual = IndiceActual - 1;

        if (IndiceActual < 0){
        IndiceActual = fotos.length - 1;
        }

        fotos[IndiceActual].classList.add('active');
    })
}

const formContacto = document.getElementById('form-contacto');
if (formContacto){
    formContacto.addEventListener('submit', function(evento){
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        const numeroWhatsApp = "13462286410";
        const textoWhatsApp = `Hola, mi nombre es ${nombre}. Mi correo es ${correo}. Mensaje: ${mensaje}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

        window.open(urlWhatsApp, '_blank');
    });
}