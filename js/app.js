// =======================================================
 // RETO 1: MODO OSCURO INTERACTIVO
 // =======================================================

 // 1. SELECCIÓN DE ELEMENTOS DEL DOM
 // busca un id en el HTML osea un documento unico le pasamos el 'btn-toggle-tema' prque es el identificador unico deel boton
 const btnTema = document.getElementById('btn-toggle-tema');

 // para seleccioner el body de manera directa sin tener que usar un getElementById
 const body = document.body;

 // 2. MANEJO DE EVENTOS[cite: 2]
 // para qeu cuando el usuario haga click en el boton este realice su funcion
 btnTema.addEventListener('click', function() {

 // [Comentario obligatorio: Explica qué hace exactamente el método classList.toggle('tema-oscuro')]

 body.classList.toggle('tema-oscuro');

 // Cambiar el texto del botón dependiendo del estado
 if (body.classList.contains('tema-oscuro')) {
 btnTema.textContent = "☀️ Modo Claro";
 } else {
 btnTema.textContent = "🌙 Modo Oscuro";
 }
 });


 // =======================================================
 // RETO 2: SALUDO DINÁMICO
 // =======================================================

 // 1. SELECCIÓN DEL CONTENEDOR[cite: 2]
 const textoSaludo = document.getElementById('saludo-tiempo-real');

 // 2. LÓGICA DE TIEMPO
 const fechaActual = new Date();
 const horaActual = fechaActual.getHours();
 let mensaje = "";

 if (horaActual >= 6 && horaActual < 12) {
 mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
 } else if (horaActual >= 12 && horaActual < 18) {
 mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
 } else {
 mensaje = "¡Buenas noches! Descubre mi trabajo.";
 }

 // 3. INYECCIÓN EN EL DOM[cite: 2]
 // el text.Content devuelve texto plano lo que significa que si se busca una etiqueta este devolvera texto plano mientras que el inner.HTML devuelve los elementos lo que significa que el navegador interpretara los elemnto de el codigo
 textoSaludo.textContent = mensaje;