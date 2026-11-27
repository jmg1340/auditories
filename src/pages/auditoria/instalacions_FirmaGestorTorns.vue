<template>

	<div class="columns items-center q-mt-md">
		<div class="row justify-center">

			<q-card class="col-sm-8 col q-pa-sm q-mt-lg">
				<cmp_Titol1 titol="FIRMA BIOMÉTRICA Y GESTOR DE TURNOS" />

        <!-- FIRMA BIOMETRICA -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="FIRMA BIOMÉTRICA" />

          <q-btn
            dense
            noCaps
            label="Frases"
            @click="construirFrases('LAN-APs')"
            class="col q-ml-md"
            color="grey-9"
          />

          <q-card-section>
            <cmp_inputText
              etiqueta="Numero de tablets:"
              arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'numTablets']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="Tablets apagadas ?"
              arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tabletsApagades', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'firmaBiometrica', 'tabletsApagades', 'observacions']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="Retirar tablets ?"
              arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'retirarTablets', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'firmaBiometrica', 'retirarTablets', 'observacions']"
            />

            <!-- TABLETS -->
						<q-card>
							<q-card-section>
								TABLETS
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 1 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't1', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 1 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't1', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 1 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't1', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 2 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't2', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 2 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't2', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 2 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't2', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 3 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't3', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 3 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't3', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 3 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't3', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 4 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't4', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 4 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't4', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 4 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't4', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 5 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't5', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 5 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't5', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 5 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't5', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 6 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't6', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 6 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't6', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 6 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't6', 'observacions']"
								/>
							</q-card-section>
							<q-card-section>
								<cmp_inputText
									etiqueta="TABLET 7 codigo (sin 'FB'):"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't7', 'codi']"
								/>
								<cmp_inputText
									etiqueta="TABLET 7 ubicación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't7', 'ubicacio']"
								/>
								<cmp_inputText
									etiqueta="TABLET 7 observación:"
									arrCamps="['instalacionsComunicacions', 'firmaBiometrica', 'tablets', 't7', 'observacions']"
								/>
							</q-card-section>
						</q-card>
						


          </q-card-section>
        </q-card>


        <!-- GESTION DE TURNOS -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="GESTION DE TURNOS" />
					<q-card-section>
						
						<cmp_inputSiNo
							etiqueta="Totem? "
							etiqV="Sí"
							etiqF="No"
							arrCamps="['instalacionsComunicacions', 'gestioTorns', 'dispositius', 'totem']"
						/>
						<cmp_inputSiNo
							etiqueta="Impresoras de tickets? "
							etiqV="Sí"
							etiqF="No"
							arrCamps="['instalacionsComunicacions', 'gestioTorns', 'dispositius', 'impresores']"
						/>
						<cmp_inputSiNo
							etiqueta="Pantallas (NUC)? "
							etiqV="Sí"
							etiqF="No"
							arrCamps="['instalacionsComunicacions', 'gestioTorns', 'dispositius', 'pantalles']"
						/>
          </q-card-section>

					<q-card-section>
						<cmp_inputText 
							etiqueta="OBSERVACIONES (dispostivos GdT):" 
							arrCamps="['instalacionsComunicacions', 'gestioTorns', 'dispositius', 'observacions']"
						/>						
					</q-card-section>


					<q-card-section>
            <cmp_inputSiNoObsrv
              etiqueta="Llamada a pacientes correcta -> sale en pantalla con el tiempo adecuado:"
              arrCamps="['instalacionsComunicacions', 'gestioTorns', 'revisio', 'avisAPacients', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'gestioTorns', 'revisio', 'avisAPacients','observacions']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="Cuando se marca la llegada del paciente, aparece en la cola del centro:"
              arrCamps="['instalacionsComunicacions', 'gestioTorns', 'revisio', 'arribadaPacient', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'gestioTorns', 'revisio', 'arribadaPacient','observacions']"
            />


					</q-card-section>



        </q-card>


        <!-- CARTELERIA DIGITAL -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="CARTELERIA DIGITAL" />
					<q-card-section>
            <cmp_inputSiNoObsrv
              etiqueta="Cartelería digital:"
              arrCamps="['instalacionsComunicacions', 'cartelleriaDigital', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'cartelleriaDigital', 'observacions']"
            />
					</q-card-section>
        </q-card>


			</q-card>


			<div class="col-sm-8 col q-pa-sm">
				<cmp_inputText 
					etiqueta="OBSERVACIONES (INSTALACIONES):" 
					arrCamps="['instalacionsComunicacions', 'observacions']"
				/>
			</div>

		</div>


		<q-dialog v-model="alerta">
			<cmp_frasesDialog  :arrFrases="arrFrases" />
		</q-dialog>

	</div>

</template>

<script>
import cmp_Titol1 from "../../components/titol1"
import cmp_Titol2 from "../../components/titol2"
import cmp_inputText from "../../components/inputText"
import cmp_inputSiNo from "../../components/inputSiNo"
import cmp_inputSiNoObsrv from "../../components/inputSiNoObsrv"
import cmp_frasesDialog from "../../components/frasesDialog"

import {frasesInforme} from "../../statics/js/_informeFrases.js"

export default {
	name: 'PageInstalacionsFirmaGestorTorns',

	components: {
		cmp_Titol1,
		cmp_Titol2,
		cmp_inputText,
		cmp_inputSiNo,
		cmp_inputSiNoObsrv,
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
