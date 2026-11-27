/* =============================================================================
   DATOS DEL SITIO  —  este es el archivo que editas para actualizar la página.

   Aquí viven las NOTICIAS y las PUBLICACIONES. No hace falta tocar el HTML:
   guarda este archivo, súbelo a GitHub y el sitio se actualiza solo.

   Reglas rápidas
   - Cada elemento va entre llaves { ... } y termina con una coma.
   - Los textos van entre comillas dobles "así". Si el texto lleva comillas
     dobles adentro, escríbelas como \" .
   - El elemento más reciente va ARRIBA.
   - Dentro de un texto puedes usar:
        *cursiva*          **negrita**          [texto del enlace](https://...)
   - Si algo deja de verse después de editar, casi siempre falta una coma
     o una comilla. Compara con el elemento de arriba.
   ============================================================================= */

window.SITE_DATA = {

  /* Cómo aparece tu nombre en las listas de autores. Se pone en negrita solo. */
  me: ["E. Gironda Lagrava", "E. Gironda"],

  /* Correo que muestra el sitio (se arma por partes para esquivar spam). */
  email: { user: "esteban.gironda.l", domain: "gmail.com" },

  /* ---------------------------------------------------------------------------
     NOTICIAS
     date : "AAAA-MM" (por ejemplo "2026-11") o solo el año "2025".
     text : una o dos frases, en inglés.
     La página principal muestra las 6 primeras; el resto aparece con el botón
     "Show earlier news".

     Plantilla para copiar y pegar al inicio de la lista:

     { date: "2027-01", text: "Texto de la noticia con un [enlace](https://ejemplo.org)." },
     --------------------------------------------------------------------------- */
  news: [
    { date: "2026-12", text: "Heading to Buenos Aires for IEEE LAMC 2026 (December 9–11), where our paper on low-complexity digital predistortion of a 26 GHz transmitter will be presented as a poster." },
    { date: "2026-11", text: "The full text of my first-author LATINCOM 2026 paper, on characterizing mmWave components with a low-cost SDR platform, is now available: [read the paper (PDF)](files/Gironda_LATINCOM2026_mmWave_characterization.pdf)." },
    { date: "2026-11", text: "Presented two papers at IEEE LATINCOM 2026 in Cusco, Peru: my first-author paper on [characterizing mmWave components with a low-cost SDR platform](#pub-latincom2026-char), and our work on minimum-EVM power regulation of the 26 GHz chain." },
    { date: "2026-11", text: "First-author poster on [SAR tomography with fewer acquisitions](projects/tomosar.html) at the Escuela de Primavera en Deep Learning 2026." },
    { date: "2026-09", text: "Our poster on K-edge X-ray backscatter imaging was presented at STSIVA 2026 in Bucaramanga, Colombia." },
    { date: "2026-08", text: "Started working with Dr. Edgar Salazar on signal processing for SAR tomography and X-ray imaging, alongside my RF research." },
    { date: "2026-05", text: "Our paper on indirect multi-domain characterization of 25 GHz amplifiers was published at IEEE ISCAS 2026 (Shanghai) and is [available in IEEE Xplore](https://doi.org/10.1109/ISCAS66217.2026.11562694)." },
    { date: "2026-02", text: "Presented at IEEE LASCAS 2026 in Arequipa, Peru, where our group had two papers: the first version of the SDR testbed and a fuzzy-integral power controller for a 25 GHz transceiver." },
    { date: "2025-11", text: "Gave a talk at RIAO-OPTILAS 2025 in Santa Cruz de la Sierra, Bolivia, on how atmospheric conditions affect free-space optical links in a high-altitude city." },
    { date: "2025-09", text: "Joined Dr. Hugo Condori's group to work on low-cost characterization of mmWave 5G hardware." },
    { date: "2025", text: "First place nationally at Rally Solar Bolivia (Bicentennial edition) as leader of the electrical team of UPB's hybrid solar vehicle." },
  ],

  /* ---------------------------------------------------------------------------
     PUBLICACIONES  (se numeran solas, en el orden en que están aquí)

     id       : nombre corto y único, sin espacios. Sirve para enlazar: #pub-<id>
     type     : "conference"  -> sección "Conference papers"
                "poster"      -> sección "Posters and abstracts"
     status   : "published"   -> etiqueta Published (ya está en IEEE Xplore)
                "accepted"    -> etiqueta Accepted
                ""            -> sin etiqueta de estado
     first    : true si eres primer autor (etiqueta First author)
     kind     : "Oral" o "Poster" (opcional, etiqueta gris)
     project  : "mmwave", "tomosar", "xray" o "" . Con "mmwave" o "tomosar"
                la publicación aparece también en la subpágina del proyecto.
     authors  : autores en formato IEEE, tal como salen en el paper.
     title    : título, sin comillas.
     venue    : todo lo que va después del título en la cita IEEE.
                Pon la conferencia entre asteriscos para que salga en cursiva.
     doi      : solo el DOI (10.1109/...). Déjalo "" hasta que exista; cuando lo
                agregues aparece el enlace solo. Cambia entonces status a "published".
     links    : enlaces extra, por ejemplo un póster en PDF dentro de /files.

     Plantilla para copiar y pegar:

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
     --------------------------------------------------------------------------- */
  publications: [

    /* ----- Conference papers ----- */
    {
      id: "lamc2026",
      type: "conference",
      status: "accepted",
      first: false,
      kind: "Poster",
      project: "mmwave",
      authors: "J. P. Fernandez, B. R. Tiñini, J. C. Paredes, C. S. Mendieta, E. Gironda, and H. O. Condori",
      title: "Low-Complexity MP-DPD for FR2 Heterodyne Transmitters with Equal-Power Evaluation",
      venue: "accepted at *IEEE MTT-S Latin America Microw. Conf. (LAMC)*, Buenos Aires, Argentina, Dec. 2026",
      doi: "",
      links: [],
    },
    {
      id: "latincom2026-char",
      type: "conference",
      status: "accepted",
      first: true,
      kind: "Oral",
      project: "mmwave",
      authors: "E. Gironda Lagrava, J. P. Fernandez Moncada, B. R. Tiñini Chuquimia, C. S. Mendieta Villanueva, J. C. Paredes Condori, and H. O. Condori Quispe",
      title: "Characterization of Millimeter-Wave RF Components Using a Low-Cost SDR Platform for 5G NR Systems",
      venue: "in *Proc. IEEE Latin-American Conf. Commun. (LATINCOM)*, Cusco, Peru, Nov. 2026, to appear",
      doi: "",
      links: [{ label: "Full paper (PDF)", url: "files/Gironda_LATINCOM2026_mmWave_characterization.pdf" }],
    },
    {
      id: "latincom2026-evm",
      type: "conference",
      status: "accepted",
      first: false,
      kind: "Oral",
      project: "mmwave",
      authors: "J. P. Fernandez Moncada, B. R. Tiñini Chuquimia, C. S. Mendieta Villanueva, E. Gironda Lagrava, J. C. Paredes Condori, and H. O. Condori Quispe",
      title: "Minimum EVM Power Regulation of a Low-Cost 26 GHz SDR mmWave Chain with Sensor-Dominated Loop Dynamics for 5G Systems",
      venue: "in *Proc. IEEE Latin-American Conf. Commun. (LATINCOM)*, Cusco, Peru, Nov. 2026, to appear",
      doi: "",
      links: [],
    },
    {
      id: "iscas2026",
      type: "conference",
      status: "published",
      first: false,
      kind: "",
      project: "mmwave",
      authors: "R. Apaza Huanca, R. Garcia Escarzo, J. C. Paredes Condori, E. Gironda Lagrava, F. T. Pinto Rocha, and H. O. Condori Quispe",
      title: "Indirect Multi-Domain Characterization of 25 GHz 5G Amplifiers Using a Low-Cost SDR and IF-Loopback Testbed",
      venue: "in *Proc. IEEE Int. Symp. Circuits Syst. (ISCAS)*, Shanghai, China, May 2026, pp. 35–39",
      doi: "10.1109/ISCAS66217.2026.11562694",
      links: [],
    },
    {
      id: "lascas2026-testbed",
      type: "conference",
      status: "published",
      first: false,
      kind: "",
      project: "mmwave",
      authors: "R. Apaza Huanca, R. Garcia Escarzo, J. C. Paredes Condori, E. Gironda Lagrava, K. W. Gomez Orellana, and H. O. Condori Quispe",
      title: "A Low-Cost, SDR-Based Testbed for Multi-Domain Characterization of 5G NR Amplifier Chains",
      venue: "in *Proc. IEEE Latin Amer. Symp. Circuits Syst. (LASCAS)*, Arequipa, Peru, Feb. 2026, pp. 1–5",
      doi: "10.1109/LASCAS67804.2026.11457078",
      links: [],
    },
    {
      id: "lascas2026-fuzzy",
      type: "conference",
      status: "published",
      first: false,
      kind: "",
      project: "mmwave",
      authors: "K. W. Gomez Orellana, B. R. Tiñini Chuquimia, J. C. Paredes Condori, R. Apaza Huanca, E. Gironda Lagrava, and H. O. Condori Quispe",
      title: "Fuzzy-Integral Control for Adaptive Power Management in 25 GHz mmWave 5G Transceivers",
      venue: "in *Proc. IEEE Latin Amer. Symp. Circuits Syst. (LASCAS)*, Arequipa, Peru, Feb. 2026, pp. 1–5",
      doi: "10.1109/LASCAS67804.2026.11457097",
      links: [],
    },

    /* ----- Posters and abstracts ----- */
    {
      id: "tomosar2026",
      type: "poster",
      status: "",
      first: true,
      kind: "Poster",
      project: "tomosar",
      authors: "E. Gironda Lagrava, S. Aranibar, E. Salazar, and M. Barradas",
      title: "Tomographic SAR Reconstruction with Reduced Acquisitions via Knowledge Distillation",
      venue: "poster, *Escuela de Primavera en Deep Learning*, Nov. 2026 (in Spanish)",
      doi: "",
      links: [{ label: "Poster (PDF)", url: "files/poster-tomosar-2026.pdf" }],
    },
    {
      id: "stsiva2026",
      type: "poster",
      status: "",
      first: false,
      kind: "Poster",
      project: "xray",
      authors: "E. Salazar, T. Pinto, E. Gironda Lagrava, and M. Barradas",
      title: "K-Edge-Based X-Ray Compton Scattering Imaging for Effective Atomic Number Calculation in Through-Wall Inspections",
      venue: "poster, *XXVI Symp. Image, Signal Process. Artif. Vision (STSIVA)*, Bucaramanga, Colombia, Sep. 2026",
      doi: "",
      links: [{ label: "Poster (PDF)", url: "files/poster-kedge-xray-stsiva-2026.pdf" }],
    },
    {
      id: "riao2025",
      type: "poster",
      status: "",
      first: true,
      kind: "Oral",
      project: "",
      authors: "E. Gironda Lagrava and R. F. Sosa Santos",
      title: "Analysis of Atmospheric Factors in Free-Space Optical (FSO) Communications for High-Altitude Urban Environments in La Paz, Bolivia",
      venue: "oral presentation, *RIAO-OPTILAS 2025*, Santa Cruz de la Sierra, Bolivia, Nov. 2025",
      doi: "",
      links: [{ label: "Abstract book (PDF)", url: "https://riaof.org/wp-content/uploads/2026/02/RIAO-OPTILAS-2025-Program-Abstracts-Book-1.pdf" }],
    },
  ],
};
