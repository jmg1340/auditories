<template>

	<q-card-section
		class="text-h6 bg-red-5 text-white q-mb-md" >
			
			<q-icon
				v-if="help"
				dense
				name="info"
				flat
				rounded
				@click="construirHelp(help)"
				class="q-mr-xs"
				color="blue-9"
			/>
			
			{{ titol }}

			<span v-if="titol=='RACKS'" class="text-right">
						 [ {{ numRacks }} / 3 ]
		        <q-btn
		          dense
		          noCaps
		          @click="afegirRack"
		          class="col q-ml-md"
		          color="blue-10"
		        >
		        	Añadir Rack
		        </q-btn>
<!--
		        <q-btn
		          dense
		          round
		          @click="eliminarRack"
		          class="q-ml-md"
		          color="blue-10"
		        >
		        	-
		        </q-btn>
-->

			</span>



			<q-dialog v-model="alertaHelp">
				<cmp_frasesHelp  :arrFrases="arrFrases" />
			</q-dialog>


	</q-card-section>

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

	components: { cmp_frasesHelp },

	props: ['titol', 'help'],

	created () {
	},


	data () {
	  	return {
				arrFrases: null,
				alertaHelp: false	  	}
  	},

	computed: {
		numRacks: function() {
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].instalacionsComunicacions.sala.racks.length
		},
	},

	methods: {
		afegirRack: function() {
			if (this.numRacks < 3 ) {
				this.$store.dispatch("mAuditoria/actAfegirRack")
			} else {
				this.$q.notify({
					color: "red-8",
					textColor: "white",
					message: "No se permiten más de 3 racks",
					position: "top",
					multiLine: true,
					timeout: 1000
				})
			}
		},

		construirHelp: function (punt) {
			this.arrFrases = frasesHelp( punt )
			this.alertaHelp = true
		}

	},

		// eliminarRack: function() {
		// 	this.$store.dispatch("mAuditoria/actEliminarRack")
		// },



}
</script>
