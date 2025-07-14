// Funciones globales para navegación
function irAPaginaAbundancia() {
    // Mostrar animación de carga antes de navegar
    mostrarAnimacionCarga();
    setTimeout(() => {
        // Ruta relativa desde maestre/index.html a pagina-ser--main/pagina-ser--main/index.html
        window.location.href = '../pagina/index.html';
    }, 1000);
}
function irAJuegoTangram() {
    // Mostrar animación de carga antes de navegar
    mostrarAnimacionCarga();
    setTimeout(() => {
        // Ruta relativa desde maestre/index.html a SER/SER/index2.html
        window.location.href = '../SER/SER/index (1).html';
    }, 1000);
}



// Clase principal para manejar la aplicación
class PortalDinamico {
    constructor() {
        this.usuarioActual = null;
        this.inicializar();
    }

    // Inicializar la aplicación
    inicializar() {
        this.configurarElementos();
        this.configurarEventos();
        this.verificarSesionExistente();
        this.iniciarAnimacionesParticulas();
    }

    // Configurar referencias a elementos DOM
    configurarElementos() {
        // Elementos principales
        this.pantallaInicio = document.getElementById('pantallaInicio');
        this.seccionAutenticacion = document.getElementById('seccionAutenticacion');
        this.seccionBienvenida = document.getElementById('seccionBienvenida');
        this.seccionOpciones = document.getElementById('seccionOpciones');
        this.contenedorFormulario = document.getElementById('contenedorFormulario');
        this.mensajeBienvenida = document.getElementById('mensajeBienvenida');
        this.botonComenzar = document.getElementById('botonComenzar');
        this.botonRegreso = document.getElementById('botonRegreso');
        this.contenedorNotificaciones = document.getElementById('contenedorNotificaciones');

        // Botones de navegación inicial
        this.botonIniciarSesion = document.getElementById('botonIniciarSesion');
        this.botonRegistrarse = document.getElementById('botonRegistrarse');
        this.botonRegresarAuth = document.getElementById('botonRegresarAuth');
        this.botonCerrarSesion = document.getElementById('botonCerrarSesion');

        // Modal de cerrar sesión
        this.modalCerrarSesion = document.getElementById('modalCerrarSesion');
        this.botonCancelarCierre = document.getElementById('botonCancelarCierre');
        this.botonConfirmarCierre = document.getElementById('botonConfirmarCierre');

        // Pestañas y formularios
        this.pestañas = document.querySelectorAll('.pestaña');
        this.formularios = document.querySelectorAll('.formulario');
        this.formularioLogin = document.getElementById('formularioIniciarSesion');
        this.formularioRegistro = document.getElementById('formularioRegistro');

        // Campos de formularios
        this.camposLogin = {
            usuario: document.getElementById('usuarioLogin'),
            contraseña: document.getElementById('contraseñaLogin')
        };
        
        this.camposRegistro = {
            usuario: document.getElementById('usuarioRegistro'),
            email: document.getElementById('emailRegistro'),
            contraseña: document.getElementById('contraseñaRegistro'),
            confirmar: document.getElementById('confirmarContraseña')
        };
    }

    // Configurar todos los eventos
    configurarEventos() {
        // Eventos de pestañas
        this.pestañas.forEach(pestaña => {
            pestaña.addEventListener('click', (e) => this.cambiarPestaña(e));
        });

        // Eventos de formularios
        this.formularioLogin.addEventListener('submit', (e) => this.manejarInicioSesion(e));
        this.formularioRegistro.addEventListener('submit', (e) => this.manejarRegistro(e));

        // Eventos de navegación inicial
        this.botonIniciarSesion.addEventListener('click', () => this.mostrarFormularioLogin());
        this.botonRegistrarse.addEventListener('click', () => this.mostrarFormularioRegistro());
        this.botonRegresarAuth.addEventListener('click', () => this.regresarAInicio());
        this.botonCerrarSesion.addEventListener('click', () => this.mostrarModalCerrarSesion());

        // Eventos del modal de cerrar sesión
        this.botonCancelarCierre.addEventListener('click', () => this.cerrarModalCerrarSesion());
        this.botonConfirmarCierre.addEventListener('click', () => this.confirmarCerrarSesion());
        this.modalCerrarSesion.addEventListener('click', (e) => {
            if (e.target === this.modalCerrarSesion) {
                this.cerrarModalCerrarSesion();
            }
        });

        // Eventos de botones principales
        this.botonComenzar.addEventListener('click', () => this.mostrarOpciones());
        this.botonRegreso.addEventListener('click', () => this.regresarDespuesLogin());

        // Eventos de animación en inputs
        this.configurarAnimacionesInputs();
    }

