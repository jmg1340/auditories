import { colorText, respSiNo, respText } from './funcionsJMG.js';


export default function (obj) {
  console.log("Objecte auditoria pagina Seguretat")
  console.log(obj)

  return [
    //
    // {
		// 	// alignment: 'justify',
		// 	columns: [
    //     // {
    // 		// 	image: "./logoAsepeyo.jpg",
    // 		// 	width: 150,
    // 		// },
    //     {
    //       style: "table_Capsalera",
    //       table: {
    //         widths: [ '*', 75],
  	//         body: [
    //           [
    //             "INFORME AUDITORÍA TÉCNICA (Dirección Tecnologías de Información y Comunicación)",
    //             "FECHA: " + obj.data
    //           ],
    //           [ "Centro: " + obj.nomCentre.toUpperCase(),  "" ],
  	//           [ "Autor: " + obj.tecnic.toUpperCase(),  "" ]
  	//         ],
  	//       },
    //     },
		// 	]
		// },
    //


    {
      text: 'C. SEGURIDAD DE LA INFORMACIÓN',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },


    // ************ POLÍTICAS DE SEGURIDAD ***********

    {
      text: 'POLÍTICAS DE SEGURIDAD',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "MESAS LIMPIAS: \n",  bold: true},
        { text: "Documentación sobre las mesas: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.taulesNetes.documentacioSobreTaules.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.taulesNetes.documentacioSobreTaules.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.taulesNetes.documentacioSobreTaules.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Documentación en impresoras: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.taulesNetes.documentacioImpresores.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.taulesNetes.documentacioImpresores.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.taulesNetes.documentacioImpresores.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Documentación en papeleras: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.taulesNetes.documentacioPapeleres.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.taulesNetes.documentacioPapeleres.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.taulesNetes.documentacioPapeleres.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },

    // ************ DESTRUCCIÓN DE DOCUMENTOS ***********

    {
      text: [
        { text: "DESTRUCCIÓN DE DOCUMENTOS: \n",  bold: true},
        { text: "Destructoras papel: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.observacionsPapers) + "\n",  bold: true, background:"yellow"},

        { text: "D.P. con soporte para CD/DVDs: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.complementCDs) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.destruccioDocuments.destructoraPapers.observacionsCDs) + "\n",  bold: true, background:"yellow"},

        { text: "Nº destructoras papel: ",  color: "grey"},  { text: (obj.seguretatInformacio.destruccioDocuments.destructoraPapers.quantitat || "") + "\n",  bold: true},

        { text: "Contenedor seguro: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.destruccioDocuments.contenidorSegur.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.destruccioDocuments.contenidorSegur.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.destruccioDocuments.contenidorSegur.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Nº contenedores seguros: ",  color: "grey"},  { text: (obj.seguretatInformacio.destruccioDocuments.contenidorSegur.quantitat || "") + "\n\n",  bold: true},

      ]
    },


    // ************ ORIENTACIÓN PANTALLAS ***********

    {
      text: [
        { text: "ORIENTACIÓN PANTALLAS: \n",  bold: true},
        { text: "Exterior: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.OrientacioPantalles.exterior) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.OrientacioPantalles.exterior, [true], "red")},
        { text: respText(obj.seguretatInformacio.OrientacioPantalles.observacionsExterior) + "\n",  bold: true, background:"yellow"},

        { text: "Zona paso pacientes: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.OrientacioPantalles.zonaPas) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.OrientacioPantalles.zonaPas, [true], "red")},
        { text: respText(obj.seguretatInformacio.OrientacioPantalles.observacionsZonaPas) + "\n\n",  bold: true, background:"yellow"},
      ]
    },



    // ************ CARTELERÍA LOPD ***********

    {
      text: [
        { text: "CARTELERÍA LOPD: \n",  bold: true},
        { text: "PROAS: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.carteleriaLOPD.PROAS) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.carteleriaLOPD.PROAS, [false], "red")},
        { text: respText(obj.seguretatInformacio.carteleriaLOPD.observacionsPROAS) + "\n",  bold: true, background:"yellow"},

        { text: "Consultas médicas: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.carteleriaLOPD.CEX) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.carteleriaLOPD.CEX, [true], "red")},
        { text: respText(obj.seguretatInformacio.carteleriaLOPD.observacionsCEX) + "\n",  bold: true, background:"yellow"},

      ]
    },





    // ************ GESTIÓN DE ACTIVOS ***********

    {
      text: 'GESTIÓN DE ACTIVOS',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: "Material baja inventario: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.materialBaixaInventari.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.materialBaixaInventari.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.materialBaixaInventari.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Existencia soportes físicos: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.suportsFisics.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.suportsFisics.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.suportsFisics.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Custodia documentación sensible: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.documentacioSensible.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.documentacioSensible.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.documentacioSensible.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Expedientes graves: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.expedientsGreus.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.expedientsGreus.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.expedientsGreus.observacions) + "\n",  bold: true, background:"yellow"},

      ]
    },



    // ************ CONTROL ACCESOS ***********

    {
      text: 'CONTROL ACCESOS',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: "PERSONAL INTERNO \n",  color: "grey"},
      ]
    },
    {
      margin: [ 25, 0, 0, 0 ],
      text: [
        { text: "Llaves: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Codigos de alarma: ", color: "grey"},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.tipus) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.tipus, ["genericos"], "red")},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },

    {
      text: [
        { text: "PERSONAL EXTERNO \n",  color: "grey"},
      ]
    },
    {
      margin: [ 25, 0, 0, 0 ],
      text: [
        { text: "Llaves: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Codigos de alarma: ",  color: "grey"},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.tipus) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.tipus, ["genericos"], "red")},
        { text: respText(obj.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },

    {
      text: [
        { text: "Acceso fuera horario laboral: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.observacions) + "\n\n",  bold: true, background:"yellow"},

        { text: "Observaciones: ",  color: "grey"},  { text: (obj.seguretatInformacio.accesAlCentre.observacions || "") + "\n\n",  bold: true},

      ],

      pageBreak: 'after'

    },



    // ************ SEGURIDAD FÍSICA Y DEL ENTORNO ***********

    {
      text: 'SEGURIDAD FÍSICA Y DEL ENTORNO',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: "Alarma intrusión: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.alarmaIntrusio.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.alarmaIntrusio.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.alarmaIntrusio.observacions) + "\n\n",  bold: true, background:"yellow"},

      ]
    },

    {
      text: [
        { text: "Alarma de incendios: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.alarmaIncendis.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.alarmaIncendis.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.alarmaIncendis.observacions) + "\n",  bold: true, background:"yellow"},
      ]
    },



    {
      margin: [ 25, 0, 0, 0 ],
      text: [

        { text: "Videovigilancia: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.observacions) + "\n\n",  bold: true, background:"yellow"},


        { text: "GESTIÓN INTERNA: ", color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.gestioInterna.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.gestioInterna.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.gestioInterna.observacions) + "\n",  bold: true, background:"yellow"},
        { text: "Personal con acceso: ",  color: "grey"},  { text: (obj.seguretatInformacio.videovigilancia.gestioInterna.gravacioImatges.personalAmbAcces || "") + "\n",  bold: true},
        { text: "Tiempo retención: ",  color: "grey"},  { text: (obj.seguretatInformacio.videovigilancia.gestioInterna.gravacioImatges.periodeConservacio || "") + "\n\n",  bold: true},

        { text: "GESTIÓN EXTERNA: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.gestioExterna.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.gestioExterna.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.gestioExterna.observacions) + "\n",  bold: true, background:"yellow"},
        { text: "Tiempo retención: ",  color: "grey"},  { text: (obj.seguretatInformacio.videovigilancia.gestioExterna.periodeConservacio || "") + "\n",  bold: true},
        { text: "Evidencia proveed. externo: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.gestioExterna.evidencia) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.gestioExterna.evidencia, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.gestioExterna.observacionsEvidencia) + "\n\n",  bold: true, background:"yellow"},

        { text: "Letrero informativo: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.retol.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.retol.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.retol.observacions) + "\n",  bold: true, background:"yellow"},
        { text: "Cartelería actualizada: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.videovigilancia.carteleriaActualitzada.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.videovigilancia.carteleriaActualitzada.existeix, [""], "red")},
        { text: respText(obj.seguretatInformacio.videovigilancia.carteleriaActualitzada.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },




    // ************ SEGURIDAD DE LAS OPERACIONES ***********

    {
      text: 'SEGURIDAD DE LAS OPERACIONES',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "CONTINUIDAD DE NEGOCIO",  bold: true},

        { text: "Centros alternativos GADA: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.centresAlternatiusGADA.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.centresAlternatiusGADA.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.centresAlternatiusGADA.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Teléfono supervivencia: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.telefonSupervivencia.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.telefonSupervivencia.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.telefonSupervivencia.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Procedimientos en papel: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.procedimentsPaper.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.procedimentsPaper.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.procedimentsPaper.observacions) + "\n\n",  bold: true, background:"yellow"},

        { text: "PENDRIVE DE EMERGENCIA\n",  color: "grey"},
        { text: "Pendrive ubicació: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.observacions) + "\n",  bold: true, background:"yellow"},
        { text: "Última versión: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.pendriveEmergencia.ultimaVersio.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.pendriveEmergencia.ultimaVersio.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.pendriveEmergencia.ultimaVersio.observacions) + "\n",  bold: true, background:"yellow"},
        { text: "Procedimiento actualización: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.pendriveEmergencia.actualitzacio.feta) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.pendriveEmergencia.actualitzacio.feta, [""], "red")},
        { text: respText(obj.seguretatInformacio.pendriveEmergencia.actualitzacio.observacions) + "\n",  bold: true, background:"yellow"},


      ]
    },


    // ************ SEGURIDAD DE LAS COMUNICACIONES ***********

    {
      text: 'SEGURIDAD DE LAS COMUNICACIONES',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Acceso seguro sala comunicaciones: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.accesSegurSalaComunicacions.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesSegurSalaComunicacions.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.accesSegurSalaComunicacions.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Acceso seguro al rack: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.accesSegurRack.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.accesSegurRack.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.accesSegurRack.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Existe SAI: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.SAIRack.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.SAIRack.existeix, [false], "red")},
        { text: respText(obj.seguretatInformacio.SAIRack.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Toma de datos en sala de espera: ",  color: "grey"},
        { text: respSiNo(obj.seguretatInformacio.puntsXarxaSalaEspera.existeix) + "\t",  bold: true, color: colorText(obj.seguretatInformacio.puntsXarxaSalaEspera.existeix, [true], "red")},
        { text: respText(obj.seguretatInformacio.puntsXarxaSalaEspera.observacions) + "\n\n\n\n",  bold: true, background:"yellow"},
      ]
    },



{
  text: [
    { text: "OBSERVACIONES SEGURIDAD: ",  color: "grey"},  { text: (obj.seguretatInformacio.observacions || "") + "\n\n",  bold: true},
  ],
  pageBreak: 'after'

},





  ]
}
