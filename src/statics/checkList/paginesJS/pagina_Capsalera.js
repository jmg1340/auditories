/* 
Pinta les respostes del la 	PAGINA 6, segons les cooredenades
*/


function pintaCapsalera (ctx, oAudit){

  /* CAPÇALERA */
	ctx.doc.text(oAudit.nomCentre, 139.0, 65.0 - 7);
	ctx.doc.text(oAudit.data, 469.0, 39.0 - 7);
	ctx.doc.text(oAudit.tecnic, 139.0, 78.5 - 7);
	ctx.doc.text("v2020.0109", 476.0, 79.0 - 7);


}