<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm">

				<cmp_Titol1 titol="FORMACION" />




				<!-- AURICULARES -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Uso de auriculares" />
					<q-card-section>
						<p class="tips">Nº incidencias elevadas forma Poner/Quitar Evolve65 <br/>
						Conexión Evolve65 a otros dispositivos por Bluetooth</p>
						<cmp_inputSiNo
							etiqueta="FORMACION HECHA:"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['formacio', 'auriculars']"
						/>


						<!-- <cmp_inputText
							etiqueta="OBSERVACIONES:"
							arrCamps="['formacio', 'auriculars', 'observacions']"
						/> -->


					</q-card-section>
				</q-card>



				<!-- VIDEOCONFERENCIA -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Videoconferencia" />
					<q-card-section>
						<p class="tips">1º Analizar necesidades, 2º escoger recurso adecuado. <br/>
						LLAMADAS ENTRE DISPOSITIVOS CISCO:<br/>
						Jabber -> Jabber (2 participantes)<br/>
						Jabber -> Sala (2 >= 200 participantes)<br/>
						SX10 - Jabber (2 participantes) (extension@asepyeo.site)<br/>
						SX10 - Sala (2 >= 200 participantes) (sala@asepeyomeeting.webex.com / https://aspeyomeeting.webex.com/meet/sala)<br/>
						Compartir pantalla. SX10 no comparte pantalla con Jabber</p>
						<cmp_inputSiNo
							etiqueta="FORMACION HECHA?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['formacio', 'videoconferencia']"
						/>

						<!-- <cmp_inputSiNo
							etiqueta="INSTRUCCIONES ENTREGADAS?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['formacio', 'videoconferencia', 'instruccionsEntregades']"
						/> -->


						<!-- <cmp_inputText
							etiqueta="OBSERVACIONES:"
							arrCamps="['formacio', 'videoconferencia', 'observacions']"
						/> -->


					</q-card-section>
				</q-card>



				<!-- LICENCIAS M3 -->

				<q-card class="col-sm-6 col q-mb-md">

					<cmp_Titol2 titol="Licencias M3" />
					<q-card-section>
						<p class="tips">200 participantes<br/>
						Conversión a salas impersonales<br/>
						XX salas virtuales genéricas (solicitar a DTIC desde catalogo de servicios - Intranet)</p>

						<cmp_inputSiNo
							etiqueta="FORMACIÓN HECHA?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['formacio', 'llicenciesM3']"
						/>


						<!-- <cmp_inputText
							etiqueta="OBSERVACIONES:"
							arrCamps="['formacio', 'llicenciesM3', 'observacions']"
						/> -->


					</q-card-section>
				</q-card>



				<!-- TELEFONO SUPERVIVENCIA -->

				<q-card class="col-sm-6 col q-mb-md bordered">

					<cmp_Titol2 titol="Telefono supervivencia" />
					<q-card-section>
						<p class="tips">Averias..., encendido puesta en marcha<br/>
						¿Tienen el número?<br/>
						¿Saben que funciona como un móbil? Lo puedes desconectar de la tensión y llevar donde quieras?<br/>
						En caso de avería en telefonía puedes pedir a soporte que hagan un desvío del cabecera al supervivencia</p>

						<cmp_inputSiNo
							etiqueta="FORMACIÓN HECHA?"
							etiqV="Sí"
							etiqF="No"
							arrCamps="['formacio', 'telefonSupervivencia']"
						/>


						<!-- <cmp_inputText
							etiqueta="OBSERVACIONES:"
							arrCamps="['formacio', 'telefonSupervivencia', 'observacions']"
						/> -->


					</q-card-section>
				</q-card>

				<cmp_inputText
					etiqueta="OBSERVACIONES:"
					arrCamps="['formacio', 'observacions']"
				/>


			</q-card>
		</div>

	</div>

</template>



<style>
	.borde {
		border: 2px solid red;
	}

	.tips{
		font-size: 10px;
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
