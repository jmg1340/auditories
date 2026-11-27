<template>
	<q-page class="flex flex-center column">
		<div class="text-h3 q-my-md">CheckList</div>

		<div class="q-ma-lg text-h5" v-if="missatgeVisible">Carregant pàgina <span class="text-h4 text-red">{{ comptador }}</span> de 15</div>
		
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
			this.construirPagina(ctx, "pagina01")
			.then ( () => {
				this.comptador = 2
				return this.construirPagina(ctx, "pagina02")})
			.then ( () => {
				this.comptador = 3
				return this.construirPagina(ctx, "pagina03")})
			.then ( () => {
				this.comptador = 4
				return this.construirPagina(ctx, "pagina04")})
			.then ( () => {
				this.comptador = 5
				return this.construirPagina(ctx, "pagina05")})
			.then ( () => {
				this.comptador = 6
				return this.construirPagina(ctx, "pagina06")})
			.then ( () => {
				this.comptador = 7
				return this.construirPagina(ctx, "pagina07")})
			.then ( () => {
				this.comptador = 8
				return this.construirPagina(ctx, "pagina08")})
			.then ( () => {
				this.comptador = 9
				return this.construirPagina(ctx, "pagina09")})
			.then ( () => {
				this.comptador = 10
				return this.construirPagina(ctx, "pagina10")})
			.then ( () => {
				this.comptador = 11
				return this.construirPagina(ctx, "pagina11")})
			.then ( () => {
				this.comptador = 12
				return this.construirPagina(ctx, "pagina12")})
			.then ( () => {
				this.comptador = 13
				return this.construirPagina(ctx, "pagina13")})
			.then ( () => {
				this.comptador = 14
				return this.construirPagina(ctx, "pagina14")})
			.then ( () => {
				this.comptador = 15
				return this.construirPagina(ctx, "pagina15")})
			// .then ( () => {
			// 	this.comptador = 16
			// 	return this.construirPagina(ctx, "pagina16")})
			// .then ( () => {
			// 	this.comptador = 17
			// 	return this.construirPagina(ctx, "pagina17")})
			// .then ( () => {
			// 	this.comptador = 18
			// 	return this.construirPagina(ctx, "pagina18")})
			// .then ( () => {
			// 	this.comptador = 19
			// 	return this.construirPagina(ctx, "pagina19")})
			// .then ( () => {
			// 	this.comptador = 20
			// 	return this.construirPagina(ctx, "pagina20")})
			// .then ( () => {
			// 	this.comptador = 21
			// 	return this.construirPagina(ctx, "pagina21")})
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
				"pagina01",
				"pagina02",
				"pagina03",
				"pagina04",
				"pagina05",
				"pagina06",
				"pagina07",
				"pagina08",
				"pagina09",
				"pagina10",
				"pagina11",
				"pagina12",
				"pagina13",
				"pagina14",
				"pagina15",
				"pagina16",
				"pagina17",
				"pagina18",
				"pagina19",
				"pagina20",
				"pagina21",
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

					if (pagina !== "pagina01")
						ctx.doc.addPage( {
							size: 'A4',
							margins: {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0
							},
							layout: /pagina(17|18|19|20|21)/.test(pagina) ? "landscape" : "portrait",
						})


					ctx.fillStyle='darkblue';
					ctx.doc.fontSize(10)	


					if (/pagina(17|18|19|20|21)/.test(pagina)){
						ctx.drawImage(background, 0, 0, 841.89, 595.28);
					}else{
						ctx.drawImage(background, 0, 0, 595.28, 841.89);
					}

					
					// ctx.fillRect(50,50,100,100);
					const oAudit = that.$store.state.mAuditoria.auditories[that.$store.state.mAuditoria.indexArrAuditories]

					switch (pagina){
						case "pagina01": pintaPagina01(ctx, oAudit); break;
						case "pagina02": pintaCapsalera(ctx, oAudit); break;
						case "pagina03": pintaPagina03(ctx, oAudit); break;
						case "pagina04": pintaPagina04(ctx, oAudit); break;
						case "pagina05": pintaPagina05(ctx, oAudit); break;
						case "pagina06": pintaPagina06(ctx, oAudit); break;
						case "pagina07": pintaPagina07(ctx, oAudit); break;
						case "pagina08": pintaPagina08(ctx, oAudit); break;
						case "pagina09": pintaPagina09(ctx, oAudit); break;
						case "pagina10": pintaPagina10(ctx, oAudit); break;
						case "pagina11": pintaPagina11(ctx, oAudit); break;
						case "pagina12": pintaPagina12(ctx, oAudit); break;
						case "pagina13": pintaPagina13(ctx, oAudit); break;
						case "pagina14": pintaCapsalera(ctx, oAudit); break;
						case "pagina15": pintaCapsalera(ctx, oAudit); break;
						// case "pagina16": pintaCapsalera(ctx, oAudit); break;
						// case "pagina17": pintaCapsalera(ctx, oAudit); break;
						// case "pagina18": pintaCapsalera(ctx, oAudit); break;
						// case "pagina19": pintaCapsalera(ctx, oAudit); break;
						// case "pagina20": pintaCapsalera(ctx, oAudit); break;
						// case "pagina21": pintaCapsalera(ctx, oAudit); break;
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