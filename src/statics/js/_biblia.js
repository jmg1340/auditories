export function frasesHelp ( punt ){

  const arrHelp = [
    /*    ***** INSTALACIONS I COMUNICACIONS ******   */

    /*       sala comunicacions       */

    {
      punt:  "zona paso libre sala",
      arrFrases: [
        { frase: "Que no haya cajas ni materiales que obstaculicen la puerta de acceso ni el despalazamiento dentro de la sala" },
      ]
    },

    /*       WAN proveidor       */
    {
      punt:  "wan estado general",
      arrFrases: [
        { frase: "PTR bien anclado en la pared" },
        { frase: "Cables no pelados, no tirantes ni forzados" },
        { frase: "Ubicación accesible" },
      ]
    },
    {
      punt:  "wan ID linea",
      arrFrases: [
        { frase: "Como debe estar identificada la linea?" },
        { frase: "ID administrativo de linea?" },
        { frase: "Identificación del número de cirucuito FTTH/ADSL (etiqueta)" },
      ]
    },
    {
      punt:  "wan estado convertidor medios",
      arrFrases: [
        { frase: "Revisar que tenga buen asepecto." },
        { frase: "Que no esté colgando en el aire, etc." },
      ]
    },

    /*       SAI       */
    {
      punt:  "sai estado general",
      arrFrases: [
        { frase: "Muy deficiente: destrozado, con la carcasa rota y desconectado" },
        { frase: "Deficiente: Lleno de suciedad  los enchufes inaccesibles" },
        { frase: "Mejorable: Inaccesible en la parte posterior" },
        { frase: "Aceptable: colocado en vertical junto al rack y siendo accesible en la parte posterior (enchufes)" },
        { frase: "Correcto: correctamente anclado al rack y siendo accesible en la parte posterior (enchufes)" },
      ]
    },
    {
      punt:  "sai regleta",
      arrFrases: [
        { frase: "Regleta LIMPIA: regleta conectada al SAI." },
        { frase: "Regleta SUCIA: regleta NO conectada al SAI." },
        { frase: "En el documento de migración LAN/BT indica que solo su propia electrónica es la que esta conectada al SAI (router, switchs, convertidores de medios, router radioenlace). El resto, a la regleta sucia (sistema videovigilancia, hilo musical, raspberry, amplificador sonido, etc)" },
      ]
    },



    /* ------------------- */
    {
      punt:  "elementos baja inventario",
      arrFrases: [
        { frase: "Documentar número de dossier / NS y comprobar en Máximo" },
        { frase: "Si estan dados de baja, mandar a un punto limpio. Sino lo están, proponerlo a GESTIONES_DTIC." },
      ]
    },
    /* ------------------- */


    /*       RACK       */

    {
      punt:  "cerradura rack",
      arrFrases: [
        { frase: "Si el rack esta en una zona de paso, tiene que estar cerrado con llave" },
        { frase: "Si el rack esta en un cuarto tecnico con llave (cerrado), el rack puede estar sin llave (abierto). Si en el cuarto tècnico hubiera más cosas (material, etc.), el rack tiene que estar cerrado con llave" },

      ]
    },
    {
      punt:  "rack aspecto cableado",
      arrFrases: [
        { frase: "Muy deficiente: cableado en mal estado, sin orden, no etiquetado o mal etiquetado" },
        { frase: "Deficiente: cableado en buen estado pero sin orden" },
        { frase: "Mejorable: cableado recogido con bridas pero sin guiacable y sin etiquetar" },
        { frase: "Aceptable: cables recogidos con guiacables pero sin etiquetar" },
        { frase: "Correcto: cables recogidos con guiacables y bien etiquetados" },
      ]
    },
    {
      punt:  "rack cableado terminaciones",
      arrFrases: [
        { frase: "Muy deficiente: cables sueltos y pelados en los patchpanel." },
        { frase: "Deficiente: lo que llega al patchpanel son hilos trenzados, no el cable." },
        { frase: "Mejorable: Todas las conexiones estan en buen estado y faltan muchas etiquetas, o el etiquetado no sigue un sistema lógico." },
        { frase: "Aceptable: Todas las conexiones estan en buen estado y falta alguna etiqueta" },
        { frase: "Correcto: conexiones en buen estado y todas etiquetadas correctamente" },
      ]
    },
    {
      punt:  "rack electricidad estado",
      arrFrases: [
        { frase: "Cables no tirantes, no forzados y no pelados." },
        { frase: "El estado correcto de las regletas es anclado en el rack y no por el suelo. Existen regletas en cascada?" },
      ]
    },
    {
      punt:  "rack ventilacion",
      arrFrases: [
        { frase: "Usar sentido común: si no tiene paneles posteriores y está todo al aire quizà esté suficientemente ventilado." },
      ]
    },




    /*       PUESTOS DE TRABAJO       */

    {
      punt:  "area trabajo",
      arrFrases: [
        { frase: "Revisaremos principalmente los puestos de trabajo de PROAS." },
        { frase: "Si el tiempo y circunstancias lo permiten revisaremos además los despachos Médicos, Enfermería, Administración, director/a y resto de puestos (por este orden). Yo revisaría los Proas, 1 medico, 1 enfermería y 1 de administración de forma aleatoria." },
      ]
    },

    {
      punt:  "area trabajo cableado",
      arrFrases: [
        { frase: "Cableado no tirante ni forzado." },
        { frase: "Cable no pelado." },
      ]
    },

    {
      punt:  "area trabajo suficientes tomas",
      arrFrases: [
        { frase: "En los puestos de médicos y DC, 3 tomas de datos." },
        { frase: "Si hay menos tomas, valorar si es necessario más" },
      ]
    },

    {
      punt:  "area trabajo suficientes enchufes",
      arrFrases: [
        { frase: "Se requieren mínimo 2 tomas de corriente por puesto." },
      ]
    },



    /*       LAN       */

    {
      punt:  "LAN switchs identificacion",
      arrFrases: [
        { frase: "Comentado con Delpeix y Oriol Ribot, la etiqueta que es correcta es el nombre del dispositivo que hay en el CiscoPrime" },
      ]
    },

    {
      punt:  "LAN cobertura wifi",
      arrFrases: [
        { frase: "Medir con la app Heatmap Wifi (solo si da tiempo)" },
      ]
    },




	]




	return arrHelp.find( (obj ) => obj.punt === punt ).arrFrases

}