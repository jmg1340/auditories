<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm">

				<cmp_Titol1 titol="Seguridad de la información" />


				<!-- MESAS LIMPIAS -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Mesas limpias" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-mesasLimpias')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="DOCUMENTACIÓN SOBRE LAS MESAS ?"
							arrCamps="['seguretatInformacio', 'taulesNetes', 'documentacioSobreTaules', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'taulesNetes', 'documentacioSobreTaules', 'observacions']"
							help="seguridad - documentacion mesas"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="DOCUMENTACIÓN EN IMPRESORAS ?"
							arrCamps="['seguretatInformacio', 'taulesNetes', 'documentacioImpresores', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'taulesNetes', 'documentacioImpresores', 'observacions']"
							help="seguridad - documentacion impresoras"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="DOCUMENTACIÓN EN PAPELERAS ?"
							arrCamps="['seguretatInformacio', 'taulesNetes', 'documentacioPapeleres', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'taulesNetes', 'documentacioPapeleres', 'observacions']"
							help="seguridad - documentacion papeleras"
						/>


					</q-card-section>
				</q-card>




				<!-- DESTRUCCIO DE DOCUMENTS -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Destruccion de documentos" />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-destruccion')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="DESTRUCTORAS DE PAPEL ?"
							arrCamps="['seguretatInformacio', 'destruccioDocuments', 'destructoraPapers', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'destruccioDocuments', 'destructoraPapers', 'observacionsPapers']"
							help="seguridad - destructoras de papel"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="TIENE DESTRUCTORA DE CD/DVD ?"
							arrCamps="['seguretatInformacio', 'destruccioDocuments', 'destructoraPapers', 'complementCDs']"
							arrCampsDos="['seguretatInformacio', 'destruccioDocuments', 'destructoraPapers', 'observacionsCDs']"
						/>

						<cmp_inputText
							etiqueta="CANTIDAD DESTRUCTORA DE PAPEL:"
							arrCamps="['seguretatInformacio', 'destruccioDocuments', 'destructoraPapers', 'quantitat']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="CONTENEDOR SEGURO ?"
							arrCamps="['seguretatInformacio', 'destruccioDocuments', 'contenidorSegur', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'destruccioDocuments', 'contenidorSegur', 'observacions']"
							help="seguridad - contenedor seguro"
						/>

						<cmp_inputText
							etiqueta="CANTIDAD CONTENEDOR SEGURO:"
							arrCamps="['seguretatInformacio', 'destruccioDocuments', 'contenidorSegur', 'quantitat']"
						/>


					</q-card-section>
				</q-card>



				<!-- ORIENTACIO MONITORS -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Orientación pantallas" />
					
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-orientacionPantallas')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="EXTERIOR ?"
							arrCamps="['seguretatInformacio', 'OrientacioPantalles', 'exterior']"
							arrCampsDos="['seguretatInformacio', 'OrientacioPantalles', 'observacionsExterior']"
							help="orientacion exterior"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ZONA PASO PACIENTES ?"
							arrCamps="['seguretatInformacio', 'OrientacioPantalles', 'zonaPas']"
							arrCampsDos="['seguretatInformacio', 'OrientacioPantalles', 'observacionsZonaPas']"
							help="orientacion zona paso pacientes"
						/>

					</q-card-section>
				</q-card>



				<!-- CARTELERIA LOPD -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Carteleria LOPD" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-carteleria')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="PROAS ?"
							arrCamps="['seguretatInformacio', 'carteleriaLOPD', 'PROAS']"
							arrCampsDos="['seguretatInformacio', 'carteleriaLOPD', 'observacionsPROAS']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="CONSULTAS MEDICAS ?"
							arrCamps="['seguretatInformacio', 'carteleriaLOPD', 'CEX']"
							arrCampsDos="['seguretatInformacio', 'carteleriaLOPD', 'observacionsCEX']"
						/>

					</q-card-section>
				</q-card>


				<!-- GESTION DE ACTIVOS -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Gestión de activos" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-gestionActivos')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="MATERIAL BAJA INVENTARIO ?"
							arrCamps="['seguretatInformacio', 'materialBaixaInventari', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'materialBaixaInventari', 'observacions']"
							help="gestion activos - material baja inventario"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="EXISTENCIA DE SOPORTES FISICOS (BACKUP) ?"
							arrCamps="['seguretatInformacio', 'suportsFisics', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'suportsFisics', 'observacions']"
							help="gestion activos - soportes fisicos"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="CUSTODIA DOCUMENTACIÓN SENSIBLE ?"
							arrCamps="['seguretatInformacio', 'documentacioSensible', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'documentacioSensible', 'observacions']"
							help="gestion activos - documentacion sensible"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="EXPEDIENTES GRAVES ?"
							arrCamps="['seguretatInformacio', 'expedientsGreus', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'expedientsGreus', 'observacions']"
							help="gestion activos - expedientes graves"
						/>

					</q-card-section>
				</q-card>



				<!-- CONTROL ACCESOS -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Acceso al centro" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-controlAcceso')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="PERSONAL INTERNO - LLAVES ?"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalIntern', 'usuarisAmbClaus', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesAlCentre', 'personalIntern', 'usuarisAmbClaus', 'observacions']"
							help="seguridad - llaves personal interno"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="CODIGOS ALARMA PERS. INTERNO:"
							propOpcions="codisAlarma"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalIntern', 'codisAlarma', 'tipus']"
						/>

						<cmp_inputText
							etiqueta="OBSERVACIONES CODIGOS ALARMA PERS. INTERNO:"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalIntern', 'codisAlarma', 'observacions']"
						/>
