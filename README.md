# Baby De la Vega Delgado — on the way!

Sitio de una sola página con cuenta regresiva para el 10 de febrero de 2027.
HTML, CSS y JavaScript puros: no necesita build ni dependencias.

## Estructura

```
.
├── index.html      # marcado
├── css/styles.css  # estilos (desktop y móvil)
├── js/main.js      # cuenta regresiva + configuración
├── img/            # ilustraciones en PNG
└── README.md
```

## Personalizar

Abre `js/main.js` y edita el objeto `CONFIG`:

```js
const CONFIG = {
  fecha: '2027-02-10T00:00:00-06:00',   // -06:00 = hora del centro de México
  regalos: [
    { texto: 'LIVERPOOL', url: 'https://...' },
    { texto: 'CANTIA',    url: 'https://...' }
  ],
  textoEspera: 'Nazco aproximadamente en:',
  textoLlegada: '¡Ya estoy aquí!'
};
```

El nombre y los demás textos están en `index.html`.
Los colores están al inicio de `css/styles.css`:

| Variable  | Valor     | Uso                      |
|-----------|-----------|--------------------------|
| `--green` | `#D8DEBB` | fondo                    |
| `--cream` | `#F3E4CB` | capa del título          |
| `--ink`   | `#2F5B2C` | textos y botones         |

Tipografías: **Kurale** (contenido) y **Meow Script** (el nombre), cargadas desde
Google Fonts.

## Cómo funciona el escalado

Todo el diseño está construido sobre una unidad `--u`, donde `1u` equivale a
`1px` del diseño original (1440 × 1024 en escritorio, 402 × 990 en móvil).
La página completa crece o se encoge de forma proporcional, así que se ve igual
en cualquier pantalla.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio Baby De la Vega Delgado"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

## Publicar

**GitHub Pages:** en el repo, *Settings → Pages → Source: Deploy from a branch →
main / (root)*.

**Vercel:** entra a [vercel.com/new](https://vercel.com/new), importa el repo y
haz Deploy. Framework Preset **Other**, sin build command ni output directory.
