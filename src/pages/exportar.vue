<template>
  <q-page class="q-pa-md q-gutter-md">
    <div class="column text-center q-mb-lg text-h5">EXPORTAR</div>

    <q-card class="row justify-around q-pa-md bg-orange-1">
      <q-btn dense @click="exportar" noCaps class="q-ml-sm" color="blue-10">EXPORTAR auditorías a 'auditorias.json'</q-btn>
      <q-btn dense @click="copiar" noCaps class color="blue-10">COPIAR auditorías a portapapeles</q-btn>
    </q-card>

    <!-- <div class="column q-gutter-md"> -->

    <q-card>
      <q-card-section class="text-h6 text-bold">
        Mostrar datos pelados
      </q-card-section>
      <q-card-section>
        <q-select dense  standout v-model="index"
          :options="opcionsDesplegable" 
          option-value="valor"
          option-label="etiqueta"
          emit-value
          map-options
          label="Seleccionar auditoría" />

        <pre>{{ dades }}</pre>   
      </q-card-section>
    </q-card>

    <!-- </div> -->
  </q-page>
</template>

<style>
</style>

<script>
import { copyToClipboard } from "quasar";
import { exportFile } from "quasar";

export default {
  name: "PageExportar",

  created() {},

  data() {
    return {
      index: "",
      // esJSONstringify: false,
      dadesImportacio: ""
    };
  },

  methods: {
    copiar: function() {
      copyToClipboard(this.dades)
        .then(() => {
          this.$q.notify({
            color: "green-10",
            textColor: "white",
            message: "copiat al porta-retalls",
            position: "top",
            multiLine: true,
            timeout: 1000
          });
        })
        .catch(() => {
          // fail
        });
    },

    exportar: function() {
      const status = exportFile("auditorias.json", this.arrAuditories);

      if (status === true) {
        // browser allowed it
      } else {
        // browser denied it
        console.log("Error: " + status);
      }
    },



  },

  computed: {
		arrAuditories: function(){
			return this.$store.state.mAuditoria.auditories
		},
		
		dades: function() {
      let varDades;
      // if (this.novesPropietats) {
      // 	varDades = this.dadesAmbNovesProps().slice(0)
      // } else {
      // varDades = this.$store.state.mAuditoria.auditories;
      // }

      if (this.index.length != 0) {
        varDades = this.arrAuditories[parseInt(this.index)];
      }else{
				varDades = this.arrAuditories;
			}

      if (this.esJSONstringify) varDades = JSON.stringify(varDades);

      return varDades;
		},
		
		opcionsDesplegable: function() {
			
			let arrDespl = this.arrAuditories.map( function(element, index, array){
				console.log("element.nomCentre: " + element.nomCentre)
				return {
					etiqueta: element.nomCentre,
					valor: index
				}
			})

			arrDespl.unshift({etiqueta: "todas las auditorias", valor: ""})
			return arrDespl
		}


  }
};
</script>
