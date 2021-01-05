import { colorText, respSiNo, respText } from './funcionsJMG.js';


export default function (obj) {
  console.log("Objecte auditoria pagina CU")
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
      text: 'B. COMUNICACIONES UNIFICADAS',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },


    // ************ MEDIOS AUDIOVISUALES ***********

    {
      text: 'MEDIOS AUDIOVISUALES',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "SALA DE REUNIONES:\n ",  bold: true},
        { text: "Sala de reuninones: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.salaReunions.existeix) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.existeix, ["false"], "red")},
        { text: respText(obj.comunicacionsUnificades.salaReunions.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Capacidad (personas): ",  color: "grey"},  { text: (obj.comunicacionsUnificades.salaReunions.capacitat || "") + "\n",  bold: true},
        { text: "Medidas: ",  color: "grey"},  { text: (obj.comunicacionsUnificades.salaReunions.mides || "") + "\n\n",  bold: true},


      ]
    },

    {
      alignment: 'left',
      columnGap: 5,
      columns: [
        {
          width: '25%',
          text: [
            { text: "Equipamiento sala:\t",  color: "grey"},
          ]
        },
        {
          text: [
            { text: "SX10: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.SX10) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.SX10, [true], "blue")},
            { text: "SX80: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.SX80) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.SX80, [true], "blue")},
            { text: "Roomkit: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.roomkit) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.roomkit, [true], "blue")},
            { text: "CamaraWeb: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.camaraWeb) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.camaraWeb, [true], "blue")},
            { text: "Tablet: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.tablet) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.tablet, [true], "blue")},
            { text: "TV: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.TV) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.TV, [true], "blue")},
            { text: "Proyector: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.projector) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.projector, [true], "blue")},
            { text: "displayPortHDMI: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.displayPortHDMI) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.displayPortHDMI, [true], "blue")},
            { text: "duplicadorHDMI: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.duplicadorHDMI) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.duplicadorHDMI, [true], "blue")},
            { text: "conversorVGA_HDMI: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.conversorVGA_HDMI) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.conversorVGA_HDMI, [true], "blue")},
            { text: "cableAudio: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.salaReunions.dispositius.cableAudio) + "\n\n",  bold: true, color: colorText(obj.comunicacionsUnificades.salaReunions.dispositius.cableAudio, [true], "blue")},
          ]
        }
      ]
    },



    {
      text: [
        { text: "Recomendaciones: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.salaReunions.recomanacions) + "\n\n",  bold: true, background:"yellow"},



        { text: "VIDEOCONFERENCIA:\n ",  bold: true},
        { text: "Operativa: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.operativa) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.operativa, [false], "red")},
        { text: respText(obj.comunicacionsUnificades.videoconferencia.observacionsOperativa) + "\n",  bold: true, background:"yellow"},

        { text: "Prueba realizada: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.prova.feta) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.feta, [false], "red")},
        { text: respText(obj.comunicacionsUnificades.videoconferencia.prova.observacions) + "\n",  bold: true, background:"yellow"},
      ]
    },

    {
      alignment: 'left',
      columnGap: 5,
      columns: [
        {
          width: '25%',
          text: [
            { text: "Pruebas: \t",  color: "grey"},
          ]
        },
        {
          text: [
            { text: "Llamada: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.prova.trucada) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.trucada, [true], "blue")},
            { text: "Compartir PC: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.prova.compartirPc) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.compartirPc, [true], "blue")},
            { text: "Audio: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.prova.audio) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.audio, [true], "blue")},
            { text: "Video: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.videoconferencia.prova.video) + "\n",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.video, [true], "blue")},
          ]
        }
      ]
    },

    {
      text: [
        { text: "Resultado prueba: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.videoconferencia.prova.resultat) + "\n\n\n\n",  bold: true, color: colorText(obj.comunicacionsUnificades.videoconferencia.prova.resultat, ["deficiente", "muy deficiente"], "red")},
      ]
    },


    {
      text: 'TELÉFONO DE SUPERVIVENCIA',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Existe teléfono: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.existeix) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.existeix, ["false"], "red")},
        { text: respText(obj.comunicacionsUnificades.telefonSupervivencia.observacionsExistencia) + "\n",  bold: true, background:"yellow"},

        { text: "Numero (DDI): ",  color: "grey"},  { text: (obj.comunicacionsUnificades.telefonSupervivencia.DDI || "") + "\n",  bold: true},

        { text: "Estado: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.telefonSupervivencia.estat) + "\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.estat, ["deficiente", "muy deficiente"], "red")},

        { text: "Ubicación: ",  color: "grey"},  { text: (obj.comunicacionsUnificades.telefonSupervivencia.ubicacio || "") + "\n\n",  bold: true},
      ]
    },

    {
      alignment: 'left',
      columnGap: 5,
      columns: [
        {
          width: '25%',
          text: [
            { text: "Pruebas:\t",  color: "grey"},
          ]
        },
        {
          text: [
            { text: "Llamada saliente: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.prova.trucadaSortint) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.prova.trucadaSortint, [true], "blue")},
            { text: "Llamada entrante: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.prova.trucadaEntrant) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.prova.trucadaEntrant, [true], "blue")},
            { text: "Desconectar tensión: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.prova.desconectarTensio) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.prova.desconectarTensio, [true], "blue")},
            { text: "Nivel audio ring: ",  color: "grey"},
            { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.prova.nivellAudioRing) + "\n\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.prova.nivellAudioRing, [true], "blue")},
          ]
        }
      ]
    },

    {
      text: [
        { text: "Observaciones: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.telefonSupervivencia.observacions) + "\n\n",  bold: true, background:"yellow"},

        { text: "Nivel cobertura: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.telefonSupervivencia.nivellCobertura) + "\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.nivellCobertura, ["|", "||"], "red")},
        { text: "Nivel bateria: ",  color: "grey"},
        { text: respText(obj.comunicacionsUnificades.telefonSupervivencia.nivellBateria) + "\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.nivellBateria, ["|", "||"], "red")},
        { text: "Conectado a corriente: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.connectatCorrent) + "\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.connectatCorrent, [false], "red")},

        { text: "Tiene instrucciones cercanas: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.telefonSupervivencia.instruccionsProperes) + "\n\n\n\n",  bold: true, color: colorText(obj.comunicacionsUnificades.telefonSupervivencia.instruccionsProperes, [false], "red")},

      ],
    },



    {
      text: 'AURICULARES',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Auriculares repuesto: ",  color: "grey"},
        { text: respSiNo(obj.comunicacionsUnificades.auricularsRecanvi.existeix) + "\t",  bold: true, color: colorText(obj.comunicacionsUnificades.auricularsRecanvi.existeix, ["false"], "red")},
        { text: respText(obj.comunicacionsUnificades.auricularsRecanvi.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Cuántos? ",  color: "grey"},  { text: (obj.comunicacionsUnificades.auricularsRecanvi.quantitat || "") + "\n",  bold: true},

      ],
    },





  ]
}
