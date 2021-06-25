/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina12 (ctx, oAudit){

  /* CAPÇALERA */
	pintaCapsalera(ctx, oAudit)


	/* SEGURETAT DE LA INFORMACIO */
	
	/* -- seguretat fisica i de l'entorn */
	let objAI = oAudit.seguretatInformacio.alarmaIntrusio

	new Cercle(ctx.doc, 234.0, 119.0, objAI.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 119.0, !objAI.existeix && objAI.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 119.0, !!objAI.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAI.observacions, 360.0, 124.0 - 8);	


	let objAIn = oAudit.seguretatInformacio.alarmaIncendis

	new Cercle(ctx.doc, 234.0, 289.0, objAIn.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 289.0, !objAIn.existeix && objAIn.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 289.0, !!objAIn.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAIn.observacions, 360.0, 294.0 - 8);	


	/* -- Videovigilancia */
	let objVV = oAudit.seguretatInformacio.videovigilancia

	new Cercle(ctx.doc, 234.0, 136.0, objVV.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 136.0, !objVV.existeix && objVV.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 136.0, !!objVV.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.observacions, 360.0, 140.0 - 8);	

	new Cercle(ctx.doc, 234.0, 153.0, objVV.gestioInterna.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 153.0, !objVV.gestioInterna.existeix && objVV.gestioInterna.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 153.0, !!objVV.gestioInterna.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.gestioInterna.observacions, 360.0, 157.0 - 8);	

	ctx.doc.text(objVV.gestioInterna.gravacioImatges.personalAmbAcces, 230.0, 176.0 - 8);	
	ctx.doc.text(objVV.gestioInterna.gravacioImatges.periodeConservacio, 230.0, 192.0 - 8);	



	new Cercle(ctx.doc, 234.0, 204.0, objVV.gestioExterna.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 204.0, !objVV.gestioExterna.existeix && objVV.gestioExterna.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 204.0, !!objVV.gestioExterna.observacionsExistencia).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.gestioExterna.observacionsExistencia, 360.0, 208.0 - 8);	

	ctx.doc.text(objVV.gestioExterna.periodeConservacio, 230.0, 228.0 - 8);	

	new Cercle(ctx.doc, 234.0, 238.0, objVV.gestioExterna.evidencia).pinta()
	new Cercle(ctx.doc, 263.0, 238.0, !objVV.gestioExterna.evidencia && objVV.gestioExterna.evidencia != null).pinta()
	new Quadrat(ctx.doc, 293.0, 238.0, !!objVV.gestioExterna.observacionsEvidencia).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.gestioExterna.observacionsEvidencia, 360.0, 242.0 - 8);	



	new Cercle(ctx.doc, 234.0, 255.0, objVV.retol.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 255.0, !objVV.retol.existeix && objVV.retol.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 255.0, !!objVV.retol.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.retol.observacions, 360.0, 259.0 - 8);	

	new Cercle(ctx.doc, 234.0, 272.0, objVV.carteleriaActualitzada.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 272.0, !objVV.carteleriaActualitzada.existeix && objVV.carteleriaActualitzada.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 272.0, !!objVV.carteleriaActualitzada.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objVV.carteleriaActualitzada.observacions, 360.0, 276.0 - 8);	





	/* -- seguretat de les operacions */
	let objSO = oAudit.seguretatInformacio.centresAlternatiusGADA

	new Cercle(ctx.doc, 234.0, 340.0, objSO.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 340.0, !objSO.existeix && objSO.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 340.0, !!objSO.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSO.observacions, 360.0, 344.0 - 8);	


	let objTS = oAudit.seguretatInformacio.telefonSupervivencia

	new Cercle(ctx.doc, 234.0, 357.0, objTS.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 357.0, !objTS.existeix && objTS.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 357.0, !!objTS.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objTS.observacions, 360.0, 362.0 - 8);	


	let objPP = oAudit.seguretatInformacio.procedimentsPaper

	new Cercle(ctx.doc, 234.0, 374.0, objPP.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 374.0, !objPP.existeix && objPP.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 374.0, !!objPP.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPP.observacions, 360.0, 378.0 - 8);	


	let objPE = oAudit.seguretatInformacio.pendriveEmergencia

	new Cercle(ctx.doc, 234.0, 408.0, objPE.ubicacioCorrecte.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 408.0, !objPE.ubicacioCorrecte.existeix && objPE.ubicacioCorrecte.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 408.0, !!objPE.ubicacioCorrecte.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPE.ubicacioCorrecte.observacions, 360.0, 412.0 - 8);	

	new Cercle(ctx.doc, 234.0, 425.0, objPE.ultimaVersio.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 425.0, !objPE.ultimaVersio.existeix && objPE.ultimaVersio.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 425.0, !!objPE.ultimaVersio.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPE.ultimaVersio.observacions, 360.0, 429.0 - 8);	

	new Cercle(ctx.doc, 234.0, 442.0, objPE.actualitzacio.feta).pinta()
	new Cercle(ctx.doc, 263.0, 442.0, !objPE.actualitzacio.feta && objPE.actualitzacio.feta != null).pinta()
	new Quadrat(ctx.doc, 293.0, 442.0, !!objPE.actualitzacio.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPE.actualitzacio.observacions, 360.0, 446.0 - 8);	





	/* -- seguretat de les comunicacionss */
	let objAS = oAudit.seguretatInformacio.accesSegurSalaComunicacions

	new Cercle(ctx.doc, 234.0, 476.0, objAS.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 476.0, !objAS.existeix && objAS.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 476.0, !!objAS.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAS.observacions, 360.0, 480.0 - 8);	


	let objAR = oAudit.seguretatInformacio.accesSegurRack

	new Cercle(ctx.doc, 234.0, 496.0, objAR.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 496.0, !objAR.existeix && objAR.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 496.0, !!objAR.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objAR.observacions, 360.0, 500.0 - 8);	


	let objSAIR = oAudit.seguretatInformacio.SAIRack

	new Cercle(ctx.doc, 234.0, 513.0, objSAIR.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 513.0, !objSAIR.existeix && objSAIR.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 513.0, !!objSAIR.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objSAIR.observacions, 360.0, 517.0 - 8);	


	let objPuntsX = oAudit.seguretatInformacio.puntsXarxaSalaEspera

	new Cercle(ctx.doc, 234.0, 530.0, objPuntsX.existeix).pinta()
	new Cercle(ctx.doc, 263.0, 530.0, !objPuntsX.existeix && objPuntsX.existeix != null).pinta()
	new Quadrat(ctx.doc, 293.0, 530.0, !!objPuntsX.observacions).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objPuntsX.observacions, 360.0, 534.0 - 8);	


	ctx.doc.text(oAudit.seguretatInformacio.observacions, 70.0, 600.0 - 8);	
}