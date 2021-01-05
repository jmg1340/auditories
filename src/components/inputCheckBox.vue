<template>


	<q-checkbox v-model="campTemplate" :label="etiqueta" color="black" dense class="q-ma-xs " />


</template>

<style>
</style>

<script>
export default {
	name: 'PageIndex',

	props: ['etiqueta', 'arrCamps', 'objRack'],


	created () {
	},


	data () {
	  	return {
	  		_arrCamps: null,
	  	}
  	},

  	computed: {
			campTemplate: {
				get() {

					// this._arrCamps = eval(this.objProps.arrCamp)   // transforma string a array
					// if (this.objRack !== undefined ){
					// 	return eval("this.objRack['" + this._arrCamps.join("']['") + "']")
					// }
					// return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']")

					this._arrCamps = eval(this.arrCamps)   // transforma string a array
					if (this.objRack !== undefined ){
						return eval("this.objRack['" + this._arrCamps.join("']['") + "']")
					}
					return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']")

				},
				set (value) {
					// this.$store.commit( 'mAuditoria/updateCamp', { arrProps: "['" + this.objProps.arrCamp.join("', '") + "']", valor: value, objRack: this.objRack })
					this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: value, objRack: this.objRack })


				}
			},
  	}
}
</script>
