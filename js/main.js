document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');
    const icono = document.getElementById('barra');
  
    icono.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
    });
  });
  