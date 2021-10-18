<template>

	<div class="row items-center q-py-md q-px-sm jmg_bordeInferior">
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
		
		<div class="col-4 q-pr-sm text-left">
			{{ etiqueta}}
		</div>
		<div class="col-7" >
			<!-- <div class="col-8" > -->
				<cmp_checkbox v-for="(objProps, index) in arrObjsCmpChckbx"
					:key="objProps.arrCamp.join('_')+index"
					:etiqueta="objProps.etiqueta"
					:arrCamps="objProps.arrCamp"
					:objRack="objRack"
				/>
			<!-- </div> -->
		</div>





		<q-dialog v-model="alertaHelp">
			<cmp_frasesHelp  :arrFrases="arrFrases" />
		</q-dialog>




	</div>




</template>


<script>
import cmp_frasesHelp from "../components/frasesHelp"
import {frasesHelp} from "../statics/js/_biblia.js"

import cmp_checkbox from "./inputCheckBox"

export default {
	name: 'PageIndex',

	components: { cmp_checkbox, cmp_frasesHelp },

	props: ['etiqueta', 'arrEtiquetes', 'arrArrelCamps', 'arrCampsFinals', 'objRack', 'help'],

	created () {
		this.arrEtiquetes2 = eval(this.arrEtiquetes)
		this.arrArrelCamps2 = eval(this.arrArrelCamps)
		this.arrCampsFinals2 = eval(this.arrCampsFinals)
	},


	data () {
	  	return {
	  		arrEtiquetes2: [],
	  		arrArrelCamps2: [],
	  		arrCampsFinals2: [],
				arrFrases: null,
				alertaHelp: false
	  	}
 	},

  	methods : {
			construirHelp: function (punt) {
				this.arrFrases = frasesHelp( punt )
				this.alertaHelp = true
			}

  	},

  	computed: {
  		arrObjsCmpChckbx: function() {
  			let arr = []
  			this.arrCampsFinals2.forEach( (element, index, array) => {
  				let obj = {}

  				obj.etiqueta = this.arrEtiquetes2[index]


  				// obj.arrCamp = this.arrArrelCamps2.push(this.arrCampsFinals2[index])



  				//obj.arrCamp = []
  				let copiaArrArrelCamps2 = this.arrArrelCamps2.slice(0)
  				// console.log("ARR_OBJS_CMP_CHCHKBX - copiaArrArrelCamps2")
  				// console.log(copiaArrArrelCamps2)
					//
  				// console.log("ARR_OBJS_CMP_CHCHKBX - this.arrCampsFinals2[index]")
  				// console.log(this.arrCampsFinals2[index])



  				copiaArrArrelCamps2.push(this.arrCampsFinals2[index]) // afegim el camp final
  				obj.arrCamp = copiaArrArrelCamps2

  				// console.log("ARR_OBJS_CMP_CHCHKBX - obj.arrCamp")
  				// console.log(obj.arrCamp)

  				arr.push(obj)

  			})

  			return arr
  		},


  	}
}
</script>

<style>
</style>

