<template>

	<div class="row items-center q-px-sm q-py-sm jmg_bordeInferior">
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
		<div class="col-4 q-pr-sm q-pr-xs text-left" @dblclick="posarValorANull">
			{{ etiqueta}}
		</div>
		<div class="col-3" >
			<q-radio v-model="campTemplate" val=true label="Sí" color="black" dense class="q-ml-sm" />
			<q-radio v-model="campTemplate" val=false label="No" color="black" dense class="q-ml-sm" />
		</div>
		<div class="col-4">
			<q-input v-model="campTemplate2" dense bg-color="brown-2" color="red-10" autogrow filled />
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
	props: ['etiqueta', 'arrCamps', 'arrCampsDos', 'objRack', 'help'],
	components: { cmp_frasesHelp },

	created () {
	},


	data () {
  	return {
  		_arrCamps: null,
  		_arrCampsDos: null,
			alertaHelp: false
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
		campTemplate2: {
			get() {
				//debugger
				this._arrCampsDos = eval(this.arrCampsDos)   // transforma string a array
				// console.log("this.objRack: " + this.objRack)
				if (this.objRack !== undefined ){
					return eval("this.objRack['" + this._arrCampsDos.join("']['") + "']")
				}
				return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCampsDos.join("']['") + "']")

			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCampsDos, valor: value, objRack: this.objRack })
			}
		},
	}
}
</script>
