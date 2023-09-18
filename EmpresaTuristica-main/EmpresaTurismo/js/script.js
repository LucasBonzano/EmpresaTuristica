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

      // Desencadenar el evento personalizado "insert" después de la inserción
      var insertEvent = new Event("insert");
      formulario.dispatchEvent(insertEvent);
    })
    .catch(error => {
      console.error(error);
    });
  });

  formulario.addEventListener("update", (event) => {
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

    fetch('../../conexionbasededatos/update.php', {
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

      // Desencadenar el evento personalizado "update" después de la actualización
      var updateEvent = new Event("update");
      formulario.dispatchEvent(updateEvent);
    })
    .catch(error => {
      console.error(error);
    });
  });

  formulario.addEventListener("read", (event) => {
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

    fetch('../../conexionbasededatos/read.php', {
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

      // Desencadenar el evento personalizado "read" después de la lectura
      var readEvent = new Event("read");
      formulario.dispatchEvent(readEvent);
    })
    .catch(error => {
      console.error(error);
    });
  });

  formulario.addEventListener("delete", (event) => {
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

    fetch('../../conexionbasededatos/delete.php', {
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

      // Desencadenar el evento personalizado "delete" después de la eliminación
      var deleteEvent = new Event("delete");
      formulario.dispatchEvent(deleteEvent);
    })
    .catch(error => {
      console.error(error);
    });
  });
});
