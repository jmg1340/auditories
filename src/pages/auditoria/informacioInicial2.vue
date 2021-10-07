<template>

	<div class="columns items-center q-mt-md">
		<div class="col text-center text-h5 text-uppercase q-my-md" >
			Informacio Inicial
		</div>

		<div class="row justify-center">
			<q-card class="col-sm-8 col q-gutter-xs q-pa-sm q-mb-xl">

				<!-- <div class="row items-center">
					<div class="col-4 q-pr-sm text-left">
						id auditoria :
					</div>
					<div class="col-8">
						{{ idAuditoria }}
					</div>
				</div> -->
				<cmp_inputData etiqueta="Data:" arrCamps="['data']" />
				<cmp_inputText etiqueta="Centre:" arrCamps="['nomCentre']" />
				<cmp_inputText etiqueta="Tecnic:" arrCamps="['tecnic']" class="q-mb-lg" />

				<cmp_inputText etiqueta="sector:" arrCamps="['sector']" class="" />
				<cmp_inputText etiqueta="domicili:" arrCamps="['domicili']" class="" />
				<cmp_inputText etiqueta="DC:" arrCamps="['DC']" class="" />
				<cmp_inputText etiqueta="interlocutors:" arrCamps="['interlocutors']" class="" />

			</q-card>


			<cmp_informacioPrevia />


		</div>

	</div>

</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
	import cmp_inputText from "../../components/inputText"
	import cmp_inputSiNo from "../../components/inputSiNo"
	import cmp_inputData from "../../components/inputData"
	import cmp_informacioPrevia from "./informacio_previa"

export default {
	name: 'PageInfo',

	components: {
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputData,
		cmp_informacioPrevia
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

		idAuditoria: function() {
			// debugger;
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].idAuditoria
		},

  	}
}
</script>
