const submenus = document.querySelectorAll(".submenu");

submenus.forEach((submenu) => {
  const parentLink = submenu.previousElementSibling;

  parentLink.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.classList.toggle("active");
  });
});

// Datos que deseas enviar al archivo PHP
const datosEnviar = {
  nombre: 'John',
  apellido: 'Doe',
  mail: 'johndoe@example.com',
  dni: '123456789',
  consulta: 'Consulta de ejemplo'
};

fetch('../../conexionbasededatos/funciones.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // Configuración de la cabecera CORS
  },
  body: JSON.stringify(datosEnviar)
})
.then(response => response.json())
.then(data => {
  // Manejar la respuesta del servidor
  console.log(data);
})
.catch(error => {
  // Manejar errores de la solicitud
  console.error(error);
});
