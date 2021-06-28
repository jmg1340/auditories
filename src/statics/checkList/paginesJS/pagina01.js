/* 
Pinta les respostes del la 	PAGINA 1, segons les cooredenades
*/

function pintaPagina01 (ctx, oAudit){
	console.log ("ESTIC A LA PAGINA01")
	console.log(oAudit)
  /* CAPÇALERA */
	console.log(`oAudit.nomCentre: ${oAudit.nomCentre}`)
	ctx.doc.text(oAudit.nomCentre, 138.0, 720.0 - 8);
	ctx.doc.text(oAudit.data, 138.0, 737.0 - 8);
	ctx.doc.text(oAudit.tecnic, 137.0, 753.0 - 8);


}