export function frasesHelp ( punt ){

  const arrHelp = [
    /*    ***** INSTALACIONS I COMUNICACIONS ******   */

    /*       sala comunicacions       */

    {
      punt:  "existe sala",
      arrFrases: [
        { frase: "Aportar: foto puerta sala; foto general sala; foto(s) del rack donde se aprecie su contenido; foto si hay algún aparato de refrigeración." },
      ]
    },
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
        { frase: "Si el tiempo y circunstancias lo permiten revisaremos además los despachos Médicos, Enfermería, Administración, director/a y resto de puestos (por este orden). Por ej. revisar los Proas, 1 medico, 1 enfermería y 1 de administración de forma aleatoria." },
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

    {
      punt:  "area trabajo telemedicina",
      arrFrases: [
        { frase: "Aportar fotos, caso de que haya." },
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


  /*       COMUNICACIONES UNIFICADAS       */

	{
		punt:  "cu salas reuniones",
		arrFrases: [
			{ frase: "Indicar si hay mas de una en el campo observaciones. Aportar foto general de la sala" },
		]
	},
	{
		punt:  "cu medios audiovisuales",
		arrFrases: [
			{ frase: "Verificaremos que totdo el equipamiento de la sala de videoconferencia funcione correctamente (CPU, Proector, TV, SX, Teclado y ratón" },
			{ frase: "Dejaremos impresas las indicacines para cambiar las opciones de audio cuando precisen reprducir adio dentro del la plataforma (por ejemplo, vídeos)" },
			{ frase: "Dejaremos un impreso del manual de uso del sistema de videoconferencia." },
			{ frase: "Segun Gestiones DTIC, todos los centros tienen tablet y algnos complementariamente un mando" },
			{ frase: "Aportar foto de los dispositivos." },
		]
	},



  /*       SEGURIDAD DE LA INFORMACION       */


  /*       MESAS LIMPIAS       */

	{
		punt:  "seguridad - documentacion mesas",
		arrFrases: [
			{ frase: "Encima de la mesa de trabajo debe exiteir la documentación mínima e imrescindible para la activdad diaria (especialmente en aquellos puestos en los que se atiende a personas ajenas a la mútua). Es conveniente que la documentación esté classificada en carpetas que eviten, de forma accidental o intencionada, la visualización de ésta por parte de terceros." },
			{ frase: "Echar un vistazo sobre 4 o 5 puestos. Que no tengan documentacion visible de otras personas / pacientes mientras atienden a otros. (ej: el administrativo tiene documentación de paciente anterior mientras atiende a uno nuevo" },
		]
	},
	{
		punt:  "seguridad - documentacion impresoras",
		arrFrases: [
			{ frase: "Revisar si existen documentos confidenciales abandonados en las impresoras." },
		]
	},
	{
		punt:  "seguridad - documentacion papeleras",
		arrFrases: [
			{ frase: "Revisar si existen documentos confidenciales en las papeleras." },
		]
	},





  /*       DESTRUCCION DOCUMENTOS       */

	{
		punt:  "seguridad - destructoras de papel",
		arrFrases: [
			{ frase: "Mínimo tiene que haber una." },
			{ frase: "La documentación debe ser destruida en el preciso momento que así se determine. De esta forma se evita la acumulación de documentación en lugares sin las adecuadas medidas de protección" },
		]
	},
	{
		punt:  "seguridad - contenedor seguro",
		arrFrases: [
			{ frase: "Antes de las destructoras de papel habían contenedores seguros (precintados)" },
			{ frase: "Contendeores de cartón -> destruccion de papeles" },
			{ frase: "David consultó a Edgard si se pueden tirar CDs a los contenedores de papel y, en principio, parece ser que sí" },
		]
	},


  /*       SEGURIDAD GESTION ACTIVOS       */

	{
		punt:  "gestion activos - material baja inventario",
		arrFrases: [
			{ frase: "Revisar que no haya material que esté dado de baja en el inventario de Asepeyo. Caso de que sí, foto donde se vea número de serie." },
		]
	},
	{
		punt:  "gestion activos - soportes fisicos",
		arrFrases: [
			{ frase: "Revisar si existen CDs, DVDs, disquetes, cintas... con informacion de la mútua. Caso de que sí, foto." },
		]
	},
	{
		punt:  "gestion activos - expedientes graves",
		arrFrases: [
			{ frase: "Han de estar en un lugar con acceso restringido" },
			{ frase: "En caso de su existencia, indicar la dependencia donde estan en el campo observaciones. Aportar foto dependencia y foto de la localización de los expedientes." },
			{ frase: "En campo observaciones indicar si estan custodiados bajo llave" },
		]
	},
	{
		punt:  "gestion activos - documentacion sensible",
		arrFrases: [
			{ frase: "Historias clínicas: abrir armarios de despachos médicos por si se encuentra alguna" },
			{ frase: "En caso de su existencia, indicar la dependencia donde estan en el campo observaciones. Aportar foto dependencia y foto de la localización de los expedientes." },
			{ frase: "En campo observaciones indicar si estan custodiados bajo llave" },
		]
	},


  /*       SEGURIDAD ORIENTACION PANTALLAS       */

	{
		punt:  "orientacion exterior",
		arrFrases: [
			{ frase: "Ver si desde el exterior se puede ver el contenido de alguna pantalla" },
		]
	},
	{
		punt:  "orientacion zona paso pacientes",
		arrFrases: [
			{ frase: "Pantallas internamente mal ubicadas que hacen posible la visualización, ni que sea por un momento, de la información." },
		]
	},




  /*       SEGURIDAD ACCESO FISICO AL CENTRO       */

	{
		punt:  "seguridad - llaves personal interno",
		arrFrases: [
			{ frase: "informar el numero de usuarios que tienen" },
		]
	},
	{
		punt:  "seguridad - llaves personal externo",
		arrFrases: [
			{ frase: "El personal externo (servicio de limpieza) no debe tener llaves ni codigos de alarma (a medida que se vayan haciendo nuevos contratos con el servicio de limpieza, se iràn cambiando los horarios para que no tengan necesidad de llaves ni codigos." },
		]
	},


  /*       SEGURIDAD VIDEOVIGILANCIA       */

	{
		punt:  "videovigilancia tiempo retencion",
		arrFrases: [
			{ frase: "Deberia ser màximo un mes de retencion de las imagenes" },
		]
	},
	{
		punt:  "videovigilancia evidencia",
		arrFrases: [
			{ frase: "Que haya algun docmento por parte de la empresa proveedora del sistema de vigilancia donde haya la evidencia / confirmación de que las imágenes se conservan por tiempo <= 1 mes" },
		]
	},

  /*       SEGURIDAD DE LAS OPERACIONES       */

	{
		punt:  "GADA",
		arrFrases: [
			{ frase: "Verificar si en la aplicación GADA de la intranet están informados los centros alternativos en caso de cierre por no continuidad" },
		]
	},
	{
		punt:  "procedimientos papel",
		arrFrases: [
			{ frase: "Ver si hay impresos y accesibles los Procedimientos y protocolos del Plan de Continuidad de Negocio (PCN) - Manual M-1486.0" },
		]
	},
	{
		punt:  "localizacion pendrive emergencia",
		arrFrases: [
			{ frase: "La ubicación correcta es dentro de un sobre pegado a la puerta del rack en su parte interna." },
		]
	},
	{
		punt:  "revision actualizacion pendrive emergencia",
		arrFrases: [
			{ frase: "Pedro Martínez de Costaisa es quien lleva este tema" },
		]
	},
	{
		punt:  "procedimiento actualizacion pendrive emergencia",
		arrFrases: [
			{ frase: "Preguntar si se dispone del procedimiento de actualización y uso del pendrive de emergencias" },
		]
	},



  /*       SEGURIDAD DE LAS COMUNICACIONES       */

	{
		punt:  "acceso seguro cuarto",
		arrFrases: [
			{ frase: "ver si el cuarto de comunicaciones está protegido con cerradura y si la puerta está cerrada. Aportar foto." },
		]
	},
	{
		punt:  "acceso seguro rack",
		arrFrases: [
			{ frase: "ver si el rack tiene la puerta cerrada o no y si está protegida con llave. Aportar foto." },
		]
	},
	{
		punt:  "sai rack",
		arrFrases: [
			{ frase: "Si dentro del rack hay un SAI y está operativo. Aportar foto." },
		]
	},
	{
		punt:  "tomas sala espera",
		arrFrases: [
			{ frase: "Si en la sala de espera de los pacientes hay tomas de red. Aportar foto caso de que sí." },
		]
	},


	]




	return arrHelp.find( (obj ) => obj.punt === punt ).arrFrases

}