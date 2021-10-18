<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">


			<q-card class="col-sm-8 col q-pa-sm">


				<!-- SALA DE COMUNICACIONES -->
				<cmp_Titol1 titol="Sala de comunicaciones" />

				<q-btn
					dense
					noCaps
					label="Frases"
					@click="construirFrases('instalaciones-sala')"
					class="col q-ml-md"
					color="grey-9"
				/>


				<q-card-section>

					<cmp_inputSiNo
						etiqueta="Existe sala? "
						etiqV="Sí"
						etiqF="No"
						arrCamps="['instalacionsComunicacions', 'sala', 'existeix']"
						help="existe sala"
					/>

					<cmp_inputSiNo
						etiqueta="ES UN CENTRO SECUNDARIO? "
						etiqV="Sí"
						etiqF="No"
						arrCamps="['instalacionsComunicacions', 'sala', 'centreSecundari', 'existeix']"
					/>

					<cmp_inputText etiqueta="ID CENTRO PRINCIPAL:" arrCamps="['instalacionsComunicacions', 'sala', 'centreSecundari', 'idCentrePrincipal']" />


				</q-card-section>




				<!-- ACCESIBILIDAD -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Accesibilidad sala" info=""/>

					<q-card-section>
						<cmp_inputSiNoObsrv
							etiqueta="CERRADURA ACCESO SALA?"
							arrCamps="['instalacionsComunicacions', 'sala', 'accessibilitat', 'cerraduraPorta', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'accessibilitat', 'cerraduraPorta', 'observacions']"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO CERRADURA SALA:"
							propOpcions="oberta_tancada"
							arrCamps="['instalacionsComunicacions', 'sala', 'accessibilitat', 'estatPorta']"
						/>

						
						<!-- <q-btn
							dense
							icon="info"
							flat
							rounded
							@click="construirHelp('zona paso libre sala')"
							class="col q-ml-md"
							color="blue-9"
						/> -->

						<cmp_inputSiNoObsrv
							etiqueta="ZONA PASO LIBRE SALA ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'accessibilitat', 'zonaPasLliure', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'accessibilitat', 'zonaPasLliure', 'observacions']"
							help="zona paso libre sala"
						/>

					</q-card-section>
				</q-card>



				<!-- WAN PROVEEDOR EXTERNO -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="WAN proveedor externo" />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-proveedorWAN')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>
						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO GENERAL INSTALACIÓN:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'estatInstalacio']"
							help="wan estado general"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="INSTALACIONES OBSOLETAS ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'instalacionsObsoletes', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'instalacionsObsoletes', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ID LINEA PRINCIPAL ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'idLinia1', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'idLinia1', 'observacions']"
							help="wan ID linea"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ID LINEA BACKUP ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'idLinia2', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'idLinia2', 'observacions']"
							help="wan ID linea"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO CONVERTIDOR MEDIOS PPAL:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'estatConvertidorLinia1']"
							help="wan estado convertidor medios"
						/>

						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO CONVERTIDOR MEDIOS BACKUP:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'sala', 'proveidorWAN', 'estatConvertidorLinia2']"
							help="wan estado convertidor medios"
						/>

					</q-card-section>
				</q-card>




				<!-- SAI -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="SAI" />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-SAI')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>
						<cmp_inputOpcionsUnicaResposta
							etiqueta="ESTADO SAI:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'sala', 'SAI', 'estatSAI']"
							help="sai estado general"
						/>

						<q-separator />

						<cmp_inputSiNo
							etiqueta="CONEXION A SWITCH? "
							etiqV="Sí"
							etiqF="No"
							arrCamps="['instalacionsComunicacions', 'sala', 'SAI', 'connexioSwitch', 'existeix']"
						/>


						<cmp_inputOpcionsMultipleResposta
							etiqueta="CONECTADO A:"
							arrEtiquetes="['PUERTO SW1Gi26']"
							arrArrelCamps="['instalacionsComunicacions', 'sala', 'SAI', 'connexioSwitch']"
							arrCampsFinals="['connexioPortSW1Gi26']"
						/>


						<cmp_inputText etiqueta="OTRA CONEXION - SW:" arrCamps="['instalacionsComunicacions', 'sala', 'SAI', 'connexioSwitch', 'connexio', 'SW']" />

						<cmp_inputText etiqueta="OTRA CONEXION - PUERTO:" arrCamps="['instalacionsComunicacions', 'sala', 'SAI', 'connexioSwitch', 'connexio', 'port']" />

						<q-separator />



						<cmp_inputOpcionsUnicaResposta
							etiqueta="INSTALACIÓN SAI:"
							propOpcions="ubicacioSAI"
							arrCamps="['instalacionsComunicacions', 'sala', 'SAI', 'instalacioSAI']"
						/>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="ELEMENTOS CONECTADOS SAI:"
							arrEtiquetes="['Router', 'Switch1', 'Switch2', 'Switch3', 'Convertidor Medios 1', 'Convertidor Medios 2', 'Hilo Musical', 'Raspberry', 'Ampli Hilo M.', 'Otros']"
							arrArrelCamps="['instalacionsComunicacions', 'sala', 'SAI', 'elementsConnectatsSAI']"
							arrCampsFinals="['router', 'switch1', 'switch2', 'switch3', 'convertidorLinia1', 'convertidorLinia2', 'raspberry', 'filMusical', 'ampliFilM', 'altres']"
						/>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="ELEMENTOS CONECTADOS REGLETA LIMPIA:"
							arrEtiquetes="['Router', 'Switch1', 'Switch2', 'Switch3', 'Convertidor Medios 1', 'Convertidor Medios 2', 'Hilo Musical', 'Raspberry', 'Ampli Hilo M.', 'Otros']"
							arrArrelCamps="['instalacionsComunicacions', 'sala', 'SAI', 'elementsRegletaNeta']"
							arrCampsFinals="['router', 'switch1', 'switch2', 'switch3', 'convertidorLinia1', 'convertidorLinia2', 'raspberry', 'filMusical', 'ampliFilM', 'altres']"
							help="sai regleta"
						/>

						<cmp_inputOpcionsMultipleResposta
							etiqueta="ELEMENTOS CONECTADOS REGLETA SUCIA:"
							arrEtiquetes="['Router', 'Switch1', 'Switch2', 'Switch3', 'Convertidor Medios 1', 'Convertidor Medios 2', 'Hilo Musical', 'Raspberry', 'Ampli Hilo M.', 'Otros']"
							arrArrelCamps="['instalacionsComunicacions', 'sala', 'SAI', 'elementsRegletaBruta']"
							arrCampsFinals="['router', 'switch1', 'switch2', 'switch3', 'convertidorLinia1', 'convertidorLinia2', 'raspberry', 'filMusical', 'ampliFilM', 'altres']"
							help="sai regleta"
						/>

					</q-card-section>
				</q-card>




				<!-- ASPECTO / CLIMATIZACION / LATIGUILLOS / BAJAS INVENTARIO -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Aspecto / Climatización / Latiguillos..." />

					<q-btn
						dense
						noCaps
						label="Frases"
						@click="construirFrases('instalaciones-asepectoClimatizacionLatiguillos')"
						class="col q-ml-md"
						color="grey-9"
					/>

					<q-card-section>
						<cmp_inputOpcionsUnicaResposta
							etiqueta="ASPECTO LIMPIEZA SALA:"
							propOpcions="moltBe_moltMalament"
							arrCamps="['instalacionsComunicacions', 'sala', 'aspecteSala']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="CLIMATIZACIÓN SALA ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'climatitzacio', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'climatitzacio', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="VENTILACIÓN SALA ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'ventilacio', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'ventilacio', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="LATIGUILLOS RESERVA ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'latiguillos', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'latiguillos', 'observacions']"
						/>

						<cmp_inputSiNoObsrv
							etiqueta="ELEMENTOS DE BAJA INVENTARIO ?"
							arrCamps="['instalacionsComunicacions', 'sala', 'elementsBaixaInventari', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'elementsBaixaInventari', 'observacions']"
							help="elementos baja inventario"
						/>

					</q-card-section>
				</q-card>




				<!-- RACKS -->

				<q-card class="col-sm-6 col q-mb-md ">

					<cmp_Titol2 titol="RACKS" />

					<q-card-section>

						<cmp_inputText etiqueta="Nº RACKS:" arrCamps="['instalacionsComunicacions', 'sala', 'numRacks']" />

						<cmp_inputSiNoObsrv
							etiqueta="Nº RACKS ADECUADO?"
							arrCamps="['instalacionsComunicacions', 'sala', 'numRacksAdecuat', 'existeix']"
							arrCampsDos="['instalacionsComunicacions', 'sala', 'numRacksAdecuat', 'observacions']"
						/>

					</q-card-section>

					<!-- <q-card-section v-for="(rack, indexRack) in arrRacks" :key="indexRack" class="bg-grey-2"> -->
					<q-card-section class="bg-grey-2">


						<q-expansion-item v-for="(rack, indexRack) in arrRacks" :key="indexRack" dense class=" q-mb-sm" :header-style="{ backgroundColor: '#f7ecc3' }">
							<template v-slot:header>
								<!-- 								
								<q-item-section avatar>
									<q-avatar icon="view_array" color="warning" text-color="white" />
								</q-item-section> 
								-->

								<q-item-section class="text-bold text-h4">
									Rack nº {{ indexRack + 1 }}
								</q-item-section>

								<q-item-section side>
									<div class="row items-center">
										<q-btn
											dense
											round
											icon="delete"
											@click="eliminarRack(indexRack)"
											class="q-ml-md"
											color="grey-7"
										/>
									</div>
								</q-item-section>
							</template>

							<cmp_rack :objRack="rack" :numRack="indexRack + 1" />

						</q-expansion-item>