    // Configurar animaciones para inputs
    configurarAnimacionesInputs() {
        const todosInputs = document.querySelectorAll('input');
        todosInputs.forEach(input => {
            input.addEventListener('focus', (e) => {
                e.target.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', (e) => {
                e.target.parentElement.style.transform = 'scale(1)';
            });
        });
    }

    // Verificar si hay una sesión existente
    verificarSesionExistente() {
        const datosUsuario = localStorage.getItem('usuarioActual');
        if (datosUsuario) {
            try {
                this.usuarioActual = JSON.parse(datosUsuario);
                this.mostrarPantallaAutenticado();
            } catch (error) {
                console.error('Error al recuperar datos de usuario:', error);
                localStorage.removeItem('usuarioActual');
                this.mostrarPantallaInicial();
            }
        } else {
            this.mostrarPantallaInicial();
        }
    }

    // Mostrar pantalla inicial
    mostrarPantallaInicial() {
        this.pantallaInicio.classList.remove('oculto');
        this.seccionAutenticacion.classList.add('oculto');
        this.seccionBienvenida.classList.add('oculto');
        this.seccionOpciones.classList.add('oculto');
    }

    // Mostrar formulario de login
    mostrarFormularioLogin() {
        this.pantallaInicio.classList.add('oculto');
        this.seccionAutenticacion.classList.remove('oculto');
        this.seccionBienvenida.classList.add('oculto');
        this.seccionOpciones.classList.add('oculto');
        
        // Asegurar que está en la pestaña de login
        this.pestañas.forEach(pestaña => pestaña.classList.remove('activa'));
        this.formularios.forEach(formulario => formulario.classList.remove('activo'));
        
        const pestañaLogin = document.querySelector('[data-modo="iniciar-sesion"]');
        pestañaLogin.classList.add('activa');
        this.formularioLogin.classList.add('activo');
    }

    // Mostrar formulario de registro
    mostrarFormularioRegistro() {
        this.pantallaInicio.classList.add('oculto');
        this.seccionAutenticacion.classList.remove('oculto');
        this.seccionBienvenida.classList.add('oculto');
        this.seccionOpciones.classList.add('oculto');
        
        // Asegurar que está en la pestaña de registro
        this.pestañas.forEach(pestaña => pestaña.classList.remove('activa'));
        this.formularios.forEach(formulario => formulario.classList.remove('activo'));
        
        const pestañaRegistro = document.querySelector('[data-modo="registrarse"]');
        pestañaRegistro.classList.add('activa');
        this.formularioRegistro.classList.add('activo');
    }

    // Cambiar entre pestañas de login/registro
    cambiarPestaña(evento) {
        const pestañaClickeada = evento.target;
        const modo = pestañaClickeada.dataset.modo;

        // Actualizar pestañas activas
        this.pestañas.forEach(pestaña => pestaña.classList.remove('activa'));
        pestañaClickeada.classList.add('activa');

        // Mostrar formulario correspondiente
        this.formularios.forEach(formulario => formulario.classList.remove('activo'));
        
        if (modo === 'iniciar-sesion') {
            this.formularioLogin.classList.add('activo');
        } else {
            this.formularioRegistro.classList.add('activo');
        }

        // Limpiar campos
        this.limpiarFormularios();
    }

