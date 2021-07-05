<template>

	<q-card-section
		class="text-h6 bg-red-5 text-white q-mb-md" >
			{{ titol }}

			<span v-if="titol=='RACKS'" class="text-right">
						 [ {{ numRacks }} / 5 ]
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

	</q-card-section>

</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
export default {
	name: 'PageIndex',

	props: ['titol'],

	created () {
	},


	data () {
	  	return {
	  		//numRacks: 0
	  	}
  	},

	computed: {
		numRacks: function() {
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].instalacionsComunicacions.sala.racks.length
		},
	},

	methods: {
		afegirRack: function() {
			if (this.numRacks < 5 ) {
				this.$store.dispatch("mAuditoria/actAfegirRack")
			} else {
				this.$q.notify({
					color: "red-8",
					textColor: "white",
					message: "No se permiten más de 5 racks",
					position: "top",
					multiLine: true,
					timeout: 1000
				})
			}
		},

		frases: function() {

		}

	},

		// eliminarRack: function() {
		// 	this.$store.dispatch("mAuditoria/actEliminarRack")
		// },



}
</script>
