<template>

	<div class="columns items-center q-mt-md">
		
		<div class="row justify-center">


			<q-card class="col-sm-10 col q-pa-sm">
				
				<!-- INFOMACIO PREVIA -->
				<cmp_Titol1 titol="Informació centre" />
				<q-card-section>

					<cmp_inputText etiqueta="ID CENTRO:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'codi']" />

					<cmp_inputText etiqueta="ID SITE BT:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'idSiteBT']" />

					<cmp_inputText etiqueta="TOTAL USUARIOS:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'totalUsuaris']" />

					<cmp_inputText etiqueta="LINEA PRINCIPAL:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'Linia1']" />

					<cmp_inputText etiqueta="LINEA BACKUP:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'Linia2']" />

					<cmp_inputText etiqueta="Nº ROUTERS:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'CiscPrime', 'NumRouters']" />

					<cmp_inputText etiqueta="Nº SWITCHS:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'CiscPrime', 'NumSwitchs']" />

					<cmp_inputText etiqueta="Nº APs WIFI:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'CiscPrime', 'NumAPsWifi']" />

					<cmp_inputText etiqueta="COLAS IMPRESION MTF:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'CuesImpressioMTF']" />

					<cmp_inputText etiqueta="COLAS IMPRESION:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'CA', 'CuesImpressio']" />

					<cmp_inputOpcionsMultipleResposta 
						etiqueta="TAREAS REQUERIDAS:"
						arrEtiquetes="['RETIRAR MINIPACS DE RACK', 'REVISAR CASCOS JABRA', 'RETIRAR DEL RACK']" 
						arrArrelCamps="['instalacionsComunicacions', 'informacioPrevia', 'TareasRequeridas']"
						arrCampsFinals="['RetirarMinipacsDelRack', 'RevisarCascosJabra', 'RetirarDelRack']" 
					/>

					<cmp_inputText etiqueta="TAREAS REQUERIDAS - OTRAS:" arrCamps="['instalacionsComunicacions', 'informacioPrevia', 'TareasRequeridas', 'Otras']" />

				</q-card-section>

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
import cmp_inputText from "../../components/inputText"
import cmp_inputSiNo from "../../components/inputSiNo"
import cmp_inputData from "../../components/inputData"
import cmp_inputOpcionsMultipleResposta from "../../components/inputOpcionsMultipleResposta"

export default {
	name: 'PageInfo',

	components: {
		cmp_Titol1,
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputData,
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

		idAuditoria: function() { 
			// debugger;
			return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].idAuditoria 
		},

  	}
}
</script>
