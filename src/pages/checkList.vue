<template>
	<div>
		<div class="text-h5">CheckList</div>

		<iframe id="iframe"
			style="border: 1px solid black; text-align: center"
			width="800"
			height="1047"
		></iframe>

	</div>

</template>

<script>
export default {
	created(){
		this.generarCheckList()
	},
	
	
	methods:{
		generarCheckList: function(){

			var pagines = [
				"Pagina_01",
				"Pagina_02",
				// "Pagina_03",
				// "Pagina_04",
				// "Pagina_05",
				// "Pagina_06",
				// "Pagina_07",
				// "Pagina_08",
				// "Pagina_09",
				// "Pagina_10",
				// "Pagina_11",
				// "Pagina_12",
				// "Pagina_13",
				// "Pagina_14",
				// "Pagina_15",
				// "Pagina_16",
				// "Pagina_17",
				// "Pagina_18",
				// "Pagina_19",
				// "Pagina_20",
				// "Pagina_21",
			]

			

			var stream = blobStream();
			// console.log(stream)
			var ctx = new canvas2pdf.PdfContext(stream);
			
			// console.log(ctx)
			// return

			const oAudit = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]

			pagines.forEach( function(pagina){
				
				ctx.doc.addPage( {
					size: 'A4',
					margins: {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0
					},
					layout: /Pagina_(17|18|19|20|21)/.test(pagina) ? "landscape" : "portrait"
				})


				var background = new Image();
				background.crossOrigin="anonymous"
				background.src = `../statics/checkList/paginesJPG/${pagina}.jpg`;

				// Make sure the image is loaded first otherwise nothing will draw.
				background.onload = function(){
					if (/Pagina_(17|18|19|20|21)/.test(pagina)){
						ctx.drawImage(background, 0, 0, 841.89, 595.28);
					}else{
						ctx.drawImage(background, 0, 0, 595.28, 841.89);
					}


					
					ctx.fillStyle='red';
					ctx.doc.fontSize(8)

					// ctx.fillRect(50,50,100,100);
					
					switch (pagina){
						case "Pagina_01": pintaPagina01(ctx, oAudit); break;
						case "Pagina_02": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_03": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_04": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_05": pintaPagina05(ctx, oAudit); break;
						case "Pagina_06": pintaPagina06(ctx, oAudit); break;
						case "Pagina_07": pintaPagina07(ctx, oAudit); break;
						case "Pagina_08": pintaPagina08(ctx, oAudit); break;
						case "Pagina_09": pintaPagina09(ctx, oAudit); break;
						case "Pagina_10": pintaPagina10(ctx, oAudit); break;
						case "Pagina_11": pintaPagina11(ctx, oAudit); break;
						case "Pagina_12": pintaPagina12(ctx, oAudit); break;
						case "Pagina_13": pintaPagina13(ctx, oAudit); break;
						case "Pagina_14": pintaPagina14(ctx, oAudit); break;
						case "Pagina_15": pintaPagina15(ctx, oAudit); break;
						case "Pagina_16": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_17": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_18": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_19": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_20": pintaCapsalera(ctx, oAudit); break;
						case "Pagina_21": pintaCapsalera(ctx, oAudit); break;
					}
					
				}			// final background.onload

			});   // final pagines.forEach


			ctx.end()
			ctx.stream.on('finish', function () {
				const iframe = document.getElementById('iframe');
				iframe.src = ctx.stream.toBlobURL('application/pdf');
			});
			
		} // final generarCheckList

	}

}

</script>
	

<style>

</style>