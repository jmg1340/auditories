<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm">
				
				<cmp_Titol1 titol="VALORACIONES" />
				



				<!-- VALORACIONS USUARIS -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Valoraciones usuarios" />
					
					<q-card-section>

						<cmp_inputText 
							etiqueta="QUEJAS:" 
							arrCamps="['valoracions', 'usuari', 'queixes']"
						/>

						<cmp_inputText 
							etiqueta="SUGERENCIAS:" 
							arrCamps="['valoracions', 'usuari', 'suggeriments']"
						/>

						<cmp_inputText 
							etiqueta="MEJORAS:" 
							arrCamps="['valoracions', 'usuari', 'millores']"
						/>

					</q-card-section>
				</q-card>


				<!-- VALORACIONS TECNIC -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Valoraciones técnico" />
					
					<q-card-section>

						<cmp_inputText 
							etiqueta="VALORACIONES:" 
							arrCamps="['valoracions', 'tecnic', 'valoracions']"
						/>

					</q-card-section>
				</q-card>





			</q-card>
		</div>

	</div>

</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
import cmp_Titol1 from "../../components/titol1"
import cmp_Titol2 from "../../components/titol2"
import cmp_inputText from "../../components/inputText"
import cmp_inputSiNo from "../../components/inputSiNo"
import cmp_inputSiNoObsrv from "../../components/inputSiNoObsrv"
import cmp_inputOpcionsUnicaResposta from "../../components/inputOpcionsUnicaResposta"
import cmp_inputOpcionsMultipleResposta from "../../components/inputOpcionsMultipleResposta"

export default {
	name: 'PageInstalacions',

	components: {
		cmp_Titol1,
		cmp_Titol2,
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputSiNoObsrv,
		cmp_inputOpcionsUnicaResposta,
		cmp_inputOpcionsMultipleResposta
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
