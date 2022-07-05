<template>

	<div class="row items-center q-py-sm q-px-sm jmg_bordeInferior" :class="{'text-grey': deshabilitat}">
		
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
		
		<div class="col-4 q-pr-sm text-left text-caption">
			{{ etiqueta }}
		</div>
		<div class="col-7">
			<q-input v-model="campTemplate" dense bg-color="brown-2" color="red-10" autogrow filled class="text-caption " :disable="deshabilitat" />
		</div>
	
	
	
		<q-dialog v-model="alertaHelp">
			<cmp_frasesHelp  :arrFrases="arrFrases" />
		</q-dialog>
	
	
	
	</div>


</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
import cmp_frasesHelp from "../components/frasesHelp"
import {frasesHelp} from "../statics/js/_biblia.js"

export default {
	name: 'PageIndex',
	props: ['etiqueta', 'arrCamps', 'objRack', 'help', 'deshabilitat' ],
	components: { cmp_frasesHelp },

	created() {
	},

	data () {
  	return {
			desactivat: false,
  		_arrCamps: null,
			arrFrases: null,
			alertaHelp: false	  	
  	}
	},

	methods: {
		construirHelp: function (punt) {
			this.arrFrases = frasesHelp( punt )
			this.alertaHelp = true
		}

	},

	computed: {
		campTemplate: {
			get() {
				//debugger
				this._arrCamps = eval(this.arrCamps)   // transforma string a array
				//console.log("this.objRack: " + this.objRack)
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
