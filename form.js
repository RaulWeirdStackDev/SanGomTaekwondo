(function () {
  emailjs.init("wd6ZonPXTe18zquur"); // Reemplaza con tu User ID de EmailJS
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_uesw35q", "template_kwf6cvp", this).then(
      function () {
        alert("¡Correo enviado con éxito!");

        // Limpiar el formulario después de enviar
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Error al enviar: " + JSON.stringify(error));
      }
    );
  });


