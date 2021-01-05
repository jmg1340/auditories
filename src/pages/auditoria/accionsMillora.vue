<template>
  <div class="column items-center q-mt-md">
    <div class="row justify-center q-gutter-sm">
      <div class="col-sm-8 col q-pa-sm">
        <cmp_Titol1 titol="OBSERVACIONES / ACCIONES DE MEJORA" />
      </div>

      <!-- OBSERVACIONES -->

      <q-card class="column col-sm-6 q-mb-md">
        <cmp_Titol2 titol="OBSERVACIONES" />
        <q-card-section class="column">
          <cmp_inputCheckBox
            etiqueta="Rack. Limpieza con sistema aspiración aire:"
            arrCamps="['accionsMillora', 'observacions', 'rack', 'neteja']"
          />

          <cmp_inputCheckBox
            etiqueta="Rack. Sanear instalación cableado:"
            arrCamps="['accionsMillora', 'observacions', 'rack', 'sanejar']"
          />

          <cmp_inputCheckBox
            etiqueta="Rack. Retirar paneles obsoletos (Voz):"
            arrCamps="['accionsMillora', 'observacions', 'rack', 'retirarPatchP']"
          />

          <cmp_inputCheckBox
            etiqueta="Rack. Retirar armario sin uso:"
            arrCamps="['accionsMillora', 'observacions', 'rack', 'retirarRack']"
          />

          <cmp_inputCheckBox
            etiqueta="WAN. Sanear instalación proveedor (PTR, RDSI...):"
            arrCamps="['accionsMillora', 'observacions', 'wanSanejar']"
          />

          <cmp_inputCheckBox
            etiqueta="Sala. Limpieza general:"
            arrCamps="['accionsMillora', 'observacions', 'sala', 'neteja']"
          />

          <cmp_inputCheckBox
            etiqueta="Sala. Retirar objetos junto rack:"
            arrCamps="['accionsMillora', 'observacions', 'sala', 'retirarObjectes']"
          />

          <cmp_inputCheckBox
            etiqueta="SAI. Revisar dispositivos vitales no conectados:"
            arrCamps="['accionsMillora', 'observacions', 'SAI', 'revisoDispNoConnectats']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar pendrive actualización BIOS:"
            arrCamps="['accionsMillora', 'observacions', 'enviarPendriveBIOS']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar latiguillos de reserva:"
            arrCamps="['accionsMillora', 'observacions', 'enviarLatiguillos']"
          />

          <cmp_inputCheckBox
            etiqueta="Ampliación puntos de red:"
            arrCamps="['accionsMillora', 'observacions', 'llocsTreball', 'ampliacioPuntsXarxa']"
          />

          <cmp_inputCheckBox
            etiqueta="Revisar tomas de datos:"
            arrCamps="['accionsMillora', 'observacions', 'llocsTreball', 'revisarPresesXarxa']"
          />

          <cmp_inputCheckBox
            etiqueta="Revisar caja conexiones puestos de trabajo:"
            arrCamps="['accionsMillora', 'observacions', 'llocsTreball', 'revisarCaixaConexions']"
          />

          <cmp_inputCheckBox
            etiqueta="Revisión instalación Telemedicina:"
            arrCamps="['accionsMillora', 'observacions', 'revisarTelemedicina']"
          />

          <cmp_inputCheckBox
            etiqueta="Revisión instalación Videoconferencia:"
            arrCamps="['accionsMillora', 'observacions', 'revisarVideoconferencia']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar webcam sala de reuniones:"
            arrCamps="['accionsMillora', 'observacions', 'enviarWebcam']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar auriculares de reserva:"
            arrCamps="['accionsMillora', 'observacions', 'CU', 'enviarAuricularsReserva']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar altavoz:"
            arrCamps="['accionsMillora', 'observacions', 'CU', 'enviarAltaveu']"
          />

          <cmp_inputCheckBox
            etiqueta="Enviar lector CD/DVD:"
            arrCamps="['accionsMillora', 'observacions', 'enviarLectorCDDVD']"
          />

          <cmp_inputCheckBox
            etiqueta="Renove proyector sala reuniones:"
            arrCamps="['accionsMillora', 'observacions', 'renoveProjector']"
          />

          <cmp_inputText etiqueta="Otros:" arrCamps="['accionsMillora', 'observacions', 'altres']" />
        </q-card-section>
      </q-card>

      <!-- NO CONFORMIDADES -->

      <q-card class="col-sm-6 col q-mb-md">
        <cmp_Titol2 titol="NO CONFORMIDADES" />
        <q-card-section class="column">
          <cmp_inputCheckBox
            etiqueta="Enviar pendrive emergencia:"
            arrCamps="['accionsMillora', 'NC', 'enviarPendriveEmergencia']"
          />

          <cmp_inputCheckBox
            etiqueta="Solicitar destructora papel:"
            arrCamps="['accionsMillora', 'NC', 'solicitarDestructoraPaper']"
          />

          <cmp_inputCheckBox
            etiqueta="Solicitar contenedor:"
            arrCamps="['accionsMillora', 'NC', 'solicitarContenidor']"
          />

          <cmp_inputCheckBox
            etiqueta="Visibilidad pantallas:"
            arrCamps="['accionsMillora', 'NC', 'visibilitatPantalles']"
          />

          <cmp_inputCheckBox
            etiqueta="Cuarto comunicaciones cn cerradura sin llave:"
            arrCamps="['accionsMillora', 'NC', 'salaRackSenseClau']"
          />

          <cmp_inputCheckBox
            etiqueta="Rack sin llaves:"
            arrCamps="['accionsMillora', 'NC', 'rackSenseClaus']"
          />

          <cmp_inputCheckBox
            etiqueta="Carteles LOPD:"
            arrCamps="['accionsMillora', 'NC', 'carteleriaLOPD']"
          />

          <cmp_inputCheckBox
            etiqueta="Soportes Backup:"
            arrCamps="['accionsMillora', 'NC', 'suportsBackup']"
          />

          <cmp_inputCheckBox
            etiqueta="Documentación sensible:"
            arrCamps="['accionsMillora', 'NC', 'docsSensibles']"
          />

          <cmp_inputText etiqueta="Otros:" arrCamps="['accionsMillora', 'NC', 'altres']" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>



<style>
.borde {
  border: 2px solid red;
}

.tips {
  font-size: 10px;
}
</style>



<script>
import cmp_Titol1 from "../../components/titol1";
import cmp_Titol2 from "../../components/titol2";
import cmp_inputText from "../../components/inputText";
import cmp_inputCheckBox from "../../components/inputCheckBox";
import cmp_inputCheckBoxObsrv from "../../components/inputSiNoObsrv";
import cmp_inputOpcionsUnicaResposta from "../../components/inputOpcionsUnicaResposta";
import cmp_inputOpcionsMultipleResposta from "../../components/inputOpcionsMultipleResposta";

export default {
  name: "PageInstalacions",

  components: {
    cmp_Titol1,
    cmp_Titol2,
    cmp_inputText,
    cmp_inputCheckBox,
    cmp_inputCheckBoxObsrv,
    cmp_inputOpcionsUnicaResposta,
    cmp_inputOpcionsMultipleResposta,
    cmp_inputCheckBox
  },

  created() {
    // this.assignarAuditoriaSeleccionada()
  },

  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>
