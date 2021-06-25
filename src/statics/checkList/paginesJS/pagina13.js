/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina13 (ctx, oAudit){

  /* CAPÇALERA */
	pintaCapsalera(ctx, oAudit)


	/* FORMACIO */
	
	let objForm = oAudit.formacio
	/* -- auriculars */

	new Cercle(ctx.doc, 234.0, 118.0, objForm.auriculars.formacioFeta).pinta()
	new Cercle(ctx.doc, 264.0, 118.0, !objForm.auriculars.formacioFeta && objForm.auriculars.formacioFeta != null).pinta()
	new Quadrat(ctx.doc, 58.0, 150.0, !!objForm.auriculars.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objForm.auriculars.observacions, 66.0, 166.0 - 8);	



	/* -- videoconferencia */

	new Cercle(ctx.doc, 234.0, 203.0, objForm.videoconferencia.formacioFeta).pinta()
	new Cercle(ctx.doc, 264.0, 203.0, !objForm.videoconferencia.formacioFeta && objForm.videoconferencia.formacioFeta != null).pinta()
	new Quadrat(ctx.doc, 58.0, 269.0, !!objForm.videoconferencia.instruccionsEntregades).pinta() 
	new Quadrat(ctx.doc, 58.0, 284.0, !!objForm.videoconferencia.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objForm.videoconferencia.observacions, 66.0, 300.0 - 8);	


	/* -- llicència M3 */

	new Cercle(ctx.doc, 234.0, 339.0, objForm.llicenciesM3.formacioFeta).pinta()
	new Cercle(ctx.doc, 264.0, 339.0, !objForm.llicenciesM3.formacioFeta && objForm.llicenciesM3.formacioFeta != null).pinta()
	new Quadrat(ctx.doc, 58.0, 378.0, !!objForm.llicenciesM3.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objForm.llicenciesM3.observacions, 66.0, 398.0 - 8);	



	/* -- Telefon supervivencia */

	new Cercle(ctx.doc, 234.0, 475.0, objForm.telefonSupervivencia.formacioFeta).pinta()
	new Cercle(ctx.doc, 264.0, 475.0, !objForm.telefonSupervivencia.formacioFeta && objForm.telefonSupervivencia.formacioFeta != null).pinta()
	new Quadrat(ctx.doc, 58.0, 521.0, !!objForm.telefonSupervivencia.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objForm.telefonSupervivencia.observacions,66.0, 542.0 - 8);	


		/* -- Observacions */
	ctx.doc.text(objForm.observacions, 64.0, 646.0 - 8);	

}