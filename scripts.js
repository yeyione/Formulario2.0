function handleSubmit(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const recibirNotificaciones = document.getElementById('notificaciones').checked ? 'Sí' : 'No';
    const metodoContacto = document.querySelector('input[name="contacto"]:checked').value;
    
    const opcionesSeleccionadas = Array.from(document.getElementById('opciones').selectedOptions).map(option => option.value).join(', ');
    const fechaSeleccionada = document.getElementById('fecha').value;
    
    alert(`Nombre: ${nombre}\nRecibir Notificaciones: ${recibirNotificaciones}\nMétodo de Contacto: ${metodoContacto}\nOpciones Seleccionadas: ${opcionesSeleccionadas}\nFecha Seleccionada: ${fechaSeleccionada}`);
    
}