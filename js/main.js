/* ==========================================================================
   CONFIGURACIÓN — lo único que necesitas editar
   ========================================================================== */

const CONFIG = {
  // Fecha estimada de nacimiento.
  // Formato: AAAA-MM-DDTHH:MM:SS-06:00  (-06:00 = hora del centro de México)
  fecha: '2027-02-10T00:00:00-06:00',

  // Mesas de regalos (el texto del botón y su liga)
  regalos: [
    { texto: 'LIVERPOOL', url: 'https://mesaderegalos.liverpool.com.mx/' },
    { texto: 'CANTIA',    url: 'https://www.cantia.mx/' }
  ],

  // Textos
  textoEspera: 'Nazco aproximadamente en:',
  textoLlegada: '¡Ya estoy aquí!'
};

/* ========================================================================== */

const objetivo = new Date(CONFIG.fecha);

const $ = (id) => document.getElementById(id);
const nodos = {
  dias: $('days'),
  horas: $('hours'),
  minutos: $('minutes'),
  lead: $('lead'),
  sr: $('srCount')
};

// Botones de mesas de regalos
CONFIG.regalos.forEach((regalo, i) => {
  const boton = $('gift' + (i + 1));
  if (!boton) return;
  boton.textContent = regalo.texto;
  boton.href = regalo.url;
  boton.setAttribute('aria-label', 'Mesa de regalos en ' + regalo.texto);
});

const dosDigitos = (n) => String(n).padStart(2, '0');

let ultimoResumen = '';

function actualizar() {
  const restante = objetivo - new Date();

  if (restante <= 0) {
    nodos.dias.textContent = '0';
    nodos.horas.textContent = '00';
    nodos.minutos.textContent = '00';
    nodos.lead.textContent = CONFIG.textoLlegada;
    nodos.sr.textContent = CONFIG.textoLlegada;
    clearInterval(intervalo);
    return;
  }

  const segundos = Math.floor(restante / 1000);
  const dias = Math.floor(segundos / 86400);
  const horas = Math.floor(segundos / 3600) % 24;
  const minutos = Math.floor(segundos / 60) % 60;

  nodos.dias.textContent = String(dias);
  nodos.horas.textContent = dosDigitos(horas);
  nodos.minutos.textContent = dosDigitos(minutos);

  // Resumen para lectores de pantalla (se anuncia por minuto, no por segundo)
  const resumen = `Faltan ${dias} días, ${horas} horas y ${minutos} minutos.`;
  if (resumen !== ultimoResumen) {
    nodos.sr.textContent = resumen;
    ultimoResumen = resumen;
  }
}

actualizar();
const intervalo = setInterval(actualizar, 1000);

// Recalcula al volver a la pestaña
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) actualizar();
});
