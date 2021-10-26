<template>


		<q-card class="bordered">
			<q-card-section>
				<div class="text-h6">Propuesta de frases</div>
			</q-card-section>

			<q-card-section  >
				<div v-for="(obj, index) in arrFrases" :class="{formatNorma: obj.colorNorma}" :key="index" class="q-pa-sm q-mx-md q-mb-sm" v-html="obj.frase">
					<!-- {{ obj.frase }} -->
				</div>
			</q-card-section>

			<q-card-actions align="right">
				<q-btn flat label="OK" color="primary" v-close-popup />
			</q-card-actions>
		</q-card>



</template>

<style>
	.formatNorma {
		background-color: rgb(231, 214, 166);
	}
</style>

<script>
export default {
	name: 'frasesDialog',

	props: ["alerta", 'arrFrases'],

	created () {
	},


	data () {
	  	return {
	  	}
  	},

}
</script>
