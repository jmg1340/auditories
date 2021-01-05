<template>

	<q-card-section 
		class="text-h6 bg-orange-5 text-white " >
			Rack {{numRack}} - {{ titol }}
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

	props: ['numRack', 'titol'],

	created () {
	},


	data () {
	  	return {
	  	}
  	},

}
</script>
