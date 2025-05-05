document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    document.getElementById("formMsg").textContent = "¡Gracias por contactarnos!";
    this.reset();
  } else {
    document.getElementById("formMsg").textContent = "Por favor, completa todos los campos.";
    document.getElementById("formMsg").style.color = "red";
  }
});