<!--
						<cmp_inputSiNoObsrv
							etiqueta="LIBRO REGISTRO PERS. EXTERNO ?"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'llibreRegistre', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'llibreRegistre', 'observacions']"
						/>
 -->
						
						<cmp_inputSiNoObsrv
							etiqueta="PERSONAL EXTERNO - LLAVES ?"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'usuarisAmbClaus', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'usuarisAmbClaus', 'observacions']"
							help="seguridad - llaves personal externo"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="CODIGOS ALARMA PERS. EXTERNO:"
							propOpcions="codisAlarma"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'codisAlarma', 'tipus']"
						/>

						<cmp_inputText
							etiqueta="OBSERVACIONES CODIGOS ALARMA PERS. EXTERNO:"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'personalExtern', 'codisAlarma', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ACCESO FUERA HORARIO HABITUAL ?"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'accesForaHorariHabitual', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesAlCentre', 'accesForaHorariHabitual', 'observacions']"
						/>

						<cmp_inputText
							etiqueta="OBSERVACIONES (CONTROL ACCESOS):"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'observacions']"
						/>

					</q-card-section>
				</q-card>




				<!-- SEGURIDAD FISICA Y DEL ENTORNO -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Seguridad fisica y del entorno" />
					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-seguridadFisicaEntorno')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="ALARMA INTRUSIÓN?"
							arrCamps="['seguretatInformacio', 'alarmaIntrusio', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'alarmaIntrusio', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ALARMA DE INCENDIOS?"
							arrCamps="['seguretatInformacio', 'alarmaIncendis', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'alarmaIncendis', 'observacions']"
						/>

						<q-card class="col-sm-6 col q-mb-md">

							<cmp_Titol2 titol="Videovigilancia" />
							<q-card-section>
								<cmp_inputSiNoObsrv
									etiqueta="EXISTE VIDEOVIGILANCIA?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'existeix']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'observacions']"
								/>

								<cmp_inputSiNoObsrv
									etiqueta="GESTIÓN INTERNA?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioInterna', 'existeix']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'gestioInterna', 'observacions']"
								/>

								<cmp_inputText
									etiqueta="GEST.INT. PERSONAL CON ACCESO:"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioInterna', 'gravacioImatges', 'personalAmbAcces']"
								/>

								<cmp_inputText
									etiqueta="GEST.INT. TIEMPO RETENCIÓN IMAGENES:"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioInterna', 'gravacioImatges', 'periodeConservacio']"
									help="videovigilancia tiempo retencion"
								/>


								<cmp_inputSiNoObsrv
									etiqueta="GESTIÓN EXTERNA?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioExterna', 'existeix']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'gestioExterna', 'observacionsExistencia']"
								/>

								<cmp_inputText
									etiqueta="GEST.EXT. TIEMPO RETENCIÓN IMAGENES:"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioExterna', 'periodeConservacio']"
								/>

								<cmp_inputSiNoObsrv
									etiqueta="EVIDENCIA?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'gestioExterna', 'evidencia']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'gestioExterna', 'observacionsEvidencia']"
									help="videovigilancia evidencia"
								/>

								<cmp_inputSiNoObsrv
									etiqueta="LETRERO INFORMATIVO?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'retol', 'existeix']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'retol', 'observacions']"
								/>

								<cmp_inputSiNoObsrv
									etiqueta="CARTELERIA ACTUALIZADA?"
									arrCamps="['seguretatInformacio', 'videovigilancia', 'carteleriaActualitzada', 'existeix']"
									arrCampsDos="['seguretatInformacio', 'videovigilancia', 'carteleriaActualitzada', 'observacions']"
								/>
							</q-card-section>

						</q-card>


					</q-card-section>
				</q-card>






				<!-- SEGURIDAD DE LAS OPERACIONES -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Seguridad de las operaciones (continuidad negocio)" />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-seguridadOperaciones')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="CENTROS ALTERNATIVOS GADA?"
							arrCamps="['seguretatInformacio', 'centresAlternatiusGADA', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'centresAlternatiusGADA', 'observacions']"
							help="GADA"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="TELEFONO SUPERVIVENCIA?"
							arrCamps="['seguretatInformacio', 'telefonSupervivencia', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'telefonSupervivencia', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="PROCEDIMIENTOS PAPEL?"
							arrCamps="['seguretatInformacio', 'procedimentsPaper', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'procedimentsPaper', 'observacions']"
							help="procedimientos papel"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="PENDRIVE EMERGENCIA - LOCALIZACIÓN CORRECTA?"
							arrCamps="['seguretatInformacio', 'accesAlCentre', 'accesForaHorariHabitual', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'pendriveEmergencia', 'ubicacioCorrecte', 'observacions']"
							help="localizacion pendrive emergencia"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="PENDRIVE EMERGENCIA - ULTIMA VERSIÓN?"
							arrCamps="['seguretatInformacio', 'pendriveEmergencia', 'ultimaVersio', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'pendriveEmergencia', 'ultimaVersio', 'observacions']"
							help="revision actualizacion pendrive emergencia"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="PENDRIVE EMERGENCIA - PROCED. ACTUALIZACIÓN?"
							arrCamps="['seguretatInformacio', 'pendriveEmergencia', 'actualitzacio', 'feta']"
							arrCampsDos="['seguretatInformacio', 'pendriveEmergencia', 'actualitzacio', 'observacions']"
							help="procedimiento actualizacion pendrive emergencia"
						/>

					</q-card-section>
				</q-card>



				<!-- SEGURIDAD DE LAS COMUNICACIONES -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Seguridad de las comunicaciones" />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('seguridad-seguridadComunicaciones')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>

						<cmp_inputSiNoObsrv
							etiqueta="ACCESO SEGURO CUARTO COMUNICACIONES?"
							arrCamps="['seguretatInformacio', 'accesSegurSalaComunicacions', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesSegurSalaComunicacions', 'observacions']"
							help="acceso seguro cuarto"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ACCESO SEGURO RACK?"
							arrCamps="['seguretatInformacio', 'accesSegurRack', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'accesSegurRack', 'observacions']"
							help="acceso seguro rack"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="SAI RACK?"
							arrCamps="['seguretatInformacio', 'SAIRack', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'SAIRack', 'observacions']"
							help="sai rack"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="TOMAS DE DATOS SALA DE ESPERA?"
							arrCamps="['seguretatInformacio', 'puntsXarxaSalaEspera', 'existeix']"
							arrCampsDos="['seguretatInformacio', 'puntsXarxaSalaEspera', 'observacions']"
							help="tomas sala espera"
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