    // Manejar inicio de sesión
    async manejarInicioSesion(evento) {
        evento.preventDefault();
        
        const datosLogin = {
            usuario: this.camposLogin.usuario.value.trim(),
            contraseña: this.camposLogin.contraseña.value
        };

        // Validar campos
        if (!this.validarCamposLogin(datosLogin)) {
            return;
        }

        // Verificar credenciales
        if (this.verificarCredenciales(datosLogin)) {
            this.usuarioActual = this.obtenerDatosUsuario(datosLogin.usuario);
            localStorage.setItem('usuarioActual', JSON.stringify(this.usuarioActual));
            
            this.mostrarNotificacion('¡Bienvenido de vuelta!', 'exito');
            await this.animarTransicion(() => this.mostrarPantallaAutenticado());
        } else {
            this.mostrarNotificacion('Usuario o contraseña incorrectos', 'error');
            this.animarErrorFormulario(this.formularioLogin);
        }
    }

    // Manejar registro de usuario
    async manejarRegistro(evento) {
        evento.preventDefault();
        
        const datosRegistro = {
            usuario: this.camposRegistro.usuario.value.trim(),
            email: this.camposRegistro.email.value.trim(),
            contraseña: this.camposRegistro.contraseña.value,
            confirmar: this.camposRegistro.confirmar.value
        };

        // Validar todos los campos
        if (!this.validarCamposRegistro(datosRegistro)) {
            return;
        }

        // Verificar si el usuario ya existe
        if (this.usuarioExiste(datosRegistro.usuario)) {
            this.mostrarNotificacion('El usuario ya existe', 'error');
            this.animarErrorFormulario(this.formularioRegistro);
            return;
        }

        // Registrar nuevo usuario
        this.registrarNuevoUsuario(datosRegistro);
        this.usuarioActual = {
            usuario: datosRegistro.usuario,
            email: datosRegistro.email,
            fechaRegistro: new Date().toISOString()
        };
        
        localStorage.setItem('usuarioActual', JSON.stringify(this.usuarioActual));
        
        this.mostrarNotificacion('¡Registro exitoso! Bienvenido', 'exito');
        await this.animarTransicion(() => this.mostrarPantallaAutenticado());
    }

    // Validar campos de login
    validarCamposLogin(datos) {
        if (!datos.usuario) {
            this.mostrarNotificacion('Por favor ingresa tu usuario', 'advertencia');
            this.camposLogin.usuario.focus();
            return false;
        }
        
        if (!datos.contraseña) {
            this.mostrarNotificacion('Por favor ingresa tu contraseña', 'advertencia');
            this.camposLogin.contraseña.focus();
            return false;
        }
        
        return true;
    }

    // Validar campos de registro
    validarCamposRegistro(datos) {
        if (!datos.usuario) {
            this.mostrarNotificacion('Por favor ingresa un usuario', 'advertencia');
            this.camposRegistro.usuario.focus();
            return false;
        }
        
        if (datos.usuario.length < 3) {
            this.mostrarNotificacion('El usuario debe tener al menos 3 caracteres', 'advertencia');
            this.camposRegistro.usuario.focus();
            return false;
        }
        
        if (!datos.email) {
            this.mostrarNotificacion('Por favor ingresa tu correo electrónico', 'advertencia');
            this.camposRegistro.email.focus();
            return false;
        }
        
        if (!this.validarEmail(datos.email)) {
            this.mostrarNotificacion('Por favor ingresa un correo electrónico válido', 'advertencia');
            this.camposRegistro.email.focus();
            return false;
        }
        
        if (!datos.contraseña) {
            this.mostrarNotificacion('Por favor ingresa una contraseña', 'advertencia');
            this.camposRegistro.contraseña.focus();
            return false;
        }
        
        if (datos.contraseña.length < 6) {
            this.mostrarNotificacion('La contraseña debe tener al menos 6 caracteres', 'advertencia');
            this.camposRegistro.contraseña.focus();
            return false;
        }
        
        if (datos.contraseña !== datos.confirmar) {
            this.mostrarNotificacion('Las contraseñas no coinciden', 'advertencia');
            this.camposRegistro.confirmar.focus();
            return false;
        }
        
        return true;
    }

