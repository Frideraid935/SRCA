document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const botonesFormulario = document.querySelectorAll(".btn");
    const formularioRegistro = document.getElementById("formulario-registro");
    const formularioActualizar = document.getElementById("formulario-actualizar");
    const formularioBusqueda = document.getElementById("form-buscar");
    const formularioEliminar = document.getElementById("form-eliminar");

    // Manejador para cambiar de formulario cuando se selecciona un menú
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            // Eliminar la clase 'active' de todos los elementos del menú
            menuItems.forEach(i => i.classList.remove("active"));
            // Agregar la clase 'active' al botón seleccionado
            item.classList.add("active");

            const formId = item.getAttribute("data-form");
            mostrarFormulario(formId);
        });
    });

    // Mostrar el formulario correspondiente
    function mostrarFormulario(formId) {
        // Ocultar todos los formularios
        document.querySelectorAll(".contenedor-formulario").forEach(form => {
            form.classList.remove("active");
        });
        // Mostrar el formulario correspondiente
        const form = document.getElementById(`form-${formId}`);
        if (form) {
            form.classList.add("active");
        }
    }

    // Función para validar los campos del formulario de registro
    function validarFormularioRegistro() {
        const campos = formularioRegistro.querySelectorAll("input");
        for (let campo of campos) {
            if (!campo.value) {
                mostrarMensaje("Por favor, complete todos los campos.", "error", "mensaje-registro");
                return false;
            }
        }
        return true;
    }

    // Función para mostrar mensajes de éxito o error
    function mostrarMensaje(mensaje, tipo, idMensaje) {
        const mensajeElement = document.getElementById(idMensaje);
        mensajeElement.textContent = mensaje;
        mensajeElement.className = tipo === "error" ? "mensaje error" : "mensaje exito";
    }

    // Función para manejar el envío del formulario de registro
    formularioRegistro.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío real del formulario
        if (validarFormularioRegistro()) {
            mostrarMensaje("Alumno registrado correctamente.", "exito", "mensaje-registro");
            formularioRegistro.reset();
        }
    });

    // Manejador para la búsqueda de alumnos
    document.getElementById("btn-buscar").addEventListener("click", function () {
        const numeroControl = document.getElementById("busqueda-numero").value;
        if (numeroControl) {
            // Simulando una búsqueda, normalmente se realizaría una llamada a un servidor
            mostrarDatosAlumno(numeroControl);
        } else {
            mostrarMensaje("Por favor, ingrese el número de control.", "error", "mensaje-busqueda");
        }
    });

    // Mostrar los datos de un alumno simulado
    function mostrarDatosAlumno(numeroControl) {
        const resultadosBusqueda = document.getElementById("resultados-busqueda");
        const datosAlumno = document.getElementById("datos-alumno");
        
        // Simulando una respuesta de búsqueda
        resultadosBusqueda.style.display = "block";
        datosAlumno.textContent = `Alumno encontrado con número de control: ${numeroControl}`;
    }

    // Manejador para el formulario de actualización
    document.getElementById("btn-buscar-actualizar").addEventListener("click", function () {
        const numeroControl = document.getElementById("actualizar-numero").value;
        if (numeroControl) {
            mostrarFormularioActualizar(numeroControl);
        } else {
            mostrarMensaje("Por favor, ingrese el número de control.", "error", "mensaje-actualizar");
        }
    });

    // Mostrar el formulario para actualizar datos
    function mostrarFormularioActualizar(numeroControl) {
        // Lógica para llenar los datos del formulario con la información del alumno
        formularioActualizar.style.display = "block";
        formularioActualizar.querySelector("input").value = numeroControl;
    }

    // Manejador para la eliminación de alumno
    document.getElementById("btn-confirmar-eliminar").addEventListener("click", function () {
        const numeroControl = document.getElementById("eliminar-numero").value;
        if (numeroControl) {
            // Simulando la eliminación, normalmente se realizaría una llamada a un servidor
            mostrarMensaje("Alumno eliminado correctamente.", "exito", "mensaje-eliminar");
        } else {
            mostrarMensaje("Por favor, ingrese el número de control para eliminar.", "error", "mensaje-eliminar");
        }
    });

    // Manejo de la acción de limpiar el formulario de registro
    botonesFormulario.forEach(boton => {
        if (boton.type === "reset") {
            boton.addEventListener("click", () => {
                mostrarMensaje("Formulario limpiado correctamente.", "exito", "mensaje-registro");
            });
        }
    });

    // Mostrar el formulario de inicio
    document.getElementById("btn-inicio").addEventListener("click", function() {
        window.location.href = "../Menu_inicio/inicio_Admin.html";
    });
});
