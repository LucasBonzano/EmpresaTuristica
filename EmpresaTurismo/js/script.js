document.addEventListener("DOMContentLoaded", function() {
    
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu) => {
      const parentLink = submenu.previousElementSibling;
      parentLink.addEventListener("click", (event) => {
          event.preventDefault();
          submenu.classList.toggle("active");
      });
  });

  const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const action = event.submitter.id;
      let method = 'POST'; 
      let endpoint = '../../conexionbasededatos/crud.php';

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

      switch (action) {
          case 'subir':
              method = 'POST';
              break;

          case 'read':
              method = 'GET';
              endpoint += `?mail=${encodeURIComponent(mail)}`;
              if (!mail) {
                  alert("El campo 'mail' es obligatorio al leer.");
                  return;
              }
              break;

          case 'delete':
              method = 'DELETE';
              if (!mail) {
                  alert("El campo 'mail' es obligatorio al eliminar.");
                  return;
              }
              break;

          case 'update':
              method = 'PUT';
              // Asegúrate de que el script PHP en el endpoint maneje el 'PUT' para 
              // verificar si el registro existe, y si no, para insertarlo.
              break;

          default:
              console.error("Acción desconocida:", action);
              return;
      }

      fetch(endpoint, {
          method: method,
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(datosEnviar)
      })
      .then(response => response.text())
      .then(data => {
          console.log(data);
          formulario.reset();
      })
      .catch(error => {
          console.error(error);
      });
  });

});
