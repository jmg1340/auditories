<template>

	<div>

		<cmp_informacioPrevia />
		<cmp_instalacionsSala />
		<cmp_instalacionsLlocsTreball />
		<cmp_instalacionsLAN />
		<cmp_instalacionsPendrivesTelemedicina />

	</div>
	

</template>

<style>
	.jmg_bordeInferior {
		border-bottom: 2px dotted grey;
	}
</style>

<script>
import cmp_informacioPrevia from "./informacio_previa"
import cmp_instalacionsSala from "./instalacions_sala"
import cmp_instalacionsLlocsTreball from "./instalacions_llocsTreball"
import cmp_instalacionsLAN from "./instalacions_LAN"
import cmp_instalacionsPendrivesTelemedicina from "./instalacions_PendrivesTelemedicina"

export default {
	name: 'PageInstalacions',

	components: {
		cmp_informacioPrevia,
		cmp_instalacionsSala,
		cmp_instalacionsSala,
		cmp_instalacionsLlocsTreball,
		cmp_instalacionsLAN,
		cmp_instalacionsPendrivesTelemedicina
	},

	created () {
		// this.assignarAuditoriaSeleccionada()
	},


	data () {
		return {
		}
  	},

  	methods : {
  	},


  	computed: {

  	}
}
</script>
