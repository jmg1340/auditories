<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm">

				<cmp_Titol1 titol="Comunicaciones unificadas" />




				<!-- MEDIOS AUDIOVISUALES -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Medios audiovisuales" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('cu-mediosAudioVisuales')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="Sala reuniones ?"
							arrCamps="['comunicacionsUnificades', 'salaReunions', 'existeix']"
							arrCampsDos="['comunicacionsUnificades', 'salaReunions', 'observacions']"
						/>

						<cmp_inputText
							etiqueta="Capacidad sala (nº personas aprox):"
							arrCamps="['comunicacionsUnificades', 'salaReunions', 'capacitat']"
						/>

						<cmp_inputText
							etiqueta="Medidas sala:"
							arrCamps="['comunicacionsUnificades', 'salaReunions', 'mides']"
						/>


<!--
						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['comunicacionsUnificades', 'videoconferencia', 'estat']"
						/>
-->

						<cmp_inputOpcionsMultipleResposta
							etiqueta="EQUIPAMIENTO:"
							arrEtiquetes="['SX10', 'SX80', 'Roomkit', 'DX80', 'WebCam', 'tablet', 'mando', 'TV', 'Proyector', 'PC', 'altavoz Jabra', 'displayPortHDMI', 'conversorVGA_HDMI', 'cableAudio', 'duplicadorHDMI']"
							arrArrelCamps="['comunicacionsUnificades', 'salaReunions', 'dispositius']"
							arrCampsFinals="['SX10', 'SX80', 'roomkit', 'DX80', 'camaraWeb', 'tablet', 'mando', 'TV', 'projector', 'PC', 'altaveu', 'displayPortHDMI', 'conversorVGA_HDMI', 'cableAudio', 'duplicadorHDMI']"
						/>


						<q-separator></q-separator>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="RECOMENDACIONES:"
							arrEtiquetes="['Renovar proyector', 'Dotación webcam', 'Dotación altavoz Jabra']"
							arrArrelCamps="['comunicacionsUnificades', 'salaReunions', 'recomanacions']"
							arrCampsFinals="['renovarPorjector', 'dotacioWebCam', 'DotacioJabra']"
						/>
						<cmp_inputText
							etiqueta="Otras recomendaciones:"
							arrCamps="['comunicacionsUnificades', 'salaReunions', 'recomanacions', 'altres']"
						/>


						<q-separator></q-separator>



						<cmp_inputSiNoObsrv
							etiqueta="Videoconferencia operativa?"
							arrCamps="['comunicacionsUnificades', 'videoconferencia', 'operativa']"
							arrCampsDos="['comunicacionsUnificades', 'videoconferencia', 'observacionsOperativa']"
						/>



						<cmp_inputSiNoObsrv
							etiqueta="Prueba videoconferencia ?"
							arrCamps="['comunicacionsUnificades', 'videoconferencia', 'prova', 'feta']"
							arrCampsDos="['comunicacionsUnificades', 'videoconferencia', 'prova', 'observacions']"
						/>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="PRUEBA:"
							arrEtiquetes="['llamada', 'compartirPc', 'audio', 'video']"
							arrArrelCamps="['comunicacionsUnificades', 'videoconferencia', 'prova']"
							arrCampsFinals="['trucada', 'compartirPc', 'audio', 'video']"
						/>


						<cmp_inputOpcionsUnicaResposta
							etiqueta="RESULTADO PRUEBA:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['comunicacionsUnificades', 'videoconferencia', 'prova', 'resultat']"
						/>
<!-- 
						<cmp_inputText
							etiqueta="Observaciones videoconf.:"
							arrCamps="['comunicacionsUnificades', 'videoconferencia', 'observacions']"
						/>
 -->

					</q-card-section>
				</q-card>


				<!-- TELEFON DE SUPERVIVENCIA -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Telefono de supervivencia" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('cu-telefonoSupervivencia')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="Existe ?"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'existeix']"
							arrCampsDos="['comunicacionsUnificades', 'telefonSupervivencia', 'observacionsExistencia']"
						/>

						<cmp_inputText
							etiqueta="ID DDI / Nº TELEFONO:"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'DDI']"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'estat']"
						/>

						<cmp_inputText
							etiqueta="UBICACIÓN:"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'ubicacio']"
						/>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="PRUEBA:"
							arrEtiquetes="['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'DESCONECTAR TENSION', 'NIVEL AUDIO RING']"
							arrArrelCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'prova']"
							arrCampsFinals="['trucadaEntrant', 'trucadaSortint', 'desconectarTensio', 'nivellAudioRing']"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="NIVEL COBERTURA:"
							propOpcions="nivellCoberturaBateria"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'nivellCobertura']"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="NIVEL BATERIA:"
							propOpcions="nivellCoberturaBateria"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'nivellBateria']"
						/>

						<cmp_inputSiNo
							etiqueta="Conectado a corriente ?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'connectatCorrent']"
						/>

						<cmp_inputSiNo
							etiqueta="TIENE INSTRUCCIONES CERCANAS ?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'instruccionsProperes']"
						/>


						<cmp_inputText
							etiqueta="OBSERVACIONES:"
							arrCamps="['comunicacionsUnificades', 'telefonSupervivencia', 'observacions']"
						/>


					</q-card-section>
				</q-card>



				<!-- AURICULARES REPUESTO -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Auriculares de repuesto" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('cu-auriculares')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="AURICULARES REPUESTO ?"
							arrCamps="['comunicacionsUnificades', 'auricularsRecanvi', 'existeix']"
							arrCampsDos="['comunicacionsUnificades', 'auricularsRecanvi', 'observacions']"
						/>


						<cmp_inputText
							etiqueta="CANTIDAD AURICULARES REPUESTO:"
							arrCamps="['comunicacionsUnificades', 'auricularsRecanvi', 'quantitat']"
						/>

					</q-card-section>
				</q-card>



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
import cmp_Titol1 from "../../components/titol1"
import cmp_Titol2 from "../../components/titol2"
import cmp_inputText from "../../components/inputText"
import cmp_inputSiNo from "../../components/inputSiNo"
import cmp_inputSiNoObsrv from "../../components/inputSiNoObsrv"
import cmp_inputOpcionsUnicaResposta from "../../components/inputOpcionsUnicaResposta"
import cmp_inputOpcionsMultipleResposta from "../../components/inputOpcionsMultipleResposta"
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
		cmp_inputOpcionsMultipleResposta,
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
  	}
}
</script>
