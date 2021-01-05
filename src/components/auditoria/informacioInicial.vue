<template>

	<div class="columns items-center">
		<div class="col text-center text-h5 text-uppercase" >Informacio Inicial</div>
		
		<div class="row justify-center">
			<div class="col-md-6 col-12-sm q-gutter-xs borde">
				<div class="row items-center" v-for="(valorProp, nomProp) in dades">
					<!-- <div class="col"> -->
						<div class="col-4 q-pr-sm text-right">
							{{ valorProp.etiqueta }}
						</div>
					<!-- </div> -->
					<!-- <div class="col"> -->
						<div class="col-8" v-if="nomProp =='idAuditoria'">
							{{ valorProp.valor }}
						</div>
						<div class="col-8" v-else-if="nomProp =='centreSecundari'">
							<q-radio v-model="valorProp.valor" val=true label="Sí" color="teal" />
							<q-radio v-model="valorProp.valor" val=false label="No" color="red" />
						</div>

						<div class="col-8" v-else>
							<q-input v-model="valorProp.valor" dense bg-color="brown-2" color="red-10" autogrow filled />
						</div>



						<div style="height: 50px; border: 1px solid white" v-if="nomProp == 'tecnic' || nomProp == 'totalUsuaris' " /></div>
					<!-- </div> -->
				</div>
			</div>
		</div>

	</div>

</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
export default {
	name: 'PageIndex',

	created () {
	},


	data () {
	  	return {

	  		dades: {
	  			idAuditoria: {
	  				etiqueta: "Id auditoria",
	  				tipusCamp: 'numeric',
	  				valor: null
	  			},
	  			data: { 
	  				etiqueta: "Data", 
	  				tipusCamp: 'text', 
	  				valor: null
	  			},
	  			tecnic:{
	  				etiqueta: "Tecnic",
	  				tipusCamp: 'text', 
	  				valor: null
	  			},

		  		// dades centre assistencial
		  		codi: { 
		  			etiqueta: "Codi", 
		  			tipusCamp: 'text', 
		  			valor: null
		  		},
		  		nom: { 
		  			etiqueta: "Centre", 
		  			tipusCamp: 'text', 
		  			valor: null
		  		},
		  		idSiteBT: { 
		  			etiqueta: "Id Site BT", 
		  			tipusCamp: '', 
		  			valor: null
		  		},
		  		totalUsuaris: { 
		  			etiqueta: "Total usuaris", 
		  			tipusCamp: 'numeric', 
		  			valor: null
		  		},
		  		centreSecundari: { 
		  			etiqueta: "Es un centre secundari ?", 
		  			tipusCamp: 'sino', 
		  			valor: null
		  		},
		  		idCentrePrincipal: { 
		  			etiqueta: "Codi centre principal", 
		  			tipusCamp: 'text', 
		  			valor: null
		  		}

	  		}



/*
	  		dades:[
		  		{ etiqueta: "Id auditoria", camp: "idAuditoria", tipusCamp: 'numeric', valor: null},
		  		{ etiqueta: "Data", camp: "data", tipusCamp: 'text', valor: null},
		  		{ etiqueta: "Tecnic", camp: "tecnic", tipusCamp: 'text', valor: null},
		  		
		  		// dades centre assistencial
		  		{ etiqueta: "Codi", camp: "codi", tipusCamp: 'text', valor: null},
		  		{ etiqueta: "Centre", camp: "nom", tipusCamp: 'text', valor: null},
		  		{ etiqueta: "Id Site BT", camp: "idSiteBT", tipusCamp: '', valor: null},
		  		{ etiqueta: "Total usuaris", camp: "totalUsuaris", tipusCamp: 'numeric', valor: null},
		  		{ etiqueta: "Es un centre secundari ?", camp: "centreSecundari", tipusCamp: 'sino', valor: null},
		  		{ etiqueta: "Codi centre principal", camp: "idCentrePrincipal", tipusCamp: 'text', valor: null},

	  		]
*/



	  	}
  	},

  	methods : {
  		guardar: function() {
  			alert("metode guardar del component INFORMAICIO INICIAL")
  		}
  	},

  	computed: {
  		classObject () {
  			return {
  				'red-10': this.dades.nom.valor !== null ,
  				'text-display-5': this.dades.nom.valor !== null
  			}
  		}
  	}
}
</script>
