document.addEventListener("DOMContentLoaded", function() {
  const submenus = document.querySelectorAll(".submenu");

  submenus.forEach((submenu) => {
    const parentLink = submenu.previousElementSibling;

    parentLink.addEventListener("click", (event) => {
      event.preventDefault();
      submenu.classList.toggle("active");
    });
  });

  var formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var mail = document.getElementById("mail").value;
    var dni = document.getElementById("dni").value;
    var consulta = document.getElementById("consulta").value;

    var datosEnviar = {
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      dni: dni,
      consulta: consulta
    };

    // Verificar si el botón presionado es "Eliminar"
    if (event.submitter.id === "delete") {
      // Verificar si el campo "mail" está vacío
      if (!mail) {
        alert("El campo 'mail' es obligatorio al eliminar.");
        return; // Evitar que se envíe la solicitud si falta el campo "mail"
      }
    }

    // Realizar la solicitud correspondiente al botón presionado
    fetch('../../conexionbasededatos/insert.php', {
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

  // Resto del código para los botones "Leer" y "Actualizar"
  // ...

  // Lógica para el botón "Eliminar"
  document.getElementById("delete").addEventListener("click", () => {
    // Verificar si el campo "mail" está vacío
    var mail = document.getElementById("mail").value;
    if (!mail) {
      alert("El campo 'mail' es obligatorio al eliminar.");
      return; // Evitar que se envíe la solicitud si falta el campo "mail"
    }

    // Realizar la solicitud correspondiente al botón "Eliminar"
    fetch('../../conexionbasededatos/crud.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mail: mail }) // Enviar solo el campo "mail"
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      formulario.reset(); // Restablecer el formulario después de eliminar
    })
    .catch(error => {
      console.error(error);
    });
  });
});
