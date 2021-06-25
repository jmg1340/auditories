/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaPagina14 (ctx, oAudit){

  /* CAPÇALERA */
	pintaCapsalera(ctx, oAudit)


	/* VALORACIONS */
	
	let objForm = oAudit.valoracions

	ctx.doc.text(objForm.usuari.queixes,78.0, 164.0 - 8);	
	ctx.doc.text(objForm.usuari.suggeriments, 78.0, 303.0 - 8);	
	ctx.doc.text(objForm.usuari.millores, 78.0, 438.0 - 8);	

	ctx.doc.text(objForm.tecnic.valoracions, 78.0, 586.0 - 8);	


}