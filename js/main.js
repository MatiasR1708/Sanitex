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