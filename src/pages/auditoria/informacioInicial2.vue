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
				<cmp_inputData etiqueta="Data:" arrCamps="['dadesCentre', 'data']" />
				<cmp_inputText etiqueta="Centre:" arrCamps="['dadesCentre', 'nomCentre']" />
				<cmp_inputText etiqueta="Tecnic:" arrCamps="['dadesCentre', 'tecnic']" class="q-mb-lg" />

				<cmp_inputText etiqueta="sector:" arrCamps="['dadesCentre', 'sector']" class="" />
				<cmp_inputText etiqueta="domicili:" arrCamps="['dadesCentre', 'domicili']" class="" />
				<cmp_inputText etiqueta="DC:" arrCamps="['dadesCentre', 'DC']" class="" />
				<cmp_inputText etiqueta="interlocutors:" arrCamps="['dadesCentre', 'interlocutors']" class="" />

			</q-card>

		</div>

		<cmp_informacioPrevia />


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

}
</script>
