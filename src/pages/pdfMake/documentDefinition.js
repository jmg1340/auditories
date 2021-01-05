// const path = require("vue-html-loader");

import portada from "./dd01_Portada.js"
import index01 from "./dd02_Index01.js"
import datosCentro from "./dd03_DatosCentro.js"
import instalacions01 from "./dd04_Instalacions01.js"
import cu from "./dd05_CU.js"
import seguretat from "./dd06_Seguretat.js"
import formacio from "./dd07_Formacio.js"
import valoracions from "./dd08_Valoracions.js"
import millores from "./dd09_accionsMillora.js"


export default function (objAuditoria) {

	var pagines = [
		portada(objAuditoria),
		index01(objAuditoria),
		datosCentro(objAuditoria),
		instalacions01(objAuditoria),
		cu(objAuditoria),
		seguretat(objAuditoria),
		formacio(objAuditoria),
		valoracions(objAuditoria),
		millores(objAuditoria),
	]


	var contingut = []

	pagines.forEach((arr, i) => {
		arr.forEach((objecte) => {
			contingut.push(objecte)
		})
	});



	var dd =
	{
		pageSize: 'A4',

		footer: function (currentPage, pageCount) {
			return [
				{
					text: 'Queda prohibida, de forma total o parcial y por calquier medio, su explotación, reproducción, divulgación y/o distribución fuera del ámbito de Asepeyo\nDOCUMENTO DE USO INTERNO Y EXCLUSIVO PARA EL PERSONAL DE ASEPEYO',
					alignment: "center",
					fontSize: 8, 
					margin: [5, 3]		// horitzontal, vertical
				},
			]
		},


		header: function (currentPage, pageCount, pageSize) {
			// you can apply any logic and return any valid pdfmake element

			return [
				{
					// alignment: 'justify',
					margin: [15, 10, 10, 70], 	// left, top, right, bottom
					columns: [
						// {
						// 	image: "./logoAsepeyo.jpg",
						// 	width: 150,
						// },
						{
							style: "table_Capsalera",
							table: {
								widths: ['*', 75],
								body: [
									[
										"INFORME AUDITORÍA TÉCNICA (Dirección Tecnologías de Información y Comunicación)",
										"FECHA: " + objAuditoria.data
									],
									["Centro: " + objAuditoria.nomCentre.toUpperCase(), currentPage.toString() + ' / ' + pageCount],
									["Autor: " + objAuditoria.tecnic.toUpperCase(), " "]
								],
							},
						},
					]
				}
			]



			// return [
			// 	{ text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
			// 	{ canvas: [{ type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 }] }
			// ]
		},

		content: contingut,



		styles: {

			table_Capsalera: {
				fontSize: 8,
				color: 'grey',
			},

			table_Dades: {
				fontSize: 12,
				color: 'black',
				tableCellPadding: "20",
				tableBorder: 0
			},



			header: {
				fontSize: 18,
				bold: true
			},


			peuDePagina: {
				alignment: "center",
				fontSize: 7,
				bold: true
			},

			Nivell1: {
				fontSize: 16,
				bold: true,
				alignment: "left",
				background: "lightgrey",
				lineHeight: 1.3
			},

			Nivell2: {
				fontSize: 14,
				bold: true,
				alignment: "left",
				background: "lightgrey",
				lineHeight: 1.2
			},

			estilRacks: {
				fontSize: 10,
				//lineHeight: 1
			},




			quote: {
				italics: true
			},
			small: {
				fontSize: 8
			}
		}


	}

	return dd


}
