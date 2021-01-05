import { colorText, respSiNo, respText } from './funcionsJMG.js';


export default function (obj) {
  console.log("Objecte auditoria pagina accionsMillora")
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
      text: 'F. OBSERVACIONES, OPORTUNIDAD MEJORA, ACCIONES DE MEJORA Y/O CORRECTIVAS',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },

    {
      text: 'OBSERVACIONES',
      margin: [ 0, 15, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: respSiNo(obj.accionsMillora.observacions.rack.neteja) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.rack.neteja, [true], "red")},
        { text: "Rack. Limpieza con sistema aspiración aire \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.rack.sanejar) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.rack.sanejar, [true], "red")},
        { text: "Rack. Sanear instalación cableado \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.rack.retirarPatchP) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.rack.retirarPatchP, [true], "red")},
        { text: "Rack. Retirar paneles obsoletos (Voz) \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.rack.retirarRack) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.rack.retirarRack, [true], "red")},
        { text: "Rack. Retirar armario sin uso \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.wanSanejar) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.wanSanejar, [true], "red")},
        { text: "WAN. Sanear instalación proveedor (PTR, RDSI...) \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.sala.neteja) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.sala.neteja, [true], "red")},
        { text: "Sala. Limpieza general \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.sala.retirarObjectes) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.sala.retirarObjectes, [true], "red")},
        { text: "Sala. Retirar objetos junto rack \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.SAI.revisoDispNoConnectats) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.SAI.revisoDispNoConnectats, [true], "red")},
        { text: "SAI. Revisar dispositivos vitales no conectados \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.enviarPendriveBIOS) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.enviarPendriveBIOS, [true], "red")},
        { text: "Enviar pendrive actualización BIOS \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.enviarLatiguillos) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.enviarLatiguillos, [true], "red")},
        { text: "Enviar latiguillos de reserva \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.llocsTreball.ampliacioPuntsXarxa) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.llocsTreball.ampliacioPuntsXarxa, [true], "red")},
        { text: "Ampliación puntos de red \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.llocsTreball.revisarPresesXarxa) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.llocsTreball.revisarPresesXarxa, [true], "red")},
        { text: "Revisar tomas de datos \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.llocsTreball.revisarCaixaConexions) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.llocsTreball.revisarCaixaConexions, [true], "red")},
        { text: "Revisar caja conexiones puestos de trabajo \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.revisarTelemedicina) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.revisarTelemedicina, [true], "red")},
        { text: "Revisión instalación Telemedicina \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.revisarVideoconferencia) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.revisarVideoconferencia, [true], "red")},
        { text: "Revisión instalación Videoconferencia \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.enviarWebcam) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.enviarWebcam, [true], "red")},
        { text: "Enviar webcam sala de reuniones \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.CU.enviarAuricularsReserva) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.CU.enviarAuricularsReserva, [true], "red")},
        { text: "Enviar auriculares de reserva \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.CU.enviarAltaveu) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.CU.enviarAltaveu, [true], "red")},
        { text: "Enviar altavoz \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.enviarLectorCDDVD) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.enviarLectorCDDVD, [true], "red")},
        { text: "Enviar lector CD/DVD \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.observacions.renoveProjector) + "\t",  bold: true, color: colorText(obj.accionsMillora.observacions.renoveProjector, [true], "red")},
        { text: "Renove proyector sala reuniones \n",  color: "grey"},



        { text: "Otros: \t",  color: "grey"},  { text: (obj.accionsMillora.observacions.altres || "") + "\t",  bold: true},
      ],


    },




    {
      text: 'NO CONFORMIDADES / CORRECCIONES',
      margin: [ 0, 15, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: respSiNo(obj.accionsMillora.NC.enviarPendriveEmergencia) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.enviarPendriveEmergencia, [true], "red")},
        { text: "Enviar pendrive emergencia \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.solicitarDestructoraPaper) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.solicitarDestructoraPaper, [true], "red")},
        { text: "Solicitar destructora papel \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.solicitarContenidor) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.solicitarContenidor, [true], "red")},
        { text: "Solicitar contenedor \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.visibilitatPantalles) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.visibilitatPantalles, [true], "red")},
        { text: "Visibilidad pantallas \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.salaRackSenseClau) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.salaRackSenseClau, [true], "red")},
        { text: "Cuarto comunicaciones cn cerradura sin llave \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.rackSenseClaus) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.rackSenseClaus, [true], "red")},
        { text: "Rack sin llaves \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.carteleriaLOPD) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.carteleriaLOPD, [true], "red")},
        { text: "Carteles LOPD \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.suportsBackup) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.suportsBackup, [true], "red")},
        { text: "Soportes Backup \n",  color: "grey"},

        { text: respSiNo(obj.accionsMillora.NC.docsSensibles) + "\t",  bold: true, color: colorText(obj.accionsMillora.NC.docsSensibles, [true], "red")},
        { text: "Documentación sensible \n",  color: "grey"},



        { text: "Otros: \t",  color: "grey"},  { text: (obj.accionsMillora.NC.altres || "") + "\t",  bold: true},
      ],


    },






  ]
}
