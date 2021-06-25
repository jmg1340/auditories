<template>

	<div class="row items-center q-py-sm q-px-sm jmg_bordeInferior">
		<div class="col-4 q-pr-sm text-left" @dblclick="posarValorANull">
			{{ etiqueta}}
		</div>
		<div class="col-8" >
			<q-radio v-model="campTemplate" val=true :label="etiqV" color="black" dense class="q-ml-sm"/>
			<q-radio v-model="campTemplate" val=false :label="etiqF" color="black" dense class="q-ml-sm" />
		</div>
	</div>


</template>

<style>

</style>

<script>
export default {
	name: 'PageIndex',

	props: ['etiqueta', 'arrCamps', 'etiqV', 'etiqF', 'objRack'],

	created () {
	},


	data () {
	  	return {
	  		_arrCamps: null
	  	}
  	},

	methods : {
		posarValorANull: function(){
			this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: null, objRack: this.objRack })
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
