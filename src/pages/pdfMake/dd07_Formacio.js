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
      text: 'D. FORMACIÓN',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },


    {
      text: [
        { text: "USO DE AURICULARES: ",  color: "grey"},
        { text: respSiNo(obj.formacio.auriculars.formacioFeta) + "\n\n",  bold: true, color: colorText(obj.formacio.auriculars.formacioFeta, [""], "red")},
        { text: respText(obj.formacio.auriculars.observacions) + "\n\n\n\n\n",  bold: true},

        { text: "VIDEOCONFERENCIA: ",  color: "grey"},
        { text: respSiNo(obj.formacio.videoconferencia.formacioFeta) + "\n",  bold: true, color: colorText(obj.formacio.videoconferencia.formacioFeta, [""], "red")},
        { text: "Instrucciones entregadas: ",  color: "grey"},
        { text: respSiNo(obj.formacio.videoconferencia.instruccionsEntregades) + "\n\n",  bold: true, color: colorText(obj.formacio.videoconferencia.instruccionsEntregades, [""], "red")},
        { text: respText(obj.formacio.videoconferencia.observacions) + "\n\n\n\n\n",  bold: true},

        { text: "LICENCIAS M3: ",  color: "grey"},
        { text: respSiNo(obj.formacio.llicenciesM3.formacioFeta) + "\n\n",  bold: true, color: colorText(obj.formacio.llicenciesM3.formacioFeta, [""], "red")},
        { text: respText(obj.formacio.llicenciesM3.observacions) + "\n\n\n\n\n",  bold: true},

        { text: "TELÉFONO SUPERVIVENCIA: ",  color: "grey"},
        { text: respSiNo(obj.formacio.telefonSupervivencia.formacioFeta) + "\n\n",  bold: true, color: colorText(obj.formacio.telefonSupervivencia.formacioFeta, [""], "red")},
        { text: respText(obj.formacio.telefonSupervivencia.observacions) + "\n\n\n\n\n\n\n\n\n",  bold: true},


        { text: "Observaciones: \n",  color: "grey"},  { text: (obj.formacio.observacions || "") + "\n",  bold: true},
      ],

      pageBreak: 'after'
    },






  ]
}
