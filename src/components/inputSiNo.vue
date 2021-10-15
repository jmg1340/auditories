<template>

	<div class="row items-center q-py-sm q-px-sm jmg_bordeInferior">
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
			<q-radio v-model="campTemplate" val=true :label="etiqV" color="black" dense class="q-ml-sm"/>
			<q-radio v-model="campTemplate" val=false :label="etiqF" color="black" dense class="q-ml-sm" />
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

	props: ['etiqueta', 'arrCamps', 'etiqV', 'etiqF', 'objRack', 'help'],

	components: { cmp_frasesHelp },

	created () {
	},


	data () {
	  	return {
	  		_arrCamps: null,
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
				//console.log("this.objRack: " + this.objRack)
				if (this.objRack !== undefined ){
					const valor = eval("this.objRack['" + this._arrCamps.join("']['") + "']")
					return  (valor == null) ? valor : valor.toString()
				}
				// return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']").toString()
				const valor =  eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']")
				return  (valor == null) ? valor : valor.toString()

			},
			set (value) {
				switch (value){
					case "true": value = true; break;
					case "false": value = false; break;
				}

				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: value, objRack: this.objRack })
			}
		},
	}

}
</script>
