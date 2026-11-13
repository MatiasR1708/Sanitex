const comparador = document.getElementById('comparador');
const control = document.getElementById('control-resultados');

if (comparador && control) {
  const actualizarComparador = () => {
    comparador.style.setProperty('--division', `${control.value}%`);
  };

  actualizarComparador();
  control.addEventListener('input', actualizarComparador);
}
 document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // 1. Abrir/Cerrar menú hamburguesa
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Manejar clics en los enlaces del menú móvil
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Cerrar el menú visualmente de inmediato
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }

            // Si el enlace apunta a un ancla interna (ej: #nosotros) y NO estamos en el index.html
            if (href.startsWith('#')) {
                const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
                
                if (!isIndexPage) {
                    // Si estamos en otra página, redirigir al index con el ancla
                    e.preventDefault();
                    window.location.href = 'index.html' + href;
                }
            }
        });
    });
});

/* Codigo para validaciones del fomrulario*/
    // Validación básica del formulario de solicitud de limpieza
    const formulario = document.getElementById('formulario-limpieza');

    if (formulario) {
        const campos = [
            {
                id: 'nombre',
                validar: (valor) => valor.trim().length >= 3,
                mensaje: 'Escribe tu nombre completo (mínimo 3 caracteres).'
            },
            {
                id: 'correo',
                validar: (valor, campo) => campo.validity.valid && valor.trim() !== '',
                mensaje: 'Escribe un correo electrónico válido.'
            },
            {
                id: 'telefono',
                validar: (valor) => {
                    const digitos = valor.replace(/\D/g, '');
                    return digitos.length === 10 ||
                        (digitos.length === 12 && digitos.startsWith('57'));
                },
                mensaje: 'Escribe un número colombiano válido de 10 dígitos; también puedes incluir +57.'
            },
            {
                id: 'tipo-servicio',
                validar: (valor) => valor !== '',
                mensaje: 'Selecciona el tipo de espacio.'
            },
            {
                id: 'detalles',
                validar: (valor) => valor.trim().length >= 10,
                mensaje: 'Cuéntanos un poco más (mínimo 10 caracteres).'
            }
        ];

        formulario.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            let primerCampoInvalido = null;

            campos.forEach(({ id, validar, mensaje }) => {
                const campo = document.getElementById(id);
                const error = document.getElementById(`error-${id}`);
                const esValido = validar(campo.value, campo);

                error.textContent = esValido ? '' : mensaje;
                error.classList.toggle('hidden', esValido);
                campo.setAttribute('aria-invalid', String(!esValido));

                if (!esValido && !primerCampoInvalido) {
                    primerCampoInvalido = campo;
                }
            });

            const estado = document.getElementById('estado-formulario');

            if (primerCampoInvalido) {
                estado.textContent = 'Revisa los campos indicados antes de continuar.';
                estado.classList.remove('hidden');
                primerCampoInvalido.focus();
                return;
            }

            estado.textContent = 'Enviando tu solicitud…';
            estado.classList.remove('hidden');

            const datos = new FormData(formulario);

            try {
                const respuesta = await fetch('https://formspree.io/f/xwlopwbk', {
                    method: 'POST',
                    body: datos,
                    headers: {
                        Accept: 'application/json'
                    }
                });
            
                if (respuesta.ok) {
                    estado.textContent = '¡Solicitud enviada! Gracias por contactar a Sanitex.';
                    formulario.reset();
                } else {
                    estado.textContent = 'No pudimos enviar la solicitud. Inténtalo de nuevo.';
                }
            } catch (error) {
                estado.textContent = 'Error de conexión. Revisa tu internet e inténtalo de nuevo.';
            }
        });

        campos.forEach(({ id }) => {
            const campo = document.getElementById(id);
            const error = document.getElementById(`error-${id}`);

            campo.addEventListener('input', () => {
                if (campo.getAttribute('aria-invalid') === 'true') {
                    error.textContent = '';
                    error.classList.add('hidden');
                    campo.removeAttribute('aria-invalid');
                }
            });

            campo.addEventListener('change', () => {
                if (campo.getAttribute('aria-invalid') === 'true') {
                    error.textContent = '';
                    error.classList.add('hidden');
                    campo.removeAttribute('aria-invalid');
                }
            });
        });
    }


// Selector de tema con preferencia persistente entre páginas.
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const darkIcon = themeToggle.querySelector('.theme-icon-dark');
    const lightIcon = themeToggle.querySelector('.theme-icon-light');
    const label = themeToggle.querySelector('span');

    const syncThemeControl = () => {
        const isDark = document.documentElement.classList.contains('dark');
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        if (label) label.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
        darkIcon?.classList.toggle('hidden', isDark);
        lightIcon?.classList.toggle('hidden', !isDark);
    };

    syncThemeControl();
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
            localStorage.setItem('sanitex-theme', isDark ? 'dark' : 'light');
        } catch (error) {
            // El cambio funciona durante esta visita aunque el almacenamiento esté bloqueado.
        }
        syncThemeControl();
    });
});
