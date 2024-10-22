// Obtener elementos del DOM
const formReserva = document.getElementById('form-reserva');
const listaReservas = document.getElementById('lista-reservas');

// Al enviar el formulario
formReserva.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const fecha = document.getElementById('fecha').value;

    // Crear un nuevo elemento de lista para mostrar la fecha de la reserva
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `Reservado para el ${fecha}`; // Solo se muestra la fecha

    // Añadir el nuevo elemento a la lista de reservas
    listaReservas.appendChild(li);

    // Limpiar el formulario después de enviar
    formReserva.reset();
});

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('personas').value;

    // Verificar si ya hay más de X reservas en esa fecha/hora
    const reservasPorHora = reservas.filter(reserva => reserva.fecha === fecha && reserva.hora === hora);
    if (reservasPorHora.length >= 5) { // Máximo de 5 reservas por hora
        alert('Este horario ya está lleno. Por favor elige otro.');
        return;
    }

    // Verificar si el número de personas excede el máximo permitido
    if (personas > 10) {
        alert('No puedes reservar para más de 10 personas.');
        return;
    }

    // Verificar si la fecha ya está reservada
    const reservaExistente = reservas.find(reserva => reserva.fecha === fecha && reserva.hora === hora);

    if (reservaExistente) {
        alert('Esta fecha y hora ya están reservadas. Por favor elige otro horario.');
    } else {
        // Agregar la nueva reserva al array
        const nuevaReserva = { nombre, fecha, hora, personas };
        reservas.push(nuevaReserva);

        // Guardar en LocalStorage
        localStorage.setItem('reservas', JSON.stringify(reservas));

        // Limpiar el formulario
        form.reset();

        // Actualizar la lista de reservas
        actualizarReservas();

        alert('Reserva realizada con éxito.');
    }
});

// Inicializar la lista de reservas al cargar la página
actualizarReservas();
