import { colorText, respSiNo, respText } from './funcionsJMG.js';


export default function (obj) {
  console.log(obj)

  return [

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



    {
      text: 'A. INSTALACIONES Y COMUNICACIONES',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },


    // ************ Información obtenida ***********

    {
      text: 'INFORMACIÓN (obtenida de GADA / PRIME)',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },


    {
			alignment: 'left',
      columnGap: 5,
			columns: [
				{
          width: '45%',
					text: [
            { text: "Código centro: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.codi || "") + "\n",  bold: true},
            { text: "ID Site BT: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.idSiteBT || "") + "\n",  bold: true},
            { text: "Nº usuarios: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.totalUsuaris || "") + "\n",  bold: true},
            { text: "Línea principal: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.Linia1 || "") + "\n",  bold: true},
            { text: "Línea backup: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.Linia2 || "") + "\n",  bold: true},
          ]
				},
				{
          width: '20%',
          text: [
            { text: "Nº Routers: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.CiscPrime.NumRouters || "") + "\n",  bold: true},
            { text: "Nº Switchs: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.CiscPrime.NumSwitchs || "") + "\n",  bold: true},
            { text: "Nº APs wifi: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.CiscPrime.NumAPsWifi || "") + "\n",  bold: true},
            { text: "Colas MTF: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.CuesImpressioMTF || "") + "\n",  bold: true},
            { text: "Colas impresión: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.CA.CuesImpressio || "") + "\n",  bold: true},
          ]
				},
        {
          width: '35%',
          text: [
            { text: "Tareas requeridas:\n ",  bold: true},
            { text: "Retirar minipacs del rack: ",  color: "grey"},  { text: respSiNo(obj.instalacionsComunicacions.informacioPrevia.TareasRequeridas.RetirarMinipacsDelRack) + "\n",  bold: true},
            { text: "Revisar auriculares Jabra: ",  color: "grey"},  { text: respSiNo(obj.instalacionsComunicacions.informacioPrevia.TareasRequeridas.RevisarCascosJabra) + "\n",  bold: true},
            { text: "Retirar elementos del rack: ",  color: "grey"},  { text: respSiNo(obj.instalacionsComunicacions.informacioPrevia.TareasRequeridas.RetirarDelRack) + "\n",  bold: true},
            { text: "Otras: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.informacioPrevia.TareasRequeridas.Otras || "") + "\n",  bold: true},
          ],
        },

			]
		},




    // ************ SALA DE COMUNICACIONES ***********

    {
      text: 'SALA DE COMUNICACIONES',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Es un centro secundario (depende del router de otra sede): ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.centreSecundari.existeix) + "\t",  bold: true},
        { text: "Código centro principal: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.centreSecundari.idCentrePrincipal) + "\n\n",  bold: true},

        { text: "Accesibilidad sala:\n ",  bold: true, decoration: "underline"},

        { text: "Cerradura acceso sala: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.accessibilitat.cerraduraPorta.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.accessibilitat.cerraduraPorta.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.accessibilitat.cerraduraPorta.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Estado cerradura: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.accessibilitat.estatPorta) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.accessibilitat.estatPorta, ["abierta"], "red")},

        { text: "Zona paso libre sala: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.accessibilitat.zonaPasLliure.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.accessibilitat.zonaPasLliure.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.accessibilitat.zonaPasLliure.observacions) + "\n\n",  bold: true, background:"yellow"},

      ],
    },


    // ************ WAN PROVEEDOR EXTERNO ***********

    {
      text: [
        { text: "WAN proveedor externo:\n ",  bold: true, decoration: "underline"},

        { text: "Estado instalación general: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.estatInstalacio) + "\n",  bold: true, color: (obj.instalacionsComunicacions.sala.proveidorWAN.estatInstalacio, ["deficiente", "muy deficiente"], "red")},

        { text: "Existencia instalaciones obsoletas: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.proveidorWAN.instalacionsObsoletes.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.proveidorWAN.instalacionsObsoletes.existeix, ["true"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.instalacionsObsoletes.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "ID línea principal: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia1.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia1.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia1.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "ID línea backup: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia1.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia2.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.idLinia2.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Etado convertidor Medios PPAL: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia1) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia1, ["deficiente", "muy deficiente"], "red")},

        { text: "Estado convertidor medios BKP: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia2) + "\n\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia2, ["deficiente", "muy deficiente"], "red")},
      ],
    },


    // ************ SAI ***********

    {
      //font: "Courier",
      text: [
        { text: "SAI:\n ",  bold: true, decoration: "underline"},

        { text: "Estado SAI: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.SAI.estatSAI) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.estatSAI, ["deficiente", "muy deficiente"], "red")},

        { text: "Conexión a switch: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.existeix, ["false"], "red")},
        { text: "SW1 - Gi26?: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.connexioPortSW1Gi26) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.connexioPortSW1Gi26, ["false"], "red")},
        { text: "SW?: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.connexio.SW) + "\t",  bold: true, background: "yellow"},
        { text: "Port?: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.SAI.connexioSwitch.connexio.port) + "\n",  bold: true, background: "yellow"},

        { text: "Instalación SAI: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.SAI.instalacioSAI) + "\n\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.instalacioSAI, [], "red")},

        { text: "Elementos conctados SAI:\t",  color: "grey"},
        { text: "Router: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.router) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.router, [true], "blue")},
        { text: "Switchs: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.switchs) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.switchs, [true], "blue")},
        { text: "CM1: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia1) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia1, [true], "blue")},
        { text: "CM2: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia2) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia2, [true], "blue")},
        { text: "Otros: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.altres) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.altres, [true], "blue")},

        { text: "Elementos regleta LIMPIA:\t",  color: "grey"},
        { text: "Router: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.router) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.router, [true], "blue")},
        { text: "Switchs: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.switchs) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.switchs, [true], "blue")},
        { text: "CM1: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia1) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia1, [true], "blue")},
        { text: "CM2: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia2) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia2, [true], "blue")},
        { text: "Otros: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.altres) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.altres, [true], "blue")},

        { text: "Elementos regleta SUCIA:\t",  color: "grey"},
        { text: "Router: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.router) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.router, [true], "blue")},
        { text: "Switchs: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.switchs) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.switchs, [true], "blue")},
        { text: "CM1: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia1) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia1, [true], "blue")},
        { text: "CM2: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia2) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia2, [true], "blue")},
        { text: "Otros: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.altres) + "\n\n",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.altres, [true], "blue")},

      ],
    },


    // ************ VARIOS ***********

    {
      text: [
        { text: "VARIOS:\n ",  bold: true, decoration: "underline"},

        { text: "Aspecto limpieza sala: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.sala.aspecteSala) + "\n",  bold: true, color: (obj.instalacionsComunicacions.sala.aspecteSala, ["deficiente", "muy deficiente"], "red")},

        { text: "Climatización sala: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.climatitzacio.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.climatitzacio.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.climatitzacio.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Ventilación sala: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.ventilacio.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.ventilacio.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.ventilacio.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Latiguillos reserva: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.latiguillos.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.latiguillos.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.latiguillos.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Elementos baja inventario: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.elementsBaixaInventari.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.elementsBaixaInventari.existeix, ["true"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.elementsBaixaInventari.observacions) + "\n",  bold: true, background:"yellow"},
      ],

      pageBreak: 'after',
    },




    // ************ RACKS ***********

    {
      text: [
        { text: "ARMARIO RACK:\n ",  bold: true, decoration: "underline"},
        { text: "Nº Racks: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.sala.numRacks || "") + "\n",  bold: true},

        { text: "Nº Racks adecuado: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.sala.numRacksAdecuat.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.numRacksAdecuat.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.sala.numRacksAdecuat.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },

    {
      style: "estilRacks",
      alignment: 'left',
      columnGap: 5,
			columns: generarColumnesRacks(obj.instalacionsComunicacions.sala.racks),
    },






    // ************ AREA DE TRABAJO ***********
    {
      text: 'AREA DE TRABAJO',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [

        { text: "Estado cableado: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.estatCablejat) + "\n\n",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.estatCablejat, ["deficiente", "muy deficiente"], "red")},

        { text: "Tomas de datos:\n ",  bold: true, decoration: "underline"},
        { text: "Estado: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.estat) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.estat, ["deficiente", "muy deficiente"], "red")},

        { text: "Identificación tomas: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Suficentes tomas: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Miniswitchs?: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.existeix, ["true"], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.observacions) + "\n\n",  bold: true, background:"yellow"},



        { text: "Electricidad:\n",  bold: true, decoration: "underline"},
        { text: "Estado: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.estat) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.estat, ["deficiente", "muy deficiente"], "red")},

        { text: "Enchufes suficientes: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Uso de regletas: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.existeix, [""], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Regletas en cascada: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.existeix, [""], "red")},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.observacions) + "\n\n",  bold: true, background:"yellow"},



        { text: "Observaciones: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.llocsDeTeball.observacions) + "\n\n",  bold: true },
      ],

      pageBreak: 'after',

    },




    // ************ LAN ***********
    {
      text: 'LAN',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [

        { text: "Switchs:\n ",  bold: true, decoration: "underline"},
        { text: "Sw identificados: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LAN.SWidentificats.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LAN.SWidentificats.existeix, [""], "red")},
        { text: respText(obj.instalacionsComunicacions.LAN.SWidentificats.observacions) + "\n\n",  bold: true, background:"yellow"},


        { text: "APs Wifi:\n ",  bold: true, decoration: "underline"},

        { text: "Nº APs: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.quantitat) + "\t",  bold: true},
        { text: "Ubicacion sala espera: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LAN.wifiAPs.ubicacio.salaEspera) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LAN.wifiAPs.ubicacio.salaEspera, ["false"], "red")},
        { text: "Otra ubic.: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.ubicacio.altres) + "\n\n",  bold: true, background:"yellow"},

        { text: "AP visible: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LAN.wifiAPs.APvisible.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LAN.wifiAPs.APvisible.existeix, [""], "red")},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.APvisible.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Cobertura PROAS: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Carteleria Wifi: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Observaciones: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.LAN.wifiAPs.observacions) + "\n\n",  bold: true},


        { text: "Impresoras:\n ",  bold: true, decoration: "underline"},
        { text: "Nº colas impresoras: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.LAN.NumCuesImpressio || "") + "\n",  bold: true},
        { text: "Nº colas MTF: ",  color: "grey"},  { text: (obj.instalacionsComunicacions.LAN.NumCuesImpressioMTF || "") + "\n\n",  bold: true},

        { text: "Otros dispositivos:\n ",  bold: true, decoration: "underline"},
        /* { text: "Dispositivos: ",  color: "grey"}, */  { text: (obj.instalacionsComunicacions.LAN.altresDispositius || "") + "\n\n",  bold: true},

        { text: "Cobertura Wifi:\n ",  bold: true, decoration: "underline"},
        /* { text: "Cobertura: ",  color: "grey"}, */  { text: (obj.instalacionsComunicacions.LAN.coberturaWifi || "") + "\n\n",  bold: true},

        { text: "Observaciones LAN:\n ",  bold: true, decoration: "underline"},
       /*  { text: "Observaciones: ",  color: "grey"}, */  { text: (obj.instalacionsComunicacions.LAN.observacions || "") + "\n\n\n",  bold: true},

      ]
    },


    // ************ CLIMATIZACIÓN ***********
    {
      text: 'CLIMATIZACIÓN',
      margin: [ 0, 20, 0, 0],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Equipamiento y conexiones:\n ",  bold: true},
        { text: "Puerto SW1 Gi23: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.equipamentConexions.connexioPortSW1Gi23) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.equipamentConexions.connexioPortSW1Gi23, ["false"], "red")},
        { text: "\tOtra conexión: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.equipamentConexions.altraConnexio) + "\n\n",  bold: true, background:"yellow"},
      ]
    },


    // ************ CLIMATIZACIÓN ***********
    {
      text: 'PENDRIVE ACTUALIZACIÓN BIOS',
      margin: [ 0, 20, 0, 0],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Pendrive existente: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.pendriveBIOS.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.pendriveBIOS.existeix, ["false"], "red")},
        { text: "\tUbicación: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.pendriveBIOS.ubicacio) + "\n",  bold: true},
        { text: "\Observaciones: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.pendriveBIOS.observacions) + "\n\n",  bold: true, background:"yellow"},
      ]
    },


    // ************ HILO MUSICAL ***********
    {
      text: 'HILO MUSICAL',
      margin: [ 0, 20, 0, 0],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Hilo musical: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.filMusical.existeix) + "\t",  bold: true},
        { text: "\tConexión SW - puerto: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.filMusical.connexioSwitchPort) + "\n",  bold: true},
        { text: "\Observaciones: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.filMusical.observacions) + "\n",  bold: true, background:"yellow"},
      ]
    },


    // ************ TELEMEDICINA ***********
    {
      text: 'TELEMEDICINA',
      margin: [ 0, 20, 0, 0],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Telemedicina: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.telemedicina.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.telemedicina.observacions) + "\n",  bold: true, background:"yellow"},

        { text: "Dispositivos:\t",  color: "grey"},
        { text: "TV32\": ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.telemedicina.dispositius.TV32) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.dispositius.TV32, [true], "blue")},
        { text: "Jabra510: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.telemedicina.dispositius.Jabra510) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.dispositius.Jabra510, [true], "blue")},
        { text: "Camara IP: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.telemedicina.dispositius.camaraIP) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.dispositius.camaraIP, [true], "blue")},
        { text: "DisplayPort-HDMI: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.telemedicina.dispositius.DisplayPort) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.dispositius.DisplayPort, [true], "blue")},

        { text: "Estado: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.telemedicina.estat) + "\n",  bold: true, color: colorText(obj.instalacionsComunicacions.telemedicina.estat, ["deficiente", "muy deficiente"], "red")},

      ]
    },



    // ************ LECTOR CD/DVD EXTERNO ***********
    {
      text: 'LECTOR CD/DVD EXTERNO',
      margin: [ 0, 20, 0, 0],
      style: "Nivell2"
    },

    {
      text: [
        { text: "Lector CD/DVD externo: ",  color: "grey"},
        { text: respSiNo(obj.instalacionsComunicacions.LectorCDDVDExtern.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.LectorCDDVDExtern.existeix, ["false"], "red")},
        { text: respText(obj.instalacionsComunicacions.LectorCDDVDExtern.observacions) + "\n\n\n",  bold: true, background:"yellow"},
      ]
    },




    {
      text: [
        { text: "OBSERVACIONES INSTALACIONES: ",  color: "grey"},
        { text: respText(obj.instalacionsComunicacions.observacions) + "\n\n\n\n",  bold: true, background:"yellow"},
      ]
    },









  ]
}


function generarColumnesRacks (arrRacks){
  let arrPDFColumnesRacks = []

  arrRacks.forEach(function(rack, index){
    let arrItemsRack = []
    arrItemsRack.push({ text: "RACK Nº " + (index + 1) + "\n\n ",  bold: true},)

    arrItemsRack.push({ text: "Ubicación : ", color: "grey"},  { text: ( rack.ubicacio || "") + "\n",  bold: true})
    arrItemsRack.push({ text: "Tipo : ", color: "grey"},  { text: ( rack.tipusRack || "") + "\n",  bold: true})
    arrItemsRack.push(
      { text: "Estado: ",  color: "grey"},
      { text: respText(rack.estatGeneral) + "\n",  bold: true, color: colorText(rack.estatGeneral, ["deficiente", "muy deficiente"], "red")},
    )
    arrItemsRack.push(
      { text: "Aspecto / limpieza: ",  color: "grey"},
      { text: respText(rack.aspecteNeteja) + "\n\n",  bold: true, color: colorText(rack.aspecteNeteja, ["deficiente", "muy deficiente"], "red")},
    )


        arrItemsRack.push(
          { text: "Cerradura rack: ",  color: "grey"},
          { text: respSiNo(rack.pany.existeix) + "\n",  bold: true, color: colorText(rack.pany.existeix, ["false"], "red")},
        )
        arrItemsRack.push(
          { text: "Llave en cerradura: ",  color: "grey"},
          { text: respSiNo(rack.pany.clauAlPany) + "\n",  bold: true, color: colorText(rack.pany.clauAlPany, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Estado cerradura: ",  color: "grey"},
          { text: rack.pany.estatPany + "\n",  bold: true, color: colorText(rack.pany.estatPany, ["abierta"], "red")},
        )
        arrItemsRack.push(
          { text: "zona paso libre rack: ",  color: "grey"},
          { text: respSiNo(rack.zonaPasLliure) + "\n\n",  bold: true, color: colorText(rack.zonaPasLliure, ["false"], "red")},
        )





        arrItemsRack.push({ text: "CABLEADO RACK\n ",  bold: true},)
        arrItemsRack.push(
          { text: "Aspecto: ",  color: "grey"},
          { text: respText(rack.cablejat.aspecte) + "\n",  bold: true, color: colorText(rack.cablejat.aspecte, ["deficiente", "muy deficiente"], "red")},
        )
        arrItemsRack.push(
          { text: "Nº PatchP activos: ",  color: "grey"},
          { text: respText(rack.cablejat.pPanels.numPPanelActius) + "\n",  bold: true},
        )
        arrItemsRack.push(
          { text: "Categoria PatchP: ",  color: "grey"},
          { text: respText(rack.cablejat.pPanels.categoriesPPanel) + "\n",  bold: true},
        )
        arrItemsRack.push(
          { text: "Estado termin.: ",  color: "grey"},
          { text: respText(rack.cablejat.estatTerminacions) + "\n",  bold: true, color: colorText(rack.cablejat.estatTerminacions, ["deficiente", "muy deficiente"], "red")},
        )
        arrItemsRack.push(
          { text: "Duplic. puertos: ",  color: "grey"},
          { text: respSiNo(rack.cablejat.duplicadorPorts) + "\n",  bold: true, color: colorText(rack.cablejat.duplicadorPorts, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Cabl / PP obsoletos: ",  color: "grey"},
          { text: respSiNo(rack.cablejat.cablejatObsolet) + "\n\n",  bold: true, color: colorText(rack.cablejat.cablejatObsolet, ["true"], "red")},
        )




        arrItemsRack.push({ text: "ELECTRICIDAD RACK\n ",  bold: true},)
        arrItemsRack.push(
          { text: "Estado: ",  color: "grey"},
          { text: respText(rack.electricitat.estat) + "\n",  bold: true, color: colorText(rack.electricitat.estat, ["deficiente", "muy deficiente"], "red")},
        )
        arrItemsRack.push(
          { text: "Regleta limpia: ",  color: "grey"},
          { text: respSiNo(rack.electricitat.regletaSuministramentNet) + "\n",  bold: true, color: colorText(rack.electricitat.regletaSuministramentNet, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Regleta sucia: ",  color: "grey"},
          { text: respSiNo(rack.electricitat.regletaSuministramentBrut) + "\n",  bold: true, color: colorText(rack.electricitat.regletaSuministramentBrut, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Observ. Elect.: ",  color: "grey"},
          { text: respText(rack.electricitat.observacions) + "\n\n",  bold: true, },
        )



        arrItemsRack.push(
          { text: "Ventilación rack: ",  color: "grey"},
          { text: respSiNo(rack.ventilacio) + "\n",  bold: true, color: colorText(rack.ventilacio, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Disposit. obsletos: ",  color: "grey"},
          { text: respSiNo(rack.dispositiusObsolets) + "\n\n",  bold: true, color: colorText(rack.dispositiusObsolets, ["true"], "red")},
        )
        arrItemsRack.push(
          { text: "Observ.: ",  color: "grey"},
          { text: respText(rack.observacions) + "\n",  bold: true, },
        )





/*
    { text: "Nº Racks adecuado: ",  color: "grey"},
    { text: respSiNo(obj.instalacionsComunicacions.sala.numRacksAdecuat.existeix) + "\t",  bold: true, color: colorText(obj.instalacionsComunicacions.sala.numRacksAdecuat.existeix, ["false"], "red")},
    { text: respText(obj.instalacionsComunicacions.sala.numRacksAdecuat.observacions) + "\n\n",  bold: true, background:"yellow"},


    { text: "Otras: ",  color: "grey"},  { text: ( || "") + "\n",  bold: true},
*/
    arrPDFColumnesRacks.push({text: arrItemsRack})
  })


  return arrPDFColumnesRacks
}
