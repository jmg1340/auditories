export default function (obj) {
  console.log(obj)

  return [

    {
			// alignment: 'justify',
			columns: [
        // {
    		// 	image: "./logoAsepeyo.jpg",
    		// 	width: 150,
    		// },
        {
          style: "table_Capsalera",
          table: {
            widths: [ '*', 75],
  	        body: [
              [
                "INFORME AUDITORÍA TÉCNICA (Dirección Tecnologías de Información y Comunicación)",
                "FECHA: " + obj.data
              ],
              [ "Centro: " + obj.nomCentre.toUpperCase(),  "" ],
  	          [ "Autor: " + obj.tecnic.toUpperCase(),  "" ]
  	        ],
  	      },
        },
			]
		},






      // ****** INDEX ******

			{
				text: '0. DATOS CENTRO',
        margin: [ 0, 120, 0, 20],
        style: "Nivell1"
			},


      {
        margin: [ 50, 20, 50, 20],
        style: "table_Dades",
        table: {

          widths: [ 200, "*"],
          body: [
            [ "Centro:",                  obj.nomCentre ],
            [ "Sector:",                  obj.sector ],
            [ "Id:",                      obj.instalacionsComunicacions.informacioPrevia.CA.codi ],
            [ "Domicilio: ",              obj.domicili ],
            [ "Auditor responsable: ",    obj.tecnic ],
            [ "Responsable centro: ",     obj.DC ],
            [ "Interlocutores: ",         obj.interlocutors ],
          ],
        },
      },






      {
        margin: [ 5, 360, 5, 0 ],    // margin: [left, top, right, bottom]
        style: 'peuDePagina',
        color: "red",
        text: "DOCUMENTO DE USO INTERNO Y EXCLUSIVO PARA EL PERSONAL DE ASEPEYO ",
	    },
      {
        //margin: [ 5, 416, 5, 0 ],    // margin: [left, top, right, bottom]
        style: 'peuDePagina',
        text:"Queda prohibida, de forma total o parcial y por cualquier medio, su explotación, reproducción, divulgación y/o distribución fuera del ámbito de Asepeyo",
	      //pageBreak: 'after'
	    }



  ]
}
