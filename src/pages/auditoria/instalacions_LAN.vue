<template>
  <div class="columns items-center q-mt-md">
    <div class="row justify-center">
      <q-card class="col-sm-8 col q-pa-sm">
        <cmp_Titol1 titol="LAN" />

        <!-- SWITCHS -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="Switchs" />

          <q-btn
            dense
            noCaps
            label="Frases"
            @click="construirFrases('LAN-switchs')"
            class="col q-ml-md"
            color="grey-9"
          />

          <q-card-section>
            <cmp_inputSiNo
              etiqueta="SWITCHS IDENTIFICADOS ?"
              etiqV="Si"
              etiqF="No"
              arrCamps="['instalacionsComunicacions', 'LAN', 'SWidentificats', 'existeix']"
            />

            <cmp_inputText
              etiqueta="OBSERVACIONES:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'SWidentificats', 'observacions']"
            />
          </q-card-section>
        </q-card>

        <!-- WIFI AP -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="APs Wifi" />

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
              etiqueta="numero APs:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'quantitat']"
            />

            <cmp_inputOpcionsMultipleResposta
              etiqueta="UBICACION:"
              arrEtiquetes="['Sala espera']"
              arrArrelCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'ubicacio']"
              arrCampsFinals="['salaEspera']"
            />

            <cmp_inputText
              etiqueta="OTRAS UBICACIONES:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'ubicacio', 'altres']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="AP VISIBLE ?"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'APvisible', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'APvisible', 'observacions']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="COBERTURA PROAS ?"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'coberturaPROAS', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'coberturaPROAS', 'observacions']"
            />

            <cmp_inputSiNoObsrv
              etiqueta="CARTELERIA WIFI ?"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'carteleriaWifi', 'existeix']"
              arrCampsDos="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'carteleriaWifi', 'observacions']"
            />

            <cmp_inputText
              etiqueta="OBSERVACIONES:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'wifiAPs', 'observacions']"
            />
          </q-card-section>
        </q-card>

        <!-- IMPRESORES -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="Impresoras" />

          <q-card-section>
            <cmp_inputText
              etiqueta="Nº COLAS MULTIFUNCIÓN:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'NumCuesImpressioMTF']"
            />

            <cmp_inputText
              etiqueta="Nº COLAS IMPRESIÓN:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'NumCuesImpressio']"
            />
          </q-card-section>
        </q-card>

        <!-- OTROS DISPOSITIVOS -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="Otros dispositivos" />
          <q-card-section>
            <cmp_inputText
              etiqueta="OTROS DISPOSITIVOS:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'altresDispositius']"
            />
          </q-card-section>
        </q-card>

        <!-- COBERTURA WIFI -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol2 titol="Cobertura WIFI (mediciones)" />
          <q-card-section>
            <cmp_inputText
              etiqueta="MEDICIONES COBERTURA:"
              arrCamps="['instalacionsComunicacions', 'LAN', 'coberturaWifi']"
            />
          </q-card-section>
        </q-card>

        <cmp_inputText
          etiqueta="OBSERVACIONES LAN:"
          arrCamps="['instalacionsComunicacions', 'LAN', 'observacions']"
        />

        <!-- CLIMATIZACION -->

        <q-card class="col-sm-6 col q-mb-md">
          <cmp_Titol1 titol="Climatización	" />
          <q-btn
            dense
            noCaps
            label="Frases"
            @click="construirFrases('LAN-climatizacion')"
            class="col q-ml-md"
            color="grey-9"
          />

          <q-card-section>
            <cmp_inputSiNo
              etiqueta="PUERTO SW1Gi23? "
              etiqV="Sí"
              etiqF="No"
              arrCamps="['instalacionsComunicacions', 'equipamentConexions', 'connexioPortSW1Gi23']"
            />

            <cmp_inputText
              etiqueta="OTRA CONEXION:"
              arrCamps="['instalacionsComunicacions', 'equipamentConexions', 'altraConnexio']"
            />
          </q-card-section>
        </q-card>
      </q-card>
    </div>

    <q-dialog v-model="alerta">
      <cmp_frasesDialog :arrFrases="arrFrases" />
    </q-dialog>
  </div>
</template>

<style>
.borde {
  border: 2px solid red;
}
</style>

<script>
import cmp_Titol1 from "../../components/titol1";
import cmp_Titol2 from "../../components/titol2";
import cmp_inputText from "../../components/inputText";
import cmp_inputSiNo from "../../components/inputSiNo";
import cmp_inputSiNoObsrv from "../../components/inputSiNoObsrv";
import cmp_inputOpcionsUnicaResposta from "../../components/inputOpcionsUnicaResposta";
import cmp_inputOpcionsMultipleResposta from "../../components/inputOpcionsMultipleResposta";
import cmp_rack from "../../components/rack";
import cmp_frasesDialog from "../../components/frasesDialog";

import { frasesInforme } from "../../statics/js/_informeFrases.js";

export default {
  name: "PageInstalacions",

  components: {
    cmp_Titol1,
    cmp_Titol2,
    cmp_inputText,
    cmp_inputSiNo,
    cmp_inputSiNoObsrv,
    cmp_inputOpcionsUnicaResposta,
    cmp_inputOpcionsMultipleResposta,
    cmp_rack,
    cmp_frasesDialog
  },

  created() {
    // this.assignarAuditoriaSeleccionada()
  },

  data() {
    return {
      arrFrases: null,
      alerta: false
    };
  },

  methods: {
    construirFrases: function(apartat) {
      this.arrFrases = frasesInforme(this.auditoriaActual, apartat);
      this.alerta = true;
    }
  },

  computed: {
    auditoriaActual: function() {
      return this.$store.state.mAuditoria.auditories[
        this.$store.state.mAuditoria.indexArrAuditories
      ];
    }
  }
};
</script>
