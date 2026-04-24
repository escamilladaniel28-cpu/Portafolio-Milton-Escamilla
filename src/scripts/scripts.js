/*
    ARCHIVO: scripts.js
    Interactividad del portafolio:
    - Menú hamburguesa (mostrar/ocultar nav)
    - Mensaje de bienvenida en pantalla
    - Botón que cambia el texto de un párrafo
*/

/* ─── MENSAJE DE BIENVENIDA ─── */
window.onload = function () {

    /* Crear el mensaje de bienvenida en el DOM (sin alert) */
    const bienvenida = document.createElement("div");
    bienvenida.id = "bienvenida-msg";
    bienvenida.textContent = "👋 ¡Bienvenido a mi portafolio!";

    /* Estilos inline para el mensaje */
    bienvenida.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #e63946;
        color: #fff;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: bold;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: opacity 0.5s ease;
    `;

    /* Agregar al body */
    document.body.appendChild(bienvenida);

    /* Desaparecer después de 3 segundos */
    setTimeout(function () {
        bienvenida.style.opacity = "0";

        /* Eliminar del DOM después de la transición */
        setTimeout(function () {
            bienvenida.remove();
        }, 500);
    }, 3000);
};


/* ─── BOTÓN HAMBURGUESA ─── */
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

/* Verifica que existan antes de agregar el evento */
if (toggleBtn && menu) {

    /* Abrir / cerrar menú al hacer click */
    toggleBtn.addEventListener("click", function () {

        /* Activa o desactiva la clase active */
        menu.classList.toggle("active");
    });
}


/* ─── BOTÓN SEND — CAMBIA TEXTO DEL PÁRRAFO ─── */
const btnSend = document.getElementById("btn-send");
const heroDesc = document.getElementById("hero-descripcion");

/* Verifica que existan los elementos */
if (btnSend && heroDesc) {

    /* Guardar el texto original para alternar */
    const textoOriginal = heroDesc.textContent;
    let mostrandoMensaje = false;

    /* Al hacer click, cambia el texto del párrafo hero */
    btnSend.addEventListener("click", function () {

        if (!mostrandoMensaje) {
            /* Cambiar texto */
            heroDesc.textContent = "✅ ¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.";
            heroDesc.style.color = "#e63946";
            heroDesc.style.fontWeight = "bold";
            btnSend.textContent = "Volver";
            mostrandoMensaje = true;
        } else {
            /* Restaurar texto original */
            heroDesc.textContent = textoOriginal;
            heroDesc.style.color = "";
            heroDesc.style.fontWeight = "";
            btnSend.textContent = "Send";
            mostrandoMensaje = false;
        }
    });
}
