<template>

	<div class="row items-center q-py-md q-px-sm jmg_bordeInferior" :class="{'text-grey': deshabilitat}">
		
		<q-icon
			v-if="help"
			dense
			name="info"
			flat
			rounded
			@click="construirHelp(help)"
			class="col-auto q-mr-xs"
			color="blue-9"
		/>
		
		
		
		
		<div class="col-4 q-pr-sm text-left" @dblclick="posarValorANull">
			{{ etiqueta}}
		</div>
		<div class="col-7" >
			<!-- <div class="col-8" > -->
				<q-radio v-for="(opcio) in opcions" :key="opcio.valor" v-model="campTemplate" :val="opcio.valor" :label="opcio.etiq" :color="opcio.color" dense :disable="deshabilitat"  class="q-ml-sm" />
			<!-- </div> -->
		</div>




		<q-dialog v-model="alertaHelp">
			<cmp_frasesHelp  :arrFrases="arrFrases" />
		</q-dialog>



	</div>


</template>

<style>


</style>

<script>
import cmp_frasesHelp from "../components/frasesHelp"
import {frasesHelp} from "../statics/js/_biblia.js"

export default {
	name: 'PageIndex',

	props: ['etiqueta', 'arrCamps', 'propOpcions', 'objRack', 'help', 'deshabilitat'],
	components: { cmp_frasesHelp },


	created () {
	},


	data () {
  	return {
  		_arrCamps: null,
			arrFrases: null,
  		arrOpcions: null,
			desactivat: false,
			alertaHelp: false,
  		objOpcions: {
				sino: [
					{ etiq: "Si", valor: true,   color: "green-8"  },
					{ etiq: "No", valor: false , color: "red-10"}
				],
				oberta_tancada: [
					{ etiq: "Abierta", valor: "abierta",   color: "red-10"  },
					{ etiq: "Cerrada", valor: "cerrada", 	 color: "green-8"}
				],
  			moltBe_moltMalament: [
  				{ etiq: "Muy Deficiente" , valor: "muy deficiente", color: "red" },
  				{ etiq: "Deficiente"     , valor: "deficiente" , color: "orange-8" },
  				{ etiq: "Mejorable" 		 , valor: "mejorable" , color: "orange-3" },
  				{ etiq: "Aceptable"    	 , valor: "aceptable" , color: "green-5" },
  				{ etiq: "Correcto"			 , valor: "correcto" , color: "green-8" }
  			],
  			categoriesPP: [
  				{ etiq: "cat 5" , valor: "cat5" , color: "black"},
  				{ etiq: "cat 5e", valor: "cat5e", color: "black"},
  				{ etiq: "cat 6" , valor: "cat6" , color: "black"},
  				{ etiq: "Mixto" , valor: "mixte", color: "black"},
  			],
  			ubicacioSAI: [
  				{ etiq: "enrackado", 						valor: "enrackado" , 			color: "black"},
  				{ etiq: "suelo del rack", 			valor: "sueloEnRack", 		color: "black"},
  				{ etiq: "suelo junto al rack", 	valor: "sueloJuntoRack",  color: "black"},
  			],
  			tipusRack: [
  				{ etiq: "Rack armario", 	valor: "armario",  color: "black"},
  				{ etiq: "Rack cofre", 		valor: "cofre", 		color: "black"},
  			],
  			nivellCoberturaBateria: [
  				{ etiq: "|",  	 valor: "1",  color: "black"},
  				{ etiq: "||", 	 valor: "2",  color: "black"},
  				{ etiq: "|||",   valor: "3" , color: "black"},
  				{ etiq: "||||",  valor: "4" , color: "black"},
  			],
  			codisAlarma: [
  				{ etiq: "individuales", valor: "individuales",  color: "black"},
  				{ etiq: "generico", 		valor: "generico", 		color: "black"},
  			]
  		}
  	}
	},

	methods : {
		posarValorANull: function(){
			this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: null, objRack: this.objRack })
		},

		construirHelp: function (punt) {
			this.arrFrases = frasesHelp( punt )
			this.alertaHelp = true
		}
},

	computed: {
		opcions: function (){
			//console.log(this.objOpcions[this.propOpcions])
			return this.objOpcions[this.propOpcions]
		},

		campTemplate: {
			get() {
				//debugger
				this._arrCamps = eval(this.arrCamps)   // transforma string a array
				// console.log("this.objRack: " + this.objRack)
				if (this.objRack !== undefined ){
					return eval("this.objRack['" + this._arrCamps.join("']['") + "']")
				}
				return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']")

			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: value, objRack: this.objRack })
			}
		},
  }
}
</script>
