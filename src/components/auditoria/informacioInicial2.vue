<template>

	<div class="columns items-center">
		<div class="col text-center text-h5 text-uppercase" >
			Informacio Inicial
		</div>
		
		<div class="row justify-center">
			<div class="col-md-8 col-12-sm q-gutter-xs borde">
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

					    <q-input filled v-model="data" mask="date" :rules="['date']">
					      <template v-slot:append>
					        <q-icon name="event" class="cursor-pointer">
					          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
					            <q-date 
					            	minimal
					            	mask="YYYY-MM-DD"
					            	:locale="formatCalendari"
					            	v-model="data" 
					            	@input="() => $refs.qDateProxy.hide()" 
					            />
					          </q-popup-proxy>
					        </q-icon>
					      </template>
					    </q-input>


<!-- 						
						<q-input v-model="data" dense bg-color="brown-2" color="red-10" autogrow filled />
 -->						
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
		// this.assignarAuditoriaSeleccionada()
	},


	data () {
		return {
			formatCalendari: {
				days: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte' ],
				daysShort: ['dg', 'dll', 'dm', 'dcr', 'dj', 'dv', 'ds'],
				months: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
				monthsShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
				firstDayOfWeek: 1
			}
		}
  	},

  	methods : {

	  	is_date: function(d) {
	  		if ( Object.prototype.toString.call(d) === "[Object Date]" ) return true
	  		return false
	  	},


  	},


  	computed: {

		idAuditoria: function() { 
			// debugger;
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].idAuditoria 
		},



		data: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].data
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["data"], valor: value} )
			}
		},
		tecnic: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].tecnic 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["tecnic"], valor: value} )
			}
		},
		codi: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.codi 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "codi"], valor: value} )
			}
		},
		nom: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.nom 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "nom"], valor: value} )
			}
		},
		IdSiteBT: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.IdSiteBT 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "IdSiteBT"], valor: value} )
			}
		},
		totalUsuaris: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.totalUsuaris 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "totalUsuaris"], valor: value} )
			}
		},
		centreSecundari: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.centreSecundari 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "centreSecundari"], valor: value} )
			}
		},
		idCentrePrincipal: {
			get() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].CA.idCentrePrincipal 
			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: ["CA", "idCentrePrincipal"], valor: value} )
			}
		},



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
