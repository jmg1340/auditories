/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina11 (ctx, oAudit){

  /* CAPÇALERA */
	pintaCapsalera(ctx, oAudit)


	/* SEGURETAT DE LA INFORMACIO */
	
	/* -- mesas limpias */
	let objML = oAudit.seguretatInformacio.taulesNetes

	new Cercle(ctx.doc, 234.0, 211.0, objML.documentacioSobreTaules.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 211.0, !objML.documentacioSobreTaules.existeix && objML.documentacioSobreTaules.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 211.0, !!objML.documentacioSobreTaules.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objML.documentacioSobreTaules.observacions, 360.0, 215.0 - 8);	

	new Cercle(ctx.doc, 234.0, 228.0, objML.documentacioImpresores.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 228.0, !objML.documentacioImpresores.existeix && objML.documentacioImpresores.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 228.0, !!objML.documentacioImpresores.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objML.documentacioImpresores.observacions, 360.0, 232.0 - 8);	

	new Cercle(ctx.doc, 234.0, 245.0, objML.documentacioPapeleres.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 245.0, !objML.documentacioPapeleres.existeix && objML.documentacioPapeleres.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 245.0, !!objML.documentacioPapeleres.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objML.documentacioPapeleres.observacions, 360.0, 249.0 - 8);	



	/* -- destruccio de documents */
	let objDD = oAudit.seguretatInformacio.destruccioDocuments

	new Cercle(ctx.doc, 234.0, 279.0, objDD.destructoraPapers.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 279.0, !objDD.destructoraPapers.existeix && objDD.destructoraPapers.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 279.0, !!objDD.destructoraPapers.observacionsPapers).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objDD.destructoraPapers.observacionsPapers, 360.0, 283.0 - 8);	

	new Cercle(ctx.doc, 234.0, 296.0, objDD.destructoraPapers.complementCDs).pinta()
	new Cercle(ctx.doc, 263.0, 296.0, !objDD.destructoraPapers.complementCDs && objDD.destructoraPapers.complementCDs != null).pinta()
	new Quadrat(ctx.doc, 293.0, 296.0, !!objDD.destructoraPapers.observacionsCDs).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objDD.destructoraPapers.observacionsCDs, 360.0, 300.0 - 8);	

	ctx.doc.text(objDD.destructoraPapers.quantitat, 232.0, 317.0 - 8);


	new Cercle(ctx.doc, 234.0, 330.0, objDD.contenidorSegur.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 330.0, !objDD.contenidorSegur.existeix && objDD.contenidorSegur.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 330.0, !!objDD.contenidorSegur.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objDD.contenidorSegur.observacions, 360.0, 334.0 - 8);	

	ctx.doc.text(objDD.contenidorSegur.quantitat, 232.0, 352.0 - 8);



	/* -- orientacio pantalles */
	let objOP = oAudit.seguretatInformacio.OrientacioPantalles

	new Cercle(ctx.doc, 234.0, 381.0, objOP.exterior).pinta()
	new Cercle(ctx.doc, 263.0, 381.0, !objOP.exterior && objOP.exterior != null).pinta()
	new Quadrat(ctx.doc, 293.0, 381.0, !!objOP.observacionsExterior).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objOP.observacionsExterior, 360.0, 385.0 - 8);	

	new Cercle(ctx.doc, 234.0, 398.0, objOP.zonaPas).pinta()
	new Cercle(ctx.doc, 263.0, 398.0, !objOP.zonaPas && objOP.zonaPas != null).pinta()
	new Quadrat(ctx.doc, 293.0, 398.0, !!objOP.observacionsZonaPas).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objOP.observacionsZonaPas, 360.0, 402.0 - 8);	


	/* -- cartelleria LOPD */
	let objCL = oAudit.seguretatInformacio.carteleriaLOPD

	new Cercle(ctx.doc, 234.0, 432.0, objCL.PROAS).pinta()
	new Cercle(ctx.doc, 263.0, 432.0, !objCL.PROAS && objCL.PROAS != null).pinta()
	new Quadrat(ctx.doc, 293.0, 432.0, !!objCL.observacionsPROAS).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objCL.observacionsPROAS, 360.0, 436.0 - 8);	

	new Cercle(ctx.doc, 234.0, 449.0, objCL.CEX).pinta()
	new Cercle(ctx.doc, 263.0, 449.0, !objCL.CEX && objCL.CEX != null).pinta()
	new Quadrat(ctx.doc, 293.0, 449.0, !!objCL.observacionsCEX).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objCL.observacionsCEX, 360.0, 453.0 - 8);	




	/* -- Gestion activos */
	let objMB = oAudit.seguretatInformacio.materialBaixaInventari

	new Cercle(ctx.doc, 234.0, 483.0, objMB.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 483.0, !objMB.existeix && objMB.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 483.0, !!objMB.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objMB.observacions, 360.0, 487.0 - 8);	


	let objSF = oAudit.seguretatInformacio.suportsFisics

	new Cercle(ctx.doc, 234.0, 500.0, objSF.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 500.0, !objSF.existeix && objSF.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 500.0, !!objSF.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSF.observacions, 360.0, 504.0 - 8);	


	let objDS = oAudit.seguretatInformacio.documentacioSensible

	new Cercle(ctx.doc, 234.0, 517.0, objDS.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 517.0, !objDS.existeix && objDS.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 517.0, !!objDS.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objDS.observacions, 360.0, 521.0 - 8);	


	let objEG = oAudit.seguretatInformacio.expedientsGreus

	new Cercle(ctx.doc, 234.0, 534.0, objEG.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 534.0, !objEG.existeix && objEG.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 534.0, !!objEG.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objEG.observacions, 360.0, 538.0 - 8);	


	let objAPI = oAudit.seguretatInformacio.accesAlCentre.personalIntern

	new Cercle(ctx.doc,234.0, 585.0, objAPI.usuarisAmbClaus.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 585.0, !objAPI.usuarisAmbClaus.existeix && objAPI.usuarisAmbClaus.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 585.0, !!objAPI.usuarisAmbClaus.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAPI.usuarisAmbClaus.observacions, 360.0, 589.0 - 8);	

	new Cercle(ctx.doc,234.0, 601.0, objAPI.codisAlarma.tipus == "individuales").pinta()
	new Cercle(ctx.doc, 303.0, 601.0, objAPI.codisAlarma.tipus == "generico").pinta()
	new Quadrat(ctx.doc, 381.0, 602.0, !!objAPI.codisAlarma.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAPI.codisAlarma.observacions, 450.0, 606.0 - 8);	


	let objAPE = oAudit.seguretatInformacio.accesAlCentre.personalExtern

	new Cercle(ctx.doc,234.0, 636.0, objAPE.usuarisAmbClaus.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 636.0, !objAPE.usuarisAmbClaus.existeix && objAPE.usuarisAmbClaus.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 636.0, !!objAPE.usuarisAmbClaus.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAPE.usuarisAmbClaus.observacions, 360.0, 640.0 - 8);	

	new Cercle(ctx.doc,234.0, 652.0, objAPE.codisAlarma.tipus == "individuales").pinta()
	new Cercle(ctx.doc, 304.0, 652.0, objAPE.codisAlarma.tipus == "generico").pinta()
	new Quadrat(ctx.doc, 381.0, 652.0, !!objAPE.codisAlarma.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAPE.codisAlarma.observacions, 450.0, 658.0- 8);	




	let objAFH = oAudit.seguretatInformacio.accesAlCentre.accesForaHorariHabitual

	new Cercle(ctx.doc,234.0, 670.0, objAFH.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 670.0, !objAFH.existeix && objAFH.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 670.0, !!objAFH.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAFH.observacions, 360.0, 674.0 - 8);	





	ctx.doc.text(oAudit.seguretatInformacio.accesAlCentre.observacions, 82.0, 712.0 - 8);

}