    // Validar formato de email
    validarEmail(email) {
        const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return patron.test(email);
    }

    // Verificar credenciales de usuario
    verificarCredenciales(datos) {
        const usuarios = this.obtenerUsuariosRegistrados();
        return usuarios.some(usuario => 
            usuario.usuario === datos.usuario && usuario.contraseña === datos.contraseña
        );
    }

    // Verificar si un usuario ya existe
    usuarioExiste(nombreUsuario) {
        const usuarios = this.obtenerUsuariosRegistrados();
        return usuarios.some(usuario => usuario.usuario === nombreUsuario);
    }

    // Obtener lista de usuarios registrados
    obtenerUsuariosRegistrados() {
        const usuarios = localStorage.getItem('usuariosRegistrados');
        return usuarios ? JSON.parse(usuarios) : [];
    }

    // Registrar nuevo usuario
    registrarNuevoUsuario(datos) {
        const usuarios = this.obtenerUsuariosRegistrados();
        usuarios.push({
            usuario: datos.usuario,
            email: datos.email,
            contraseña: datos.contraseña,
            fechaRegistro: new Date().toISOString()
        });
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
    }

    // Obtener datos completos de un usuario
    obtenerDatosUsuario(nombreUsuario) {
        const usuarios = this.obtenerUsuariosRegistrados();
        const usuario = usuarios.find(u => u.usuario === nombreUsuario);
        return usuario ? {
            usuario: usuario.usuario,
            email: usuario.email,
            fechaRegistro: usuario.fechaRegistro
        } : null;
    }

    // Mostrar pantalla de usuario autenticado
    mostrarPantallaAutenticado() {
        this.pantallaInicio.classList.add('oculto');
        this.seccionAutenticacion.classList.add('oculto');
        this.seccionBienvenida.classList.remove('oculto');
        this.seccionOpciones.classList.add('oculto');
        
        // Actualizar mensaje de bienvenida
        const nombreUsuario = this.usuarioActual.usuario;
        this.mensajeBienvenida.querySelector('h2').textContent = `¡Bienvenido ${nombreUsuario}!`;
        this.mensajeBienvenida.querySelector('p').textContent = 'Estás listo para comenzar tu aventura digital';
    }

    // Mostrar sección de opciones
    async mostrarOpciones() {
        await this.animarTransicion(() => {
            this.pantallaInicio.classList.add('oculto');
            this.seccionAutenticacion.classList.add('oculto');
            this.seccionBienvenida.classList.add('oculto');
            this.seccionOpciones.classList.remove('oculto');
        });
        
        // Animar cards individualmente
        this.animarCardsEntrada();
    }

    // Regresar a la pantalla de inicio (desde auth)
    async regresarAInicio() {
        await this.animarTransicion(() => {
            this.seccionAutenticacion.classList.add('oculto');
            this.pantallaInicio.classList.remove('oculto');
        });
        this.limpiarFormularios();
    }

    // Regresar después del login (desde opciones)
    async regresarDespuesLogin() {
        await this.animarTransicion(() => {
            this.seccionOpciones.classList.add('oculto');
            this.seccionBienvenida.classList.remove('oculto');
        });
    }

