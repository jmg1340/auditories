<template>

	<div>
		<cmp_inputText
			etiqueta="UBICACIÓN:"
			arrCamps="['ubicacio']"
			:objRack="objRack"
		/>

		<cmp_inputOpcionsUnicaResposta
			etiqueta="TIPO RACK:"
			propOpcions="tipusRack"
			arrCamps="['tipusRack']"
			:objRack="objRack"
		/>

		<cmp_inputOpcionsUnicaResposta
			etiqueta="ESTADO POR RACK:"
			propOpcions="moltBe_moltMalament"
			arrCamps="['estatGeneral']"
			:objRack="objRack"
		/>

		<cmp_inputOpcionsUnicaResposta
			etiqueta="ASEPECTO / LIMPIEZA RACK:"
			propOpcions="moltBe_moltMalament"
			arrCamps="['aspecteNeteja']"
			:objRack="objRack"
		/>

		<!-- PANY -->

		<q-card class="col-sm-6 col">

			<cmp_TitolsRack :numRack="numRack" titol="CERRADURA" />
			<q-card-section>

				<!-- <q-btn
					dense
					icon="info"
					flat
					rounded
					@click="construirHelp('cerradura rack')"
					class="col q-ml-md"
					color="blue-9"
				/> -->


				<cmp_inputSiNo
					etiqueta="CERRADURA RACK ?"
					etiqV="Sí"
					etiqF="No"
					arrCamps="['pany', 'existeix']"
					:objRack="objRack"
					help="cerradura rack"
				/>

				<cmp_inputSiNo
					etiqueta="LLAVE CERRADURA RACK ?"
					etiqV="Sí"
					etiqF="No"
					arrCamps="['pany', 'clauAlPany']"
					:objRack="objRack"
				/>




				<cmp_inputOpcionsUnicaResposta
					etiqueta="ESTADO CERRADURA:"
					propOpcions="oberta_tancada"
					arrCamps="['pany', 'estatPany']"
					:objRack="objRack"
				/>

<!--
				<cmp_inputSiNo
					etiqueta="ESTADO CERRADURA ?"
					etiqV="cerrada"
					etiqF="abierta"
					arrCamps="['pany', 'estatPany']"
					:objRack="objRack"
				/>
 -->



			</q-card-section>
		</q-card>


		<cmp_inputSiNo
			etiqueta="ZONA PASO LIBRE RACK ?"
			etiqV="Sí"
			etiqF="No"
			arrCamps="['zonaPasLliure']"
			:objRack="objRack"
		/>



		<!-- CABLEJAT -->

		<q-card class="col-sm-6 col">

			<cmp_TitolsRack :numRack="numRack" titol="CABLEADO" />
			<q-card-section>
				<cmp_inputOpcionsUnicaResposta
					etiqueta="ASPECTO CABLEADO RACK:"
					propOpcions="moltBe_moltMalament"
					arrCamps="['cablejat', 'aspecte']"
					:objRack="objRack"
				/>

				<cmp_inputText
					etiqueta="Nº PATCH PANEL ACTIVOS:"
					arrCamps="['cablejat', 'pPanels', 'numPPanelActius']"
					:objRack="objRack"
				/>

				<cmp_inputOpcionsUnicaResposta
					etiqueta="Categrias:"
					propOpcions="categoriesPP"
					arrCamps="['cablejat', 'pPanels', 'categoriesPPanel']"
					:objRack="objRack"
				/>

				<cmp_inputOpcionsUnicaResposta
					etiqueta="ESTADO TERMINACIONES RACK:"
					propOpcions="moltBe_moltMalament"
					arrCamps="['cablejat', 'estatTerminacions']"
					:objRack="objRack"
				/>

				<cmp_inputSiNo
					etiqueta="DUPLICADORES DE PUERTOS ?"
					etiqV="Sí"
					etiqF="No"
					arrCamps="['cablejat', 'duplicadorPorts']"
					:objRack="objRack"
				/>

				<cmp_inputSiNo
					etiqueta="CABLEADO Y/O P.PANEL OBSOLETO ?"
					etiqV="Si"
					etiqF="No"
					arrCamps="['cablejat', 'cablejatObsolet']"
					:objRack="objRack"
				/>

			</q-card-section>
		</q-card>



		<!-- ELECTRICIDAD RACK -->

		<q-card class="col-sm-6 col">

			<cmp_TitolsRack :numRack="numRack" titol="ELECTRICIDAD" />
			<q-card-section>
				<cmp_inputOpcionsUnicaResposta
					etiqueta="ESTADO:"
					propOpcions="moltBe_moltMalament"
					arrCamps="['electricitat', 'estat']"
					:objRack="objRack"
				/>

				<cmp_inputSiNo
					etiqueta="REGLETA SUMINISTRO LIMPIO SAI ?"
					etiqV="Si"
					etiqF="No"
					arrCamps="['electricitat', 'regletaSuministramentNet']"
					:objRack="objRack"
				/>

				<cmp_inputSiNo
					etiqueta="REGLETA SUMINISTRO SUCIO ?"
					etiqV="Si"
					etiqF="No"
					arrCamps="['electricitat', 'regletaSuministramentBrut']"
					:objRack="objRack"
				/>

				<cmp_inputText
					etiqueta="OBSERVACIONES:"
					arrCamps="['electricitat', 'observacions']"
					:objRack="objRack"
				/>
			</q-card-section>
		</q-card>



		<cmp_inputSiNo
			etiqueta="VENTILACION RACK ?"
			etiqV="Si"
			etiqF="No"
			arrCamps="['ventilacio']"
			:objRack="objRack"
		/>

		<cmp_inputSiNo
			etiqueta="HAY DISPOSITIVOS OBSOLETOS ?"
			etiqV="Si"
			etiqF="No"
			arrCamps="['dispositiusObsolets']"
			:objRack="objRack"
		/>

		<cmp_inputText
			etiqueta="OBSERVACIONES:"
			arrCamps="['observacions']"
			:objRack="objRack"
		/>











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
import cmp_TitolsRack from "./titolsRack"
import cmp_inputText from "./inputText"
import cmp_inputSiNo from "./inputSiNo"
import cmp_inputSiNoObsrv from "./inputSiNoObsrv"
import cmp_inputOpcionsUnicaResposta from "./inputOpcionsUnicaResposta"
import cmp_inputOpcionsMultipleResposta from "./inputOpcionsMultipleResposta"
import cmp_frasesHelp from "../components/frasesHelp"

import {frasesHelp} from "../statics/js/_biblia.js"


export default {
	name: 'PageIndex',

	components: {
		cmp_TitolsRack,
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputSiNoObsrv,
		cmp_inputOpcionsUnicaResposta,
		cmp_inputOpcionsMultipleResposta,
		cmp_frasesHelp
	},

	props: ['objRack', 'numRack'],

	created () {
	},


	data () {
		return {
			alertaHelp: false
		}
	},

	methods : {
		construirHelp: function (punt) {
			this.arrFrases = frasesHelp( punt )
			this.alertaHelp = true
		}

	},

	computed: {
/*
	campTemplate: {
		get() {
			//debugger
			this._arrCamps = eval(this.arrCamps)   // transforma string a array
			return eval("this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]['" + this._arrCamps.join("']['") + "']")

		},
		set (value) {
			this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: value })
		}
	}
*/
	}
}
</script>
