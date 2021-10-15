<template>

	<div class="row items-center q-py-sm q-px-sm jmg_bordeInferior" :class="{'text-grey': desactivat}">
		<div class="col-4 q-pr-sm text-left text-caption">
			{{ etiqueta}}
		</div>
		<div class="col-8">
			<q-input v-model="campTemplate" dense bg-color="brown-2" color="red-10" autogrow filled class="text-caption " :disable="desactivat" />
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
	props: ['etiqueta', 'arrCamps', 'objRack'],

	created() {
		const arrNoActivar = [
			"['seguretatInformacio', 'accesAlCentre', 'personalIntern', 'codisAlarma', 'observacions']",
		]

		if ( arrNoActivar.includes( this.arrCamps )) {
			this.desactivat = true
		}

	},

	data () {
  	return {
			desactivat: false,
  		_arrCamps: null
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
