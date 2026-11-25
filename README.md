# App auditories

Aplicació web (Quasar 1 / Vue 2) per fer **auditories internes DTIC als centres** amb una check list. Funciona del tot al navegador: les dades es guarden a `localStorage` i es poden exportar o importar en JSON. A partir de les respostes, genera el PDF de la check list (plantilla v.14) i proposa frases per a l'informe.

## Requisits i posada en marxa

- Node.js i npm (`engines`: node >= 8.9). El projecte fa servir `@quasar/app` 1.x (webpack 4).
- Quasar CLI (ja és a les dependències; també es pot fer servir amb `npx quasar`).

```bash
npm install
```

| Acció | Ordre |
| --- | --- |
| Desenvolupament (hot reload, obre el navegador) | `npm run dev` |
| Build de producció (sortida a `dist/spa`) | `npm run build` |

Els scripts de `package.json` posen `NODE_OPTIONS=--openssl-legacy-provider` perquè webpack 4 funcioni amb Node 17 o posterior. Tingueu en compte que:

- La sintaxi `VAR=valor ordre` només funciona en shells POSIX (Git Bash, Linux, macOS). En PowerShell o cmd, cal executar `quasar dev` / `quasar build` directament (o `npx quasar dev`) i, si cal, definir abans la variable (`$env:NODE_OPTIONS="--openssl-legacy-provider"`).
- Amb Node 16 o anterior aquesta opció no existeix: n'hi ha prou amb `npx quasar dev` / `npx quasar build`, sense la variable.

## Ús de l'aplicació

### Llistat d'auditories (`/`)

Pantalla inicial. Carrega les auditories de `localStorage` (clau `keyArrAuditories`) i permet crear-ne una de nova, editar-la o eliminar-la. El menú lateral dona accés a:

