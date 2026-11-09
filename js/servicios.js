const comparador = document.getElementById('comparador');
const control = document.getElementById('control-resultados');

if (comparador && control) {
  const actualizarComparador = () => {
    comparador.style.setProperty('--division', `${control.value}%`);
  };

  actualizarComparador();
  control.addEventListener('input', actualizarComparador);
}