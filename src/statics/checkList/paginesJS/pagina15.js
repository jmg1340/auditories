/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina15 (ctx, oAudit){

  /* CAPÇALERA */
	pintaCapsalera(ctx, oAudit)


	/* ACCIONS DE MILLORA */
	
	/* -- Observacionss */
	let objObs = oAudit.accionsMillora.observacions

	new Quadrat(ctx.doc, 75.0, 156.0, objObs.rack.neteja).pinta()
	new Quadrat(ctx.doc, 75.0, 173.0, objObs.rack.sanejar).pinta()
	new Quadrat(ctx.doc, 75.0, 190.0, objObs.rack.retirarPatchP).pinta()
	new Quadrat(ctx.doc, 75.0, 207.0, objObs.rack.retirarRack).pinta()

	new Quadrat(ctx.doc, 75.0, 224.0, objObs.wanSanejar).pinta()

	new Quadrat(ctx.doc, 75.0, 241.0, objObs.sala.neteja).pinta()
	new Quadrat(ctx.doc, 75.0, 258.0, objObs.sala.retirarObjectes).pinta()

	new Quadrat(ctx.doc, 75.0, 275.0, objObs.SAI.revisoDispNoConnectats).pinta()

	new Quadrat(ctx.doc, 75.0, 292.0, objObs.enviarPendriveBIOS).pinta()
	new Quadrat(ctx.doc, 75.0, 309.0, objObs.enviarLatiguillos).pinta()

	new Quadrat(ctx.doc, 75.0, 326.0, objObs.llocsTreball.ampliacioPuntsXarxa).pinta()
	new Quadrat(ctx.doc, 75.0, 343.0, objObs.llocsTreball.revisarPresesXarxa).pinta()
	new Quadrat(ctx.doc, 75.0, 360.0, objObs.llocsTreball.revisarCaixaConexions).pinta()

	new Quadrat(ctx.doc, 75.0, 377.0, objObs.revisarTelemedicina).pinta()
	new Quadrat(ctx.doc, 75.0, 394.0, objObs.revisarVideoconferencia).pinta()
	new Quadrat(ctx.doc, 75.0, 496.0, objObs.enviarWebcam).pinta()

	new Quadrat(ctx.doc, 75.0, 411.0, objObs.CU.enviarAuricularsEvolve65).pinta()
	new Quadrat(ctx.doc, 75.0, 428.0, objObs.CU.enviarAuricularsJabra930).pinta()
	new Quadrat(ctx.doc, 75.0, 445.0, objObs.CU.enviarAltaveu).pinta()

	new Quadrat(ctx.doc, 75.0, 462.0, objObs.enviarLectorCDDVD).pinta()
	new Quadrat(ctx.doc, 75.0, 479.0, objObs.renoveProjector).pinta()


	new Quadrat(ctx.doc, 75.0, 513.0, !!objObs.altres).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objObs.altres, 86.0, 518.0 - 8);	



	/* -- No Conformitats */
	let objNC = oAudit.accionsMillora.NC

	new Quadrat(ctx.doc, 75.0, 581.0, objNC.enviarPendriveEmergencia).pinta()
	new Quadrat(ctx.doc, 75.0, 598.0, objNC.solicitarDestructoraPaper).pinta()
	new Quadrat(ctx.doc, 75.0, 615.0, objNC.solicitarContenidor).pinta()
	new Quadrat(ctx.doc, 75.0, 632.0, objNC.visibilitatPantalles).pinta()
	new Quadrat(ctx.doc, 75.0, 649.0, objNC.salaRackSenseClau).pinta()
	new Quadrat(ctx.doc, 75.0, 666.0, objNC.rackSenseClaus).pinta()
	new Quadrat(ctx.doc, 75.0, 683.0, objNC.carteleriaLOPD).pinta()
	new Quadrat(ctx.doc, 75.0, 700.0, objNC.suportsBackup).pinta()
	new Quadrat(ctx.doc, 75.0, 717.0, objNC.docsSensibles).pinta()

	new Quadrat(ctx.doc, 75.0, 734.0, !!objNC.altres).pinta() // !! converteix un string a boolean; "" es false;
	ctx.doc.text(objNC.altres, 86.0, 739.0 - 8);	




}