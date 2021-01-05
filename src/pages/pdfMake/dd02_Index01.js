export default function (obj) {
  console.log("directori actual 2: " + process.cwd())

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
    //           [ "Centro: " + obj.nomCentre.toUpperCase() || null,  "" ],
  	//           [ "Autor: " + obj.tecnic.toUpperCase() || null,  "" ]
  	//         ],
  	//       },
    //     },
		// 	]
		// },



    // ****** INDEX ******

		{
			text: 'ÍNDICE',
			fontSize: 12, bold: true, margin: [ 0, 20, 0, 20], alignment: "center"
			// margin: [left, top, right, bottom]
			// margin: [horizontal, vertical]
			// margin: equalLeftTopRightBottom
		},



    {

      // ****** CAPÇALERA ******
      style: "table_Capsalera",
      layout: 'lightHorizontalLines',
      table: {
        widths: [ 175, '*', 15],

        body: [

          ["0. DATOS CENTRO","","5"],
          ["A. INSTALACIONES Y COMUNICACIONES","","6" ],
          ["A.1. INFORMACIÓN (obtenida de GADA / PRIME)","","6" ],
          ["A.1.1 TAREAS REQUERIDAS","","6"],
          ["A.2. SALA DE COMUNICACIONES","","6"],
          ["A.2.1. ¿ES UN CENTRO SECUNDARIO, DEPENDE DEL ROUTER DE OTRA SEDE?","","6"],
          ["A.2.2. ACCESIBILIDAD SALA","","6" ],
          ["A.2.2.1. CERRADURA ACCESO SALA","","6" ],
          ["A.2.2.2. ESTADO CERRADURA SALA","","6"],
          ["A.2.2.3. ZONA PASO LIBRE SALA","","6"],
          ["A.2.3. WAN PROVEEDOR EXTERNO","","6"],
          ["A.2.3.1. ESTADO INSTALACIÓN GENERAL","","6"],
          ["A.2.3.2. EXISTENCIA INSTALACIONES OBSOLETAS","","6"],
          ["A.2.3.3. ID LÍNEA PRINCIPAL","","6"],
          ["A.2.3.4. ID LÍNEA BACKUP","","6"],
          ["A.2.3.5. ESTADO CONVERTIDOR MEDIOS PPAL","","6"],
          ["A.2.3.6. ESTADO CONVERTIDOR MEDIOS BACKUP","","6"],
          ["A.2.4. SAI","","6"],
          ["A.2.4.1. ESTADO SAI","","6" ],
          ["A.2.4.2. CONEXIÓN A SWITCH","","6"],
          ["A.2.4.3. INSTALACIÓN SAI","","6"],
          ["A.2.4.4. ELEMENTOS CONECTADOS","","6"],
          ["A.2.5. ASPECTO/LIMPIEZA SALA","","7"],
          ["A.2.6. CLIMATIZACIÓN SALA","","7"],
          ["A.2.6.1 VENTILACIÓN SALA","","7" ],
          ["A.2.7 LATIGUILLOS RESERVA","","7" ],
          ["A.2.8 HAY ELEMENTOS DE BAJA INVENTARIO","","7"],
          ["A.2.9 ARMARIO RACK","","7"],
          ["A.2.9.1. N.º RACKS","","7"],
          ["A.2.9.2. N.º RACKS ADECUADO","","7" ],
          ["A.2.9.3 UBICACIÓN","","7"],
          ["A.2.9.4 TIPO RACK","","7"],
          ["A.2.9.5. ESTADO POR RACK","","7"],
          ["A.2.9.6. ASPECTO/LIMPIEZA RACK","","7"],
          ["A.2.9.7. CERRADURA RACK","","7" ],
          ["A.2.9.8. LLAVE CERRADURA RACK","","7"],
          ["A.2.9.9 ESTADO CERRADURA RACK","","7"],
          ["A.2.9.10. ZONA PASO LIBRE RACK","","7" ],
          ["A.2.10. CABLEADO RACK","","7"],
          ["A.2.10.1. ASPECTO CABLEADO RACK","","7" ],
          ["A.2.10.2. N.º PATCH PANEL ACTIVOS","","7"],
          ["A.2.10.3. CATEGORÍA PATCH PANEL","","7"],
          ["A.2.10.4. ESTADO TERMINACIONES RACK","","7" ],
          ["A.2.10.5. DUPLICADORES DE PUERTOS","","7" ],
          ["A.2.10.6. CABLEADO Y/O P.PANEL OBSOLETO","","7"],
          ["A.2.11. ELECTRICIDAD RACK","","7"],
          ["A.2.11.1. ESTADO","","7"],
          ["A.2.11.2. REGLETA SUMINISTRO LIMPIO DE SAI","","7"],
          ["A.2.11.3. REGLETA SUMINISTRO SUCIO","","7"],
          ["A.2.11.4 OBSERVACIONES","","7"],
          ["A.2.12. VENTILACIÓN RACK","","7"],
          ["A.2.13. ¿HAY DISPOSITIVOS OBSOLETOS?","","7"],
          ["A.2.14. OBSERVACIONES","","7"],
          ["A.3. ÁREA DE TRABAJO (PUESTOS TRABAJO)","","8"],
          ["A.3.1. CABLEADO","","8"],
          ["A.3.1.1. ESTADO","","8"],
          ["A.3.2. TOMAS DE DATOS","","8"],
          ["A.3.2.1. ESTADO","","8"],
          ["A.3.2.2. IDENTIFICACIÓN TOMAS DATOS","","8"],
          ["A.3.2.3 . SUFICIENTES TOMAS DATOS","","8"],
          ["A.3.2.4. ¿HAY MINISWITCHS?","","8"],
          ["A.3.3. ELECTRICIDAD","","8" ],
          ["A.3.3.1. ESTADO","","8"],
          ["A.3.3.2. ENCHUFES SUFICIENTES","","8"],
          ["A.3.3.3. USO DE REGLETAS","","8"],
          ["A.3.3.4. ¿REGLETAS EN CASCADA?","","8"],
          ["A.3.4. OBSERVACIONES","","8"],
          ["A.4. LAN","","8" ],
          ["A.4.1. EQUIPOS","","8" ],
          ["A.4.1.1. SWITCHS","","8"],
          ["A.4.1.2. APs WIFI","","8"],
          ["A.4.1.3. IMPRESORAS","","8" ],
          ["A.4.1.4. OTROS DISPOSITIVOS","","9" ],
          ["A.4.2. COBERTURA WIFI","","9"],
          ["A.4.3. OBSERVACIONES","","9"],
          ["A.5. CLIMATIZACIÓN","","9"],
          ["A.5.1. EQUIPAMIENTO Y CONEXIONES","","9" ],
          ["A.6. PENDRIVE ACTUALIZACIÓN BIOS","","9"],
          ["A.6.1. PENDRIVE EXISTENTE","","9" ],
          ["A.7. HILO MUSICAL","","9"],

          ["A.7.1. HILO MUSICAL","",".9"],
          ["A.7.2. OBSERVACIONES","",".9"],
          ["A.8. TELEMEDICINA","","9"],
          ["A.8.1. TELEMEDICINA","",".9"],
          ["A.8.2. DISPOSITIVOS","",".9"],
          ["A.8.3. ESTADO","",".9"],
          ["A.9. LECTOR CD/DVD EXTERNO","",".9"],
          ["A.9.1. LECTOR CD/DVD EXTERNO","","9"],
          ["A.10. OBSERVACIONES","","9"],
          ["B. COMUNICACIONES UNIFICADAS","","10"],
          ["B.1. MEDIOS AUDIVISUALES","","10"],
          ["B.1.1 SALA REUNIONES","","10"],
          ["B.1.1.1. CAPACIDAD (N.º PERSONAS APROX)","","10"],
          ["B.1.1.2. MEDIDAS SALA APROX","","10"],
          ["B.1.1.3. EQUIPAMIENTO SALA","","10"],
          ["B.1.1.4. RECOMENDACIONES","","10"],
          ["B.1.2 VIDEOCONFERENCIA SALA","","10"],
          ["B.1.2.1. PRUEBA REALIZADA","","10"],
          ["B.1.2.2. RESULTADO PRUEBA","","10"],
          ["B.2. TELÉFONO SUPERVIVENCIA","","10"],
          ["B.2.1. TELÉFONO SUPERVIVENCIA","","10"],
          ["B.2.2. Id DDI / N.º Teléfono","","10"],
          ["B.2.3. ESTADO","","10"],
          ["B.2.4. UBICACIÓN","","10"],
          ["B.2.5. PRUEBAS","","10"],
          ["B.2.6. OBSERVACIONES","","10"],
          ["B.3. AURICULARES","","10"],
          ["B.3.1. AURICULARES REPUESTO","","10"],
          ["B.3.2. CANTIDAD AURICULARES REPUESTO","","10"],
          ["B.4. OBSERVACIONES","","10"],
          ["C. SEGURIDAD DE LA INFORMACIÓN","","11"],
          ["C.1. (3.1-A5) POLÍTICAS DE SEGURIDAD","","11"],
          ["C.1.1. MESAS LIMPIAS (M-1272.1 Uso de la documentación en soporte papel)","","11"],
          ["C.1.1.1 DOCUMENTACIÓN SOBRE LAS MESAS","","11"],
          ["C.1.1.2 DOCUMENTACIÓN EN IMPRESORAS","","11"],
          ["C.1.1.3 DOCUMENTACIÓN EN PAPELERAS","","11"],
          ["C.1.2. DESTRUCCIÓN DOCUMENTOS","","11"],
          ["C.1.2.1 DESTRUCTORAS PAPEL","","11"],
          ["C.1.2.2 CANTIDAD DESTRUCTORA PAPEL","","11"],
          ["C.1.2.3 CONTENEDOR SEGURO","","11"],
          ["C.1.2.4 CANTIDAD CONTENEDOR SEGURO","","11"],
          ["C.1.3. ORIENTACIÓN PANTALLAS","","11"],
          ["C.1.3.1 EXTERIOR","","11"],
          ["C.1.3.2 ZONAS PASO, PACIENTES","","11"],
          ["C.1.4. CARTELERÍA LOPD","","11"],
          ["C.1.4.1 PROAS","","11"],
          ["C.1.4.2 CONSULTAS MÉDICAS","","11"],
          ["C.2. (3.4-A8) GESTIÓN DE ACTIVOS","","11"],
          ["C.2.1 MATERIAL BAJA INVENTARIO","","11"],
          ["C.2.2.EXISTENCIA SOPORTE FÍSICOS (BACKUP)","","11"],
          ["C.2.3 CUSTODIA DOCUMENTACIÓN SENSIBLE","","11"],
          ["C.2.4 EXPEDIENTES GRAVES","","11"],
          ["C.3. (3.5-A9) CONTROL ACCESOS","","11"],
          ["C.3.1 PERSONAL INTERNO","","11"],
          ["C.3.1.1 LLAVES","","11"],
          ["C.3.1.2 CÓDIGOS ALARMA","","11"],
          ["C.3.2 PERSONAL EXTERNO","","11"],
          ["C.3.2.1 LLAVES","","11"],
          ["C.3.2.2 CÓDIGOS ALARMA","","11"],
          ["C.3.3 ACCESO FUERA HORARIO HABITUAL","","11"],
          ["C.3.4 OBSERVACIONES","","11"],
          ["C.4. (3.7-A11) SEGURIDAD FÍSICA Y DEL ENTORNO","","12"],
          ["C.4.1 ALARMA INTRUSIÓN","","12"],
          ["C.4.2 VIDEOVIGILANCIA","","12"],
          ["C.4.2.1 GESTIÓN INTERNA","","12"],
          ["C.4.2.2 GESTIÓN EXTERNA","","12"],
          ["C.4.2.3 LETRERO INFORMATIVO","","12"],
          ["C.4.3 ALARMA DE INCENDIOS","","12"],
          ["C.5. (3.8-A12) SEGURIDAD DE LAS OPERACIONES","","12"],
          ["C.5.1 CONTINUIDAD DE NEGOCIO (Procedimientos y protocolos del Plan de Continuidad de Negocio (PCN) Manual nº M-1486.0)","","12"],
          ["C.5.1.1 CENTROS ALTERNATIVOS GADA","","12"],
          ["C.5.1.2 TELÉFONO SUPERVIVENCIA","","12"],
          ["C.5.1.3 PROCEDIMIENTOS PAPEL","","12"],
          ["C.5.1.4 PENDRIVE EMERGENCIA","","12"],
          ["C.6. (3.9-A13) SEGURIDAD DE LAS COMUNICACIONES","","12"],
          ["C.6.1 ACCESO SEGURO CUARTO COMUNICACIONES","","12"],
          ["C.6.2 ACCESO SEGURO RACK","","12"],
          ["C.6.3 SAI RACK (APARTADO A.2.4)","","12"],
          ["C.6.4 TOMAS DE DATOS SALA ESPERA","","12"],
          ["C.7 OBSERVACIONES","","12"],
          ["D. FORMACIÓN","","13"],
          ["D.1. USO AURICULARES","","13"],
          ["D.2. VIDEOCONFERENCIA","","13"],
          ["D.3. LICENCIAS M3. ","","13"],
          ["D.4. TELÉFONO SUPERVIVENCIA","","13"],
          ["D.5. OBSERVACIONES","","13"],

        ],
      },
    },





    {
      margin: [ 5, 415, 5, 0 ],    // margin: [left, top, right, bottom]
      style: 'peuDePagina',
      color: "red",
      text: "DOCUMENTO DE USO INTERNO PARA EL PERSONAL DE ASEPEYO ",
    },
    {
      //margin: [ 5, 416, 5, 0 ],    // margin: [left, top, right, bottom]
      style: 'peuDePagina',
      text:"El presente documento es propiedad exclusiva de ASEPEYO. Queda prohibida, de forma total o parcial y por cualquier medio, su explotación, reproducción, divulgación y/o distribución fuera de Asepeyo salvo determinados supuestos (contrato de confidencialidad o autorización expresa de la Dirección.",
      //pageBreak: 'after'
    }



  ]




}
