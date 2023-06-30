document.addEventListener("DOMContentLoaded", function() {
  const submenus = document.querySelectorAll(".submenu");

  submenus.forEach((submenu) => {
    const parentLink = submenu.previousElementSibling;

    parentLink.addEventListener("click", (event) => {
      event.preventDefault();
      submenu.classList.toggle("active");
    });
  });

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("mail").value;
    const dni = document.getElementById("dni").value;
    const consulta = document.getElementById("consulta").value;

    const datosEnviar = {
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      dni: dni,
      consulta: consulta
    };

    fetch('../../conexionbasededatos/funciones.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosEnviar)
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      formulario.reset(); // Restablecer el formulario después de enviar los datos
    })
    .catch(error => {
      console.error(error);
    });
  });
});
