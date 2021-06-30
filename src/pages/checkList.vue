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

			var stream = blobStream();
			// console.log(stream)
			var ctx = new canvas2pdf.PdfContext(stream);


			const pagines = [
				"Pagina_01",
				"Pagina_02",
				"Pagina_03",
				"Pagina_04",
				"Pagina_05",
				"Pagina_06",
				"Pagina_07",
				"Pagina_08",
				"Pagina_09",
				"Pagina_10",
				"Pagina_11",
				"Pagina_12",
				"Pagina_13",
				"Pagina_14",
				"Pagina_15",
				"Pagina_16",
				"Pagina_17",
				"Pagina_18",
				"Pagina_19",
				"Pagina_20",
				"Pagina_21",
			]

			this.construirPagina(ctx, "Pagina_01")
			.then ( () => this.construirPagina(ctx, "Pagina_02"))
			.then ( () => this.construirPagina(ctx, "Pagina_03"))
			.then ( () => this.construirPagina(ctx, "Pagina_04"))
			.then ( () => this.construirPagina(ctx, "Pagina_05"))
			.then ( () => this.construirPagina(ctx, "Pagina_06"))
			.then ( () => this.construirPagina(ctx, "Pagina_07"))
			.then ( () => this.construirPagina(ctx, "Pagina_08"))
			.then ( () => this.construirPagina(ctx, "Pagina_09"))
			.then ( () => this.construirPagina(ctx, "Pagina_10"))
			.then ( () => this.construirPagina(ctx, "Pagina_11"))
			.then ( () => this.construirPagina(ctx, "Pagina_12"))
			.then ( () => this.construirPagina(ctx, "Pagina_13"))
			.then ( () => this.construirPagina(ctx, "Pagina_14"))
			.then ( () => this.construirPagina(ctx, "Pagina_15"))
			.then ( () => this.construirPagina(ctx, "Pagina_16"))
			.then ( () => this.construirPagina(ctx, "Pagina_17"))
			.then ( () => this.construirPagina(ctx, "Pagina_18"))
			.then ( () => this.construirPagina(ctx, "Pagina_19"))
			.then ( () => this.construirPagina(ctx, "Pagina_20"))
			.then ( () => this.construirPagina(ctx, "Pagina_21"))
			.then (() => ctx.end())

/* 
			let arrPromeses = pagines.map((item, index) => this.construirPagina(ctx, item, index))

			Promise.allSettled(arrPromeses)
				.then(() => {
					console.log("TOTES LES PROMESES PROCESSADES")
					console.log(ctx)
					ctx.end()
				})
 */

			ctx.stream.on('finish', function () {
				const iframe = document.getElementById('iframe');
				iframe.src = ctx.stream.toBlobURL('application/pdf');
			});

			
		}, // final generarCheckList






		construirPagina: function(ctx, pagina){
			let that = this
			
			return new Promise(function(resolve, reject) {
				
				const carregaBackground = function(){
					return new Promise((resolt) => {
						var background = new Image();
						background.crossOrigin="anonymous"
						// Make sure the image is loaded first otherwise nothing will draw.
						
						background.onload = function(){
							console.log(pagina, "background.onload")
							resolt(background)
						}		// final background.onload						
						background.src = `../statics/checkList/paginesJPG/${pagina}.jpg`;
					})
				}
				
				carregaBackground()
				.then( (background) => {
					console.log(pagina, "comença carregarBackground.then")

					ctx.doc.addPage( {
						size: 'A4',
						margins: {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0
						},
						layout: /Pagina_(17|18|19|20|21)/.test(pagina) ? "landscape" : "portrait",
					})

					ctx.fillStyle='red';
					ctx.doc.fontSize(8)	


					if (/Pagina_(17|18|19|20|21)/.test(pagina)){
						ctx.drawImage(background, 0, 0, 841.89, 595.28);
					}else{
						ctx.drawImage(background, 0, 0, 595.28, 841.89);
					}

					
					// ctx.fillRect(50,50,100,100);
					const oAudit = that.$store.state.mAuditoria.auditories[that.$store.state.mAuditoria.indexArrAuditories]

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
					
					console.log(pagina, "acaba carregarBackground.then")
					resolve()
				})

			})  // final Promise
		}  // final construirPagina
	}

}

</script>
	

<style>

</style>