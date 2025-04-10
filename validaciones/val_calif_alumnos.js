// Función para mostrar mensajes dinámicos
function mostrarMensaje(texto, esExito) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.className = esExito ? 'mensaje-exito' : 'mensaje-error';
    mensaje.style.display = 'block';

    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000);
}
document.getElementById("btn-inicio").addEventListener("click", function() {
    window.location.href = "../Menu_inicio/inicio_Alumno.html";
});

// Datos simulados (como si fueran una base de datos)
const baseDatosCalificaciones = [
    {
        numeroControl: "20230001",
        estudiante: "Juan Pérez (20230001)",
        materia: "Matemáticas Avanzadas (MAT-101)",
        calificacion: "8.5",
        profesor: "Dra. María López"
    },
    {
        numeroControl: "20230045",
        estudiante: "Ana García (20230045)",
        materia: "Programación I (PROG-201)",
        calificacion: "9.2",
        profesor: "Dr. Carlos Martínez"
    }
];

// Función para buscar calificaciones
function buscarCalificacion() {
    const numeroControl = document.getElementById('numero_de_control').value.trim();

    // Validación básica
    if (!numeroControl) {
        mostrarMensaje("Por favor ingrese un número de control", false);
        return;
    }

    if (!/^\d+$/.test(numeroControl)) {
        mostrarMensaje("El número de control debe contener solo números", false);
        return;
    }

    // Buscar en la "base de datos"
    const resultado = baseDatosCalificaciones.find(calif => calif.numeroControl === numeroControl);

    const infoCalificacion = document.getElementById('info-calificacion');

    if (resultado) {
        // Mostrar los datos encontrados
        document.getElementById('info-estudiante').textContent = resultado.estudiante;
        document.getElementById('info-materia').textContent = resultado.materia;
        document.getElementById('info-calificacion-valor').textContent = resultado.calificacion;
        document.getElementById('info-profesor').textContent = resultado.profesor;

        infoCalificacion.style.display = 'block';
        mostrarMensaje("Información encontrada", true);
    } else {
        // Limpiar la información anterior
        document.getElementById('info-estudiante').textContent = "N/A";
        document.getElementById('info-materia').textContent = "N/A";
        document.getElementById('info-calificacion-valor').textContent = "N/A";
        document.getElementById('info-profesor').textContent = "N/A";

        infoCalificacion.style.display = 'none';
        mostrarMensaje("No se encontraron calificaciones para este número de control", false);
    }
}