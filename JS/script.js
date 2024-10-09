document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const appointmentDetails = `Has reservado una cita para el ${date} a las ${time}.`;
    
    document.getElementById('appointmentDetails').innerText = appointmentDetails;
    document.getElementById('confirmation').style.display = 'block'; // Muestra la confirmación
});