<template>

	<div class="columns items-center">
		<div class="col text-center text-h5 text-uppercase" >
			Informacio Inicial
		</div>
		
		<div class="row justify-center">
			<div class="col-md-6 col-12-sm q-gutter-xs borde">
				<!-- ID AUDITORIA -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						id auditoria :
					</div>
					<div class="col-8">
						{{ idAuditoria }}
					</div>
				</div>

				<!-- DATA -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						Data :
					</div>
					<div class="col-8">
						<q-input v-model="data" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>

				<!-- TECNIC -->
				<div class="row items-center q-mb-xl">
					<div class="col-4 q-pr-sm text-right">
						Tecnic :
					</div>
					<div class="col-8">
						<q-input v-model="tecnic" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>





				<!-- CA CODI -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						Codi Centre :
					</div>
					<div class="col-8">
						<q-input v-model="codi" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>

				<!-- CA nom CENTRE -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						Centre :
					</div>
					<div class="col-8">
						<q-input v-model="nom" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>

				<!-- ID SITE BT -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						Id site BT :
					</div>
					<div class="col-8">
						<q-input v-model="IdSiteBT" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>

				<!-- TOTAL USUARIS -->
				<div class="row items-center q-mb-xl">
					<div class="col-4 q-pr-sm text-right">
						Total usuaris :
					</div>
					<div class="col-8">
						<q-input v-model="totalUsuaris" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>






				<!-- CENTRE SECUNDARI -->
				<div class="row items-center">
					<div class="col-4 q-pr-sm text-right">
						Centre secundari: 
					</div>

					<div class="col-8" >
						<q-radio v-model="centreSecundari" val=true label="Sí" color="teal" />
						<q-radio v-model="centreSecundari" val=false label="No" color="red" />
					</div>
				</div>

				<!-- ID CENTRE PRINCIPAL -->
				<div class="row items-center q-mb-xl">
					<div class="col-4 q-pr-sm text-right">
						ID centre principal :
					</div>
					<div class="col-8">
						<q-input v-model="idCentrePrincipal" dense bg-color="brown-2" color="red-10" autogrow filled />
					</div>
				</div>





<!-- 
				<div class="row items-center">
						<div class="col-4 q-pr-sm text-right">
							{{ valorProp.etiqueta }}
						</div>

						<div class="col-8" >
							<q-radio v-model="valorProp.valor" val=true label="Sí" color="teal" />
							<q-radio v-model="valorProp.valor" val=false label="No" color="red" />
						</div>
				</div>
 -->


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
		if ( this.$store.state.mAuditoria.indexArrAuditories != null ){

			idAuditoria = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].idAuditoria 
			data = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].data 
			tecnic = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].tecnic 
			codi = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.codi 
			nom = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.nom 
			IdSiteBT = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.IdSiteBT 
			totalUsuaris = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.totalUsuaris 
			centreSecundari = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.centreSecundari 
			idCentrePrincipal = this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.idCentrePrincipal 
		
		}
	},


	data () {
		return {

			idAuditoria: null,
			data: null,
			tecnic: null,
			codi: null,
			nom: null,
			IdSiteBT: null,
			totalUsuaris: null,
			centreSecundari:null,
			idCentrePrincipal: null,


		}
  	},

  	methods : {
  		assignarAuditoriaSeleccionada: function() {
  			//debugger
  			this.$store.dispatch("mAuditoria/actAssignarAuditoriaSeleccionada")
  		},

	  	is_date: function(d) {
	  		if ( Object.prototype.toString.call(d) === "[Object Date]" ) return true
	  		return false
	  	},

	  	guardar: function () {

	  	}


  	},


  	computed: {


/*
  		classObject () {
  			return {
  				'red-10': this.dades.nom.valor !== null ,
  				'text-display-5': this.dades.nom.valor !== null
  			}
  		}
*/


  	}
}
</script>
