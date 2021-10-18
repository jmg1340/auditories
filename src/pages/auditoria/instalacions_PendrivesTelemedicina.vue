<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm">
				
				<cmp_Titol1 titol="Pendrives y Telemedicina" />
				



				<!-- PENDRIVE EMERGENCIA -->
<!-- 
				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Pendrive emergencia" />
					
					<q-card-section>

						<cmp_inputSiNoObsrv 
							etiqueta="Existe ?" 
							arrCamps="['checkList', 'instalacionsComunicacions', 'pendriveEmergencia', 'ubicacioCorrecte', 'existeix']" 
							arrCampsDos="['checkList', 'instalacionsComunicacions', 'pendriveEmergencia', 'ubicacioCorrecte', 'observacions']" 
						/>

						<cmp_inputSiNoObsrv 
							etiqueta="Actualización hecha ?" 
							arrCamps="['checkList', 'instalacionsComunicacions', 'pendriveEmergencia', 'actualitzacio', 'feta']" 
							arrCampsDos="['checkList', 'instalacionsComunicacions', 'pendriveEmergencia', 'actualitzacio', 'observacions']" 
						/>


					</q-card-section>
				</q-card>

 -->
				<!-- PENDRIVE BIOS -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Pendrive BIOS" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-pendrive')"
						class="col q-ml-md"
						color="grey-9"
					/>
					
					<q-card-section>

						<cmp_inputSiNoObsrv 
							etiqueta="PENDRIVE EXISTENTE ?" 
							arrCamps="['instalacionsComunicacions', 'pendriveBIOS', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'pendriveBIOS', 'observacions']" 
						/>

						<cmp_inputText 
							etiqueta="UBICACIÓN:" 
							arrCamps="['instalacionsComunicacions', 'pendriveBIOS', 'ubicacio']"
						/>


					</q-card-section>
				</q-card>


				<!-- HILO MUSICAL -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Hilo musical" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-hiloMusical')"
						class="col q-ml-md"
						color="grey-9"
					/>
					
					<q-card-section>

						<cmp_inputSiNo 
							etiqueta="HILO MUSICAL?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['instalacionsComunicacions', 'filMusical', 'existeix']" 
						/>

						<cmp_inputText 
							etiqueta="SWITCH:" 
							arrCamps="['instalacionsComunicacions', 'filMusical', 'connexioSW']"
						/>
						<cmp_inputText 
							etiqueta="PUERTO:" 
							arrCamps="['instalacionsComunicacions', 'filMusical', 'connexioGi']"
						/>

						<cmp_inputText 
							etiqueta="OBSERVACIONES:" 
							arrCamps="['instalacionsComunicacions', 'filMusical', 'observacions']"
						/>


					</q-card-section>
				</q-card>


				<!-- TELEMEDICINA -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Telemedicina" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-telemedicina')"
						class="col q-ml-md"
						color="grey-9"
					/>

					
					<q-card-section>
						<cmp_inputSiNoObsrv 
							etiqueta="TELEMEDICINA ?" 
							arrCamps="['instalacionsComunicacions', 'telemedicina', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'telemedicina', 'observacions']"
							help="area trabajo telemedicina"
						/>

						<cmp_inputOpcionsMultipleResposta 
							etiqueta="DISPOSITIVOS:"
							arrEtiquetes="['TV32', 'Jabra510', 'Camara IP', 'DisplayPort HDMI']" 
							arrArrelCamps="['instalacionsComunicacions', 'telemedicina', 'dispositius']"
							arrCampsFinals="['TV32', 'Jabra510', 'camaraIP', 'DisplayPort']" 
						/>

						<cmp_inputOpcionsUnicaResposta 
							etiqueta="ESTADO:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'telemedicina', 'estat']" 
						/>

					</q-card-section>
				</q-card>


				<!-- LECTOR CD EXTERN -->

				<q-card class="col-sm-6 col q-mb-md">
				
					<cmp_Titol2 titol="Lector CD/DVD externo" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-lectorCDExterno')"
						class="col q-ml-md"
						color="grey-9"
					/>
					
					<q-card-section>

						<cmp_inputSiNoObsrv 
							etiqueta="LECTOR CD/DVD EXTERNO ?" 
							arrCamps="['instalacionsComunicacions', 'LectorCDDVDExtern', 'existeix']" 
							arrCampsDos="['instalacionsComunicacions', 'LectorCDDVDExtern', 'observacions']" 
						/>

					</q-card-section>
				</q-card>




				<cmp_inputText 
					etiqueta="OBSERVACIONES (INSTALACIONES):" 
					arrCamps="['instalacionsComunicacions', 'observacions']"
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
