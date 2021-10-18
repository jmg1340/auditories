<template>
	
	<q-card-section 
			class="col-11 text-h5 text-white text-center bg-red-10 q-pa-md q-mb-md" >
			
			<q-icon
				v-if="help"
				dense
				name="info"
				flat
				rounded
				@click="construirHelp(help)"
				class="q-mr-xs"
				color="blue-4"
			/>
			
			
			{{ titol }}




		<q-dialog v-model="alertaHelp">
			<cmp_frasesHelp  :arrFrases="arrFrases" />
		</q-dialog>




	</q-card-section>

</template>

<style>

</style>

<script>
import cmp_frasesHelp from "../components/frasesHelp"
import {frasesHelp} from "../statics/js/_biblia.js"

export default {
	name: 'PageIndex',

	components: { cmp_frasesHelp },

	props: ['titol', 'help'],

	created () {
	},


	data () {
	  	return {
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

}
</script>
