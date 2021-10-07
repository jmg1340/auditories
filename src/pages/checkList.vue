<template>
	<q-page class="flex flex-center column">
		<div class="text-h3 q-my-md">CheckList</div>

		<div class="q-ma-lg text-h5" v-if="missatgeVisible">Carregant pàgina <span class="text-h4 text-red">{{ comptador }}</span> de 21</div>
		
		<div class="q-ma-sm text-h6 text-red" v-if="errorVisible">Hi ha hagut un problema a la càrrega de la pàgina {{ comptador }}</div>


		<iframe id="iframe"
			v-if="iframeVisible"
			style="border: 1px solid black; text-align: center"
			width="800"
			height="1047"
		></iframe>

	</q-page>

</template>

<script>
export default {
	created(){
		this.generarCheckList()
	},
	
	data () {
		return {
			comptador: 0,
			missatgeVisible: true,
			iframeVisible: false,
			errorVisible: false
		}
	}, 

	methods:{
		generarCheckList: function(){

			var stream = blobStream();
			var ctx = new canvas2pdf.PdfContext(stream, {
							size: 'A4',
							margins: {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0
							},
							info : {
								Title: "CheckList",
								Author: "JMG",
								Subject: "CheckList auditoria interna DTIC"
							}		
						});


			this.comptador = 1
			this.construirPagina(ctx, "Pagina_01")
			.then ( () => {
				this.comptador = 2
				return this.construirPagina(ctx, "Pagina_02")})
			.then ( () => {
				this.comptador = 3
				return this.construirPagina(ctx, "Pagina_03")})
			.then ( () => {
				this.comptador = 4
				return this.construirPagina(ctx, "Pagina_04")})
			.then ( () => {
				this.comptador = 5
				return this.construirPagina(ctx, "Pagina_05")})
			.then ( () => {
				this.comptador = 6
				return this.construirPagina(ctx, "Pagina_06")})
			.then ( () => {
				this.comptador = 7
				return this.construirPagina(ctx, "Pagina_07")})
			.then ( () => {
				this.comptador = 8
				return this.construirPagina(ctx, "Pagina_08")})
			.then ( () => {
				this.comptador = 9
				return this.construirPagina(ctx, "Pagina_09")})
			.then ( () => {
				this.comptador = 10
				return this.construirPagina(ctx, "Pagina_10")})
			.then ( () => {
				this.comptador = 11
				return this.construirPagina(ctx, "Pagina_11")})
			.then ( () => {
				this.comptador = 12
				return this.construirPagina(ctx, "Pagina_12")})
			.then ( () => {
				this.comptador = 13
				return this.construirPagina(ctx, "Pagina_13")})
			.then ( () => {
				this.comptador = 14
				return this.construirPagina(ctx, "Pagina_14")})
			.then ( () => {
				this.comptador = 15
				return this.construirPagina(ctx, "Pagina_15")})
			.then ( () => {
				this.comptador = 16
				return this.construirPagina(ctx, "Pagina_16")})
			.then ( () => {
				this.comptador = 17
				return this.construirPagina(ctx, "Pagina_17")})
			.then ( () => {
				this.comptador = 18
				return this.construirPagina(ctx, "Pagina_18")})
			.then ( () => {
				this.comptador = 19
				return this.construirPagina(ctx, "Pagina_19")})
			.then ( () => {
				this.comptador = 20
				return this.construirPagina(ctx, "Pagina_20")})
			.then ( () => {
				this.comptador = 21
				return this.construirPagina(ctx, "Pagina_21")})
			.then (() => {
				ctx.end()
				this.missatgeVisible = false
				this.iframeVisible = true
			})
			.catch ( (e) => {
				this.missatgeVisible = false
				this.errorVisible = true
			} )

/* 
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
					return new Promise((resoldre, rebutjar) => {
						
						var background = new Image();
						background.crossOrigin="anonymous"
						// Make sure the image is loaded first otherwise nothing will draw.
						
						background.onload = function(){
							console.log(pagina, "background.onload")
							resoldre(background)
						}		// final background.onload

						background.onerror = function(){
							console.log("ERROOOOOOOOOOOOOOOOOOOORRRRRRR")
							rebutjar()
						}

						background.src = `../statics/checkList/paginesJPG/${pagina}.jpg`;		

					})
				}
				
				carregaBackground()
				.then( (background) => {
					console.log(pagina, "comença carregarBackground.then")

					if (pagina !== "Pagina_01")
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


					ctx.fillStyle='darkblue';
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
					return resolve()

				}).catch(() => {return reject()})

			})  // final Promise
		}  // final construirPagina
	}

}

</script>
	

<style>

</style>