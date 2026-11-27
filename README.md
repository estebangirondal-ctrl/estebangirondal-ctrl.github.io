# Sitio web académico de Esteban Gironda Lagrava

Sitio estático (HTML, CSS y un poco de JavaScript). No hay nada que compilar ni instalar: lo que está en esta carpeta es exactamente lo que se publica. Para verlo en tu computadora, abre `index.html` con doble clic.

## Qué hay en la carpeta

| Ruta | Qué es | ¿Lo editas? |
|---|---|---|
| `index.html` | Página principal: portada, About, News, Research, Publications, Awards, CV, Contact | Solo para cambiar textos fijos (bio, tarjetas de Research, premios) |
| `projects/mmwave-testbed.html` | Subpágina del testbed de 26 GHz | Solo para cambiar su texto |
| `projects/tomosar.html` | Subpágina de TomoSAR | Solo para cambiar su texto |
| `assets/js/data.js` | **Noticias y publicaciones** | **Sí, este es el archivo del día a día** |
| `assets/js/site.js`, `assets/css/style.css` | Lógica y diseño | No hace falta |
| `assets/img/` | Foto, figuras y fotos de conferencias (formato .webp) | Para agregar o cambiar imágenes |
| `files/` | CV y pósters en PDF | Para reemplazar el CV o subir PDF nuevos |

---

## 1. Publicarlo en GitHub Pages (una sola vez, unos 10 minutos)

No necesitas instalar Git; todo se hace desde el navegador.

1. Entra a <https://github.com> e inicia sesión.
2. Arriba a la derecha: **+** → **New repository**.
   - **Repository name:** `TU-USUARIO.github.io` (reemplaza `TU-USUARIO` por tu usuario exacto de GitHub, en minúsculas). Con ese nombre la dirección del sitio será `https://TU-USUARIO.github.io`.
   - Visibilidad: **Public**.
   - No marques "Add a README file".
   - Clic en **Create repository**.
3. En la página del repositorio vacío, haz clic en el enlace **uploading an existing file**.
4. Descomprime el zip en tu computadora. Abre la carpeta, selecciona **todo lo que hay adentro** (`index.html`, `assets`, `projects`, `files`, `README.md`) y arrástralo a la página de GitHub. Importante: arrastra el contenido, no la carpeta que lo envuelve; `index.html` tiene que quedar en la raíz del repositorio. Usa Chrome o Edge para que se suban también las subcarpetas.
5. Espera a que terminen de cargarse los archivos y haz clic en **Commit changes**.
6. Ve a **Settings** → **Pages** (menú izquierdo). En "Build and deployment", **Source:** `Deploy from a branch`; **Branch:** `main` y carpeta `/ (root)`; **Save**.
7. Espera uno o dos minutos y abre `https://TU-USUARIO.github.io`. En esa misma página de Settings → Pages aparece el enlace cuando está listo.

Notas:
- Si prefieres otro nombre de repositorio (por ejemplo `website`), todo funciona igual y la dirección será `https://TU-USUARIO.github.io/website/`. Los enlaces del sitio son relativos, así que no hay que cambiar nada.
- El archivo `.nojekyll` del zip es opcional. Si no se sube (en Mac y Linux es un archivo oculto), el sitio funciona igual.

### Paso opcional: vista previa al compartir el enlace

Para que LinkedIn, WhatsApp o el correo muestren tu foto al pegar el enlace, la imagen necesita la dirección completa. Cuando el sitio ya esté publicado, edita esta línea en `index.html` (está cerca del inicio):

```html
<meta property="og:image" content="assets/img/esteban-gironda.jpg">
```

y déjala así, con tu usuario:

```html
<meta property="og:image" content="https://TU-USUARIO.github.io/assets/img/esteban-gironda.jpg">
```

---

## 2. Editar un archivo en GitHub (sirve para todo lo que sigue)

1. En tu repositorio, navega hasta el archivo (por ejemplo `assets/js/data.js`).
2. Haz clic en el **lápiz** (Edit this file), arriba a la derecha del archivo.
3. Haz el cambio.
4. Clic en **Commit changes…** → **Commit changes**.
5. En uno o dos minutos el sitio se actualiza solo. Si no ves el cambio, recarga con Ctrl+F5.

---

## 3. Agregar una noticia

Edita `assets/js/data.js`. Busca la lista `news: [` y pega una línea nueva **al inicio** de la lista (la más reciente va arriba):

```js
{ date: "2027-01", text: "Our LATINCOM 2026 papers are now [available in IEEE Xplore](https://doi.org/10.1109/XXXX)." },
```

- `date`: año y mes (`"2027-01"`) o solo el año (`"2027"`).
- `text`: una o dos frases en inglés. Puedes usar `[texto](https://enlace)` para enlaces, `**negrita**` y `*cursiva*`.
- No olvides la coma al final de la línea.
- La portada muestra las 6 noticias más recientes; las demás aparecen con el botón "Show earlier news".

---

## 4. Agregar una publicación

En el mismo `assets/js/data.js`, busca `publications: [` y pega este bloque donde corresponda (los papers de conferencia arriba, la más reciente primero):

