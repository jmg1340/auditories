

export default function(obj) {
   return [


		    {
		      // if you specify width, image will scale proportionally  ~
		      // image: require('assets/logo-asepeyo.jpg'),
		      // image: require('/statics/logo-asepeyo.jpg'),
		      // image: "./logo-Asepeyo.jpg",
		    //   width: 150
		    },

			{
				text: 'DIRECCIÓN TECNOLOGÍAS DE INFORMACIÓN Y COMUNICACIÓN\n',
				fontSize: 30, bold: true, margin: [ 0, 240, 0, 20], alignment: "center"
				// margin: [left, top, right, bottom]
				// margin: [horizontal, vertical]
				// margin: equalLeftTopRightBottom
			},
			{
				text: 'CHECKLIST AUDITORÍA TÉCNICA\n',
				style: 'subheader',
				margin: [ 0, 0, 0, 300],
				alignment: "center"
			},


			{
				canvas: [
					{
						type: 'rect',
						x: 1,
						y: 1,
						w: 10,
						h: 10,
						r: 1,
						lineColor: 'black',
						// color: '#ffffe0',
					},
					
					
					{
						type: 'rect',
						x: 20,
						y: 1,
						w: 10,
						h: 10,
						r: 1,
						lineColor: 'black',
						// color: '#ffffe0',
					},
					{
						type: 'line',
						x1: 21, y1: 2,
						x2: 29, y2: 10,
						lineWidth: 1
					},
					{
						type: 'line',
						x1: 29, y1: 2,
						x2: 21, y2: 10,
						lineWidth: 1
					},



					{
						type: 'ellipse',
						x: 40, y: 5,
						color: 'black',
						fillOpacity: 1,
						r1: 6
					},					

					{
						type: 'ellipse',
						x: 60, y: 5,
						color: 'white',
						fillOpacity: 1,
						r1: 6,
						lineColor: 'black',
					},					


				],
			},








	    {
	      layout: 'noBorders', // optional
	      table: {
	        // headers are automatically repeated if the table spans over multiple pages
	        // you can declare how many rows should be treated as headers
	        headerRows: 1,
	        widths: [ 'auto', 'auto' ],

	        body: [
	          [ { text: 'Centro auditado:', bold: true }, obj.nomCentre ],
	          [ { text: 'Fecha:', bold: true }, obj.data ],
	          [ { text: 'Técnico:', bold: true }, obj.tecnic ]
	        ]
				},
				


	      pageBreak: 'after'
	    },


			{
				canvas: [
					// {
					// 	type: 'rect',
					// 	x: 0,
					// 	y: 0,
					// 	w: 310,
					// 	h: 260,
					// 	r: 5,
					// 	dash: { length: 5 },
					// 	// lineWidth: 10,
					// 	lineColor: 'blue',
					// },
					{
						type: 'rect',
						x: 1,
						y: 1,
						w: 100,
						h: 100,
						r: 4,
						lineColor: 'red',
						color: '#ffffe0',
					},
					{
						type: 'ellipse',
						x: 100, y: 100,
						color: 'white',
						fillOpacity: 1,
						r1: 80, r2: 60
					},					
					// {
					// 	type: 'polyline',
					// 	lineWidth: 3,
					// 	closePath: true,
					// 	points: [{ x: 10, y: 10 }, { x: 35, y: 40 }, { x: 100, y: 40 }, { x: 125, y: 10 }]
					// },
					// {
					// 	type: 'polyline',
					// 	lineWidth: 2,
					// 	color: 'blue',
					// 	lineColor: 'red',
					// 	points: [{ x: 10, y: 110 }, { x: 35, y: 140 }, { x: 100, y: 140 }, { x: 125, y: 110 }, { x: 10, y: 110 }]
					// },
					// {
					// 	type: 'line',
					// 	x1: 40, y1: 60,
					// 	x2: 260, y2: 60,
					// 	lineWidth: 3
					// },
					// {
					// 	type: 'line',
					// 	x1: 40, y1: 80,
					// 	x2: 260, y2: 80,
					// 	lineWidth: 10,
					// 	lineCap: 'round'
					// },
					// {
					// 	type: 'line',
					// 	x1: 40, y1: 100,
					// 	x2: 260, y2: 100,
					// 	lineWidth: 10,
					// 	lineCap: 'square'
					// },

					// {
					// 	type: 'rect',
					// 	x: 150,
					// 	y: 200,
					// 	w: 150,
					// 	h: 50,
					// },
					// {
					// 	type: 'rect',
					// 	x: 10, y: 200, w: 100, h: 10,
					// 	linearGradient: ['red', 'blue']
					// },
					// {
					// 	type: 'rect',
					// 	x: 10, y: 215, w: 100, h: 10,
					// 	linearGradient: ['red', 'green', 'blue']
					// },
					// {
					// 	type: 'rect',
					// 	x: 10, y: 230, w: 100, h: 10,
					// 	linearGradient: ['red', 'yellow', 'green', 'blue']
					// },
					// {
					// 	type: 'ellipse',
					// 	x: 260, y: 140,
					// 	r1: 30, r2: 20,
					// 	linearGradient: ['red', 'green', 'blue', 'red'],
					// }
				]
			}






  ]
}