    // Animar entrada de cards
    animarCardsEntrada() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.8)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        });
    }

    // Animar transiciones suaves
    animarTransicion(callback) {
        return new Promise(resolve => {
            document.body.style.transform = 'scale(0.95)';
            document.body.style.opacity = '0.7';
            
            setTimeout(() => {
                callback();
                document.body.style.transform = 'scale(1)';
                document.body.style.opacity = '1';
                resolve();
            }, 300);
        });
    }

    // Animar error en formulario
    animarErrorFormulario(formulario) {
        formulario.style.animation = 'none';
        setTimeout(() => {
            formulario.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    }

    // Limpiar todos los formularios
    limpiarFormularios() {
        Object.values(this.camposLogin).forEach(campo => campo.value = '');
        Object.values(this.camposRegistro).forEach(campo => campo.value = '');
    }

    // Mostrar notificaciones
    mostrarNotificacion(mensaje, tipo = 'exito') {
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion ${tipo}`;
        
        const iconos = {
            exito: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            advertencia: 'fas fa-exclamation-triangle'
        };
        
        notificacion.innerHTML = `
            <i class="${iconos[tipo]}"></i>
            <span>${mensaje}</span>
        `;
        
        this.contenedorNotificaciones.appendChild(notificacion);
        
        // Auto-eliminar después de 4 segundos
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.style.animation = 'deslizarSalida 0.5s ease-out forwards';
                setTimeout(() => {
                    notificacion.remove();
                }, 500);
            }
        }, 4000);
    }

    // Mostrar modal de cerrar sesión
    mostrarModalCerrarSesion() {
        this.modalCerrarSesion.classList.remove('oculto');
        document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
    }

    // Cerrar modal de cerrar sesión
    cerrarModalCerrarSesion() {
        this.modalCerrarSesion.classList.add('oculto');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Confirmar cerrar sesión
    confirmarCerrarSesion() {
        localStorage.removeItem('usuarioActual');
        this.usuarioActual = null;
        this.limpiarFormularios();
        
        // Cerrar modal
        this.cerrarModalCerrarSesion();
        
        // Regresar a pantalla inicial con animación
        setTimeout(() => {
            this.pantallaInicio.classList.remove('oculto');
            this.seccionAutenticacion.classList.add('oculto');
            this.seccionBienvenida.classList.add('oculto');
            this.seccionOpciones.classList.add('oculto');
            
            this.mostrarNotificacion('Sesión cerrada correctamente', 'exito');
        }, 300);
    }

    // Iniciar animaciones de partículas
    iniciarAnimacionesParticulas() {
        // Crear partículas adicionales dinámicamente
        this.crearParticulasFlotantes();
    }

    // Crear partículas flotantes adicionales
    crearParticulasFlotantes() {
        const particulasFondo = document.querySelector('.particulas-fondo');
        
        for (let i = 0; i < 5; i++) {
            const particula = document.createElement('div');
            particula.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: radial-gradient(circle, rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05}) 0%, transparent 70%);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: flotarParticulas ${Math.random() * 10 + 15}s infinite linear;
                animation-delay: ${Math.random() * -20}s;
                pointer-events: none;
            `;
            particulasFondo.appendChild(particula);
        }
    }
}

// Funciones globales para navegación
function irAPagina() {
    // Mostrar animación de carga antes de navegar
    mostrarAnimacionCarga();
    setTimeout(() => {
        window.location.href = './PaginaPrincipal/index.html';
    }, 1000);
}

function irAJuego() {
    // Mostrar animación de carga antes de navegar
    mostrarAnimacionCarga();
    setTimeout(() => {
        window.location.href = './juego/ser/index(1).html';
    }, 1000);
}

function mostrarAnimacionCarga() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: aparecerOverlay 0.5s ease-out;
    `;
    
    overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: girar 1s linear infinite; margin: 0 auto 20px;"></div>
            <h3 style="font-size: 1.5rem; margin: 0;">Cargando...</h3>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Agregar estilos CSS adicionales para animaciones
const estilosAdicionales = document.createElement('style');
estilosAdicionales.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes deslizarSalida {
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes aparecerOverlay {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes girar {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(estilosAdicionales);

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.portalApp = new PortalDinamico();
    
    // Agregar evento para cerrar sesión (combinación de teclas Ctrl+L)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            if (window.portalApp.usuarioActual) {
                window.portalApp.mostrarModalCerrarSesion();
            }
        }
    });
});

// Manejar eventos de visibilidad para animaciones
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pausar animaciones cuando la página no es visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Reanudar animaciones cuando la página es visible
        document.body.style.animationPlayState = 'running';
    }
});
