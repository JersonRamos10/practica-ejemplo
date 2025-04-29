// Script para cambiar entre tema claro y oscuro
document.addEventListener('DOMContentLoaded', function() {
    const temaBtn = document.getElementById('cambiarTema');
    const body = document.body;

    // Verificar si hay un tema guardado en localStorage
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'dark') {
        body.classList.add('dark-theme');
    }

    // Evento para cambiar el tema
    temaBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Guardar preferencia del tema
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('tema', 'dark');
        } else {
            localStorage.setItem('tema', 'light');
        }
    });

    // Mostrar un mensaje de bienvenida en la consola
    console.log('¡Bienvenido a mi portfolio!');
});
