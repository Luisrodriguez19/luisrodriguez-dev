document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var isValid = true;

    // Validar el campo de nombre
    if (!name.value) {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
      name.classList.add("is-valid");
    }

    // Validar el campo de correo electrónico
    if (!email.value || !email.validity.valid) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    // Validar el campo de mensaje
    if (!message.value) {
      message.classList.add("is-invalid");
      isValid = false;
    } else {
      message.classList.remove("is-invalid");
      message.classList.add("is-valid");
    }

    // Si todo es válido, enviar el mensaje
    if (isValid) {
      var mailtoLink = `mailto:tuemail@dominio.com?subject=Nuevo mensaje de ${name.value}&body=Nombre: ${name.value}%0AEmail: ${email.value}%0A%0AMensaje:%0A${message.value}`;
      window.location.href = mailtoLink;
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  });
