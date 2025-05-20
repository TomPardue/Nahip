document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Validar los campos del formulario
  const inputs = form.querySelectorAll("input");
  let isValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.reportValidity();
      isValid = false;
    }
  });

  if (!isValid) return;

  submitBtn.disabled = true;

  const formData = new FormData(form);

  // Reemplaza esta URL con la correcta si cambia
  fetch("https://script.google.com/macros/s/AKfycbzWg9a6NqjNdE0Dibx6qFqilvKVH7j_b_xeOejXDDKCDBTdXNKQLzN_ell6T_Xru1DWZw/exec", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert("¡Formulario enviado con éxito!");
        form.reset();
      } else {
        throw new Error("Error en el envío.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar el formulario.");
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
});