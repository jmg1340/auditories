import { colorText, respSiNo, respText } from './funcionsJMG.js';


export default function (obj) {
  console.log("Objecte auditoria pagina Valoracions")
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
      text: 'E. VALORACIONES',
      margin: [ 0, 15, 0, 20],
      style: "Nivell1"
    },


    {
      text: 'Valoraciones usuarios',
      margin: [ 0, -10, 0, 20],
      style: "Nivell2"
    },


    {
      text: [
        { text: "QUEJAS: \n\n",  color: "grey"},
        { text: respText(obj.valoracions.usuari.queixes) + "\n\n\n\n\n",  bold: true},

        { text: "SUGERENCIAS: \n\n",  color: "grey"},
        { text: respText(obj.valoracions.usuari.suggeriments) + "\n\n\n\n\n",  bold: true},

        { text: "MEJORAS: \n\n",  color: "grey"},
        { text: respText(obj.valoracions.usuari.millores) + "\n\n\n\n\n",  bold: true},
      ],
    },



    {
      text: 'Valoraciones Técnico',
      margin: [ 0, 20, 0, 20],
      style: "Nivell2"
    },

    {
      text: [
        { text: respText(obj.valoracions.tecnic.valoracions),  bold: true},

      ],

      pageBreak: 'after'
    },








  ]
}