<!-- 
							<div class="text-h6 bg-indigo-10 text-white q-pa-md q-mb-sm">
								Rack nº {{ indexRack + 1 }}
								<q-btn
									dense
									round
									icon="delete"
									@click="eliminarRack(indexRack)"
									class="q-ml-md"
									color="grey-7"
								/>

							</div>

							<cmp_rack :objRack="rack" :numRack="indexRack + 1" />
 -->
					</q-card-section>
				</q-card>





			</q-card>
		</div>






		<q-dialog v-model="alertaFrases">
			<cmp_frasesDialog  :arrFrases="arrFrases" />
		</q-dialog>


		<q-dialog v-model="alertaHelp">
			<cmp_frasesHelp  :arrFrases="arrFrases" />
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
import cmp_rack from "../../components/rack"
import cmp_frasesDialog from "../../components/frasesDialog"
import cmp_frasesHelp from "../../components/frasesHelp"

import {frasesInforme} from "../../statics/js/_informeFrases.js"
import {frasesHelp} from "../../statics/js/_biblia.js"

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
		cmp_rack,
		cmp_frasesDialog,
		cmp_frasesHelp
	},

	created () {
		// this.assignarAuditoriaSeleccionada()
	},


	data () {
		return {
			arrFrases: null,
			alertaFrases: false,
			alertaHelp: false
		}
	},

  	methods : {
			eliminarRack: function(indexRack) {


				this.$q.dialog({
	        title: 'Confirmar',
	        message: 'Eliminamos RACK ' + (indexRack + 1) +'?',
	        cancel: true,
	        persistent: true
	      }).onOk(() => {
	        this.$store.dispatch("mAuditoria/actEliminarRack", indexRack)
	      }).onOk(() => {
	        // console.log('>>>> second OK catcher')
	      }).onCancel(() => {
	        // console.log('>>>> Cancel')
	      }).onDismiss(() => {
	        // console.log('I am triggered on both OK and Cancel')
	      })

  		},


			construirFrases: function (apartat) {
				this.arrFrases = frasesInforme( this.auditoriaActual, apartat )
				this.alertaFrases = true
			},

			construirHelp: function (punt) {
				this.arrFrases = frasesHelp( punt )
				this.alertaHelp = true
			}



  	},


  	computed: {

			arrRacks: function() {
				// debugger;
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].instalacionsComunicacions.sala.racks
			},



			// les 2 següents propietats computades son utilitzades per la funcio "consutirFrases"

			auditoriaActual: function() {
				return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]
			},



  	}
}
</script>
