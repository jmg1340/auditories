<template>

	<div class="row items-center q-px-sm q-py-sm jmg_bordeInferior">
		<div class="col-4 q-pr-sm q-pr-xs text-left" @dblclick="posarValorANull">
			{{ etiqueta}}
		</div>
		<div class="col-3" >
			<q-radio v-model="campTemplate" val=true label="Sí" color="black" dense class="q-ml-sm" />
			<q-radio v-model="campTemplate" val=false label="No" color="black" dense class="q-ml-sm" />
		</div>
		<div class="col-5">
			<q-input v-model="campTemplate2" dense bg-color="brown-2" color="red-10" autogrow filled />
		</div>
	</div>


</template>

<style>


</style>

<script>
export default {
	name: 'PageIndex',

	props: ['etiqueta', 'arrCamps', 'arrCampsDos', 'objRack'],

	created () {
	},


	data () {
  	return {
  		_arrCamps: null,
  		_arrCampsDos: null
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