```js
{
  id: "conf2027-tema",
  type: "conference",
  status: "accepted",
  first: false,
  kind: "Oral",
  project: "mmwave",
  authors: "A. Autor, E. Gironda Lagrava, and B. Autor",
  title: "Title of the Paper",
  venue: "in *Proc. IEEE Some Conf. (ABBR)*, City, Country, Mon. 2027",
  doi: "",
  links: [],
},
```

| Campo | Qué poner |
|---|---|
| `id` | Nombre corto y único, sin espacios (por ejemplo `ims2027-dpd`) |
| `type` | `"conference"` (Conference papers) o `"poster"` (Posters and abstracts) |
| `status` | `"published"`, `"accepted"` o `""` (sin etiqueta) |
| `first` | `true` si eres primer autor (aparece la etiqueta First author) |
| `kind` | `"Oral"`, `"Poster"` o `""` |
| `project` | `"mmwave"` o `"tomosar"` para que aparezca también en esa subpágina; `"xray"` o `""` si no |
| `authors` | Autores en formato IEEE. Tu nombre se pone en negrita solo si está escrito como `E. Gironda Lagrava` o `E. Gironda` |
| `title` | Título, sin comillas |
| `venue` | Lo que va después del título en la cita IEEE; la conferencia entre asteriscos sale en cursiva |
| `doi` | Solo el DOI (`10.1109/...`). Vacío `""` mientras no exista |
| `links` | Enlaces extra, por ejemplo `[{ label: "Poster (PDF)", url: "files/mi-poster.pdf" }]` |

La numeración [1], [2], … y las citas dentro de las subpáginas se actualizan solas.

### Cuando un paper aceptado ya tiene DOI

En su bloque de `data.js`: escribe el DOI en `doi` y cambia `status` a `"published"`. Si quieres, quita `, to appear` del campo `venue`. El enlace DOI y la etiqueta Published aparecen solos. Esto aplica a los dos papers de LATINCOM 2026 y al de LAMC 2026.

---

## 5. Otras tareas frecuentes

**Actualizar el CV.** Sube el PDF nuevo a la carpeta `files/` con el mismo nombre, `Esteban_Gironda_CV.pdf` (en GitHub: entra a `files/` → **Add file** → **Upload files**). El CV que está publicado no tiene tu número de teléfono; expórtalo así también en las próximas versiones.

**Papers completos en PDF.** Solo se puede publicar tu versión aceptada (la que enviaste por PDF eXpress), nunca el PDF descargado de IEEE Xplore, y siempre con el aviso de copyright de IEEE en la primera página. `files/Gironda_LATINCOM2026_mmWave_characterization.pdf` ya lo tiene. Cuando salga el DOI, agrégalo en `data.js` como se explica arriba.

**Subir un póster o PDF.** Súbelo a `files/` y enlázalo desde `links` en la publicación correspondiente.

**Cambiar la portada (franja verde).** Está en `index.html`, en la sección marcada con `<!-- HERO -->`: nombre, frase principal, línea de afiliación, línea "Looking for…" y botones. Cambia solo el texto entre las etiquetas. La constelación de fondo es decorativa; no hace falta tocarla.

**Cambiar la bio, los intereses o "What I am looking for".** Están en `index.html`, en la sección marcada con `<!-- ABOUT -->`.

**Cambiar una imagen.** Las fotos y figuras del sitio vienen en varios tamaños (por ejemplo `latincom-2026-talk.webp`, `latincom-2026-talk-w360.webp`, `-w480`, `-w960`), y el atributo `srcset` del HTML le dice al navegador cuál usar según la pantalla. Así las miniaturas se ven nítidas y no pixeladas. Si reemplazas una de esas imágenes:
- o subes también las versiones `-w360`/`-w480`/`-w960` con el mismo contenido,
- o, más simple, borras los atributos `srcset="…"` y `sizes="…"` de esa `<img>` y dejas solo `src`.

Para una imagen nueva basta con `src`, pero súbela de un ancho cercano al doble del que ocupa en pantalla (unos 400–800 px para miniaturas). Una imagen mucho más grande que su recuadro es justo lo que se ve pixelado.

**Cambiar tu foto de perfil.** La portada usa `assets/img/esteban-gironda-300.webp` y `esteban-gironda-600.webp`: dos copias cuadradas de la misma foto, de 300 y 600 px. Reemplaza ambas (mismo nombre, recorte cuadrado con la cara centrada). `esteban-gironda.jpg` es la que aparece al compartir el enlace.

**Ver una foto o figura en grande.** Al hacer clic en una foto de conferencia o en una figura, se abre a tamaño completo sobre la página; se cierra con Esc, con el botón Close o haciendo clic fuera.

**Fecha del pie de página.** "Last updated November 2026" está al final de los tres archivos HTML.

---

## 6. Si algo se rompe

- **Las noticias o publicaciones desaparecieron:** casi siempre falta una coma o una comilla en `data.js`. Compara tu bloque con el de arriba. Si un texto lleva comillas dobles adentro, escríbelas como `\"`.
- **Para ver el error exacto:** abre el sitio, pulsa F12 → pestaña **Console**; indica la línea del problema.
- **Para deshacer un cambio:** en GitHub, abre el archivo → **History** → elige la versión anterior → copia su contenido y vuelve a guardarlo.
