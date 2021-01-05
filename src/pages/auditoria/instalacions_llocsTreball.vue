<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">
			<!-- SALA DE COMUNICACIONES -->

			<q-card class="col-sm-8 col q-pa-sm">
				
				<!-- <div class="col text-h5 text-white bg-red-10 q-pa-md q-mb-md"></div> -->
				<cmp_Titol1 titol="Area de trabjajo (Puestos de trabajo)" />

				<q-btn
					dense
					noCaps
					label="Frases"
					@click="construirFrases('AreaTrabajo-cableado')"
					class="col q-ml-md"
					color="grey-9"
				/>



				<cmp_inputOpcionsUnicaResposta 
					etiqueta="ESTADO CABLEADO:"
					propOpcions="moltBe_moltMalament"
					arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'estatCablejat']" 
				/>

				<!-- PUNTS DE XARXA -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Tomas de datos" />
				
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('AreaTrabajo-tomasDatos')"
						class="col q-ml-md"
						color="grey-9"
					/>
					<q-card-section>
						<cmp_inputOpcionsUnicaResposta 
							etiqueta="ESTADO:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'estat']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="IDENTIFICACION TOMAS DATOS?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'identificacio', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'identificacio', 'observacions']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="SUFICIENTES TOMAS DATOS ?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'suficientsPunts', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'suficientsPunts', 'observacions']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="HAY MINI SWITCHS ?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'miniSwitchs', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'puntsXarxa', 'miniSwitchs', 'observacions']" 
						/>


					</q-card-section>
				</q-card>



				<!-- ELECTRICITAT -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Electricidad" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('AreaTrabajo-electricidad')"
						class="col q-ml-md"
						color="grey-9"
					/>
				
					<q-card-section>
						<cmp_inputOpcionsUnicaResposta 
							etiqueta="ESTADO:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'estat']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="SUFICIENTES ECHUFES ?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'suficientsEndolls', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'suficientsEndolls', 'observacions']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="USO DE REGLETAS ?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'regletes', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'regletes', 'observacions']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="REGLETAS EN CASCADA ?" 
							arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'regletesCascada', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'llocsDeTeball', 'electricitat', 'regletesCascada', 'observacions']" 
						/>


					</q-card-section>
				</q-card>


				<!-- <q-separator class="q-my-lg" color="red-10" /> -->

				<cmp_inputText 
					etiqueta="OBSERVACIONES:" 
					arrCamps="['instalacionsComunicacions', 'llocsDeTeball', 'observacions']"
				/>



			</q-card>
		</div>


		<q-dialog v-model="alerta">
			<cmp_frasesDialog  :arrFrases="arrFrases" />
		</q-dialog>


	</div>

</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
import cmp_Titol2 from "../../components/titol2"
import cmp_Titol1 from "../../components/titol1"
import cmp_inputText from "../../components/inputText"
import cmp_inputSiNo from "../../components/inputSiNo"
import cmp_inputSiNoObsrv from "../../components/inputSiNoObsrv"
import cmp_inputOpcionsUnicaResposta from "../../components/inputOpcionsUnicaResposta"
import cmp_rack from "../../components/rack"
import cmp_frasesDialog from "../../components/frasesDialog"

import {frasesInforme} from "../../statics/js/_informeFrases.js"

export default {
	name: 'PageInstalacions',

	components: {
		cmp_Titol1,
		cmp_Titol2,
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputSiNoObsrv,
		cmp_inputOpcionsUnicaResposta,
		cmp_rack,
		cmp_frasesDialog
	},

	created () {
		// this.assignarAuditoriaSeleccionada()
	},


	data () {
		return {
			arrFrases: null,
			alerta: false
		}
  	},

  	methods : {
		construirFrases: function (apartat) {
			this.arrFrases = frasesInforme( this.auditoriaActual, apartat )
			this.alerta = true
		}
  	},


  	computed: {
		auditoriaActual: function() {
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]
		},
/* 
		arrRacks: function() { 
			// debugger;
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].checkList.instalacionsComunicacions.sala.racks 
		},

 */ 
 	}
}
</script>