| Opció | Ruta | Què fa |
| --- | --- | --- |
| Importar | `/importar` | Enganxar el JSON d'un fitxer exportat i carregar-lo. Afegeix a les auditories antigues les propietats noves de la plantilla actual. |
| Exportar | `/exportar` | Mostra el JSON (de totes les auditories o d'una sola) per copiar-lo. |
| Apunts | `/apunts` | Notes generals per a l'auditor. |
| Substituir auditoria | `/carregarAuditoria` | Reemplaça l'objecte d'una auditoria pel JSON enganxat. |
| Proves | `/proves` | Pàgina de proves (desenvolupament). |

> Importar només modifica les dades en memòria. Després cal **desar** (icona de disquet) perquè quedin a `localStorage`.

### Edició d'una auditoria (`/auditoria/...`)

Fa servir `AuditoriaLayout`, amb una pestanya per a cada apartat de la check list:

| Pestanya | Ruta | Contingut |
| --- | --- | --- |
| Info | `/auditoria/informacio` | Dades del centre i informació prèvia |
| Instal. 1 | `/auditoria/instalacions1` | Sala de comunicacions: accés, proveïdor WAN, SAI, racks |
| Instal. 2 | `/auditoria/instalacions2` | LAN/Wi-Fi, pendrives/telemedicina, llocs de treball |
| CU | `/auditoria/cu` | Comunicacions unificades |
| Seguridad | `/auditoria/seguretat` | Seguretat de la informació i del centre |
| Formación | `/auditoria/formacio` | Formació |
| Valoraciones | `/auditoria/valoracions` | Valoracions de l'usuari i del tècnic |
| Acciones Mejora | `/auditoria/accionsMillora` | Observacions i no conformitats |

El menú lateral també ofereix:

- **CheckList PDF** (`/auditoria/checkList`): genera el PDF de la check list v.14. Hi ha una opció antiga basada en pdfmake (`/auditoria/pdf`), que està desactivada al menú.
- **Frases Informe** (`/auditoria/frases`): proposa frases per a l'informe segons les respostes.
- **Guardar**: desa totes les auditories a `localStorage`.

## Estructura del projecte

```
src/
├── App.vue, index.template.html   # index.template.html carrega scripts globals (pdfmake, pdfkit, pàgines checklist)
├── boot/axios.js                  # registra $axios (no s'usa per a dades: l'app no té backend)
├── router/routes.js               # rutes (vegeu les taules anteriors)
├── layouts/
│   ├── MyLayout.vue               # layout general (llistat, importar, exportar...)
│   └── AuditoriaLayout.vue        # layout d'edició amb pestanyes
├── pages/
│   ├── Index.vue, importar.vue, exportar.vue, apunts.vue, carregarAuditoria.vue, proves.vue
│   ├── checkList.vue              # generador del PDF v.14
│   ├── auditoria/                 # un fitxer per apartat de la check list
│   ├── pdfMake/, pdfMake2/        # generador PDF antic amb pdfmake (definicions de document dd0X_*.js)
├── components/                    # camps de formulari reutilitzables (inputSiNo, inputText, inputData,
│                                  #   inputOpcions*, inputCheckBox, inputSiNoObsrv), títols, rack, ajudes
├── store/
│   └── modul-auditoria/           # mòdul Vuex amb namespace `mAuditoria`
│       ├── _plantillaAuditoria.js # PLANTILLA (v.14) de l'objecte auditoria
│       ├── _plantillaRack.js      # plantilla d'un rack (sala de comunicacions)
│       ├── old/                   # plantilles v.13
│       └── state / mutations / actions / getters
└── statics/
    ├── js/_informeFrases.js       # regles per proposar frases de l'informe
    ├── js/_biblia.js              # textos d'ajuda (icona "i") de cada punt
    ├── js/pdfmake*, vfs_fonts.js  # pdfmake (generador antic)
    └── checkList/
        ├── paginesJPG/            # 15 pàgines de la plantilla de la check list en imatge
        ├── paginesJS/paginaXX.js  # pinten les respostes sobre cada pàgina, per coordenades
        ├── clases.js              # primitives de dibuix (cercle, quadrat...)
        └── pdfkit.standalone.js, blob-stream.js, canvas2pdf.js
```

## Funcionament intern

### Model de dades

- `state.auditories` és un array d'objectes auditoria. Cada auditoria nova es crea com a còpia profunda de `_plantillaAuditoria.js`, i `state.indexArrAuditories` indica quina s'està editant.
- Blocs principals de la plantilla: `dadesCentre`, `tareasRequeridas`, `instalacionsComunicacions` (sala, llocs de treball, LAN, firma biomètrica, gestió de torns...), `comunicacionsUnificades`, `seguretatInformacio`, `formacio`, `valoracions` i `accionsMillora`.
- A `src/statics/rutes objecte dades.txt` hi ha una llista (parcial i antiga) de les rutes de propietats.

### Camps de formulari

Els components `input*` reben `arrCamps`, que és la ruta de la propietat com a string d'array (p. ex. `"['dadesCentre', 'nomCentre']"`). En canviar el valor, fan `commit('mAuditoria/updateCamp', { arrProps, valor, objRack })`, que l'escriu a l'auditoria activa o, si es passa `objRack`, al rack corresponent. Fent doble clic a l'etiqueta, el valor torna a `null`.

### Afegir o canviar camps a la check list

1. Afegiu la propietat a `_plantillaAuditoria.js` (o a `_plantillaRack.js`).
2. Afegiu el component `input*` a la pàgina de `pages/auditoria/` corresponent, amb el seu `arrCamps`.
3. Si ha de sortir al PDF, pinteu-la al `paginaXX.js` de la pàgina adequada.
4. Si ha de generar frases a l'informe, afegiu la regla a `_informeFrases.js`. Si té ajuda, afegiu-la a `_biblia.js`.

Les auditories desades abans del canvi es poden posar al dia amb **Exportar → Importar**: la importació completa les propietats que falten a partir de la plantilla.

### Generació del PDF (v.14)

`checkList.vue` crea un document A4 amb `canvas2pdf` + `pdfkit` + `blob-stream`. Per a cada pàgina, posa de fons la imatge `paginesJPG/Pagina_XX.jpg` i crida la funció global `pintaPaginaXX(ctx, auditoria)`, que escriu textos i marques en coordenades fixes. El resultat es mostra en un `iframe`. Aquests scripts són globals perquè es carreguen des de `index.template.html`.

### Persistència

No hi ha servidor. Les dades només es guarden a `localStorage` quan es prem **Guardar**. Per fer còpies de seguretat o passar dades a un altre equip, feu servir **Exportar** i **Importar**.

## Notes

- Interfície en castellà; codi i comentaris en català.
- `src/store/modul-auditoria/__auditoriaPlantillaJMG.js`, `old/` i `pages/pdfMake*` es conserven com a referència o per compatibilitat.
- El `package.json` té la clau `scripts` duplicada: la segona (`dev`/`build`) sobreescriu la primera (`test`).
- Configuració de Quasar: [`quasar.conf.js`](quasar.conf.js) ([documentació](https://v1.quasar.dev/quasar-cli/quasar-conf-js)).
