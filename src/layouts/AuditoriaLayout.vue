<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-cyan-10 shadow-5">
      <q-toolbar>

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{ titolApp }}
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="guardarAuditories"
          aria-label="Guardar"
        >
          <q-icon name="save" />
        </q-btn>


        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>

      <q-tabs
      dense 
      align="left"
      class="bg-blue-grey-11 text-black shadow-2"
      indicator-color="light-green-11"
			narrow-indicator
      active-color="light-green-11"
			active-bg-color="green-10"
			>
        <q-route-tab class="clTabs" to="/auditoria/informacio" label="Info" />
        <q-route-tab class="clTabs" to="/auditoria/instalacions1" label="Instal. 1" />
        <q-route-tab class="clTabs" to="/auditoria/instalacions2" label="Instal. 2" />
        <q-route-tab class="clTabs" to="/auditoria/cu" label="CU" />
        <q-route-tab class="clTabs" to="/auditoria/seguretat" label="Seguridad" />
        <q-route-tab class="clTabs" to="/auditoria/formacio" label="Formación" />
        <q-route-tab class="clTabs" to="/auditoria/valoracions" label="Valoraciones" />
        <q-route-tab class="clTabs" to="/auditoria/accionsMillora" label="Acciones Mejora" />
      </q-tabs>



    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"

    >
      <q-list>
        <q-item-label header>Opciones auditoría</q-item-label>

<!--
        <q-item>
          <q-item-section avatar>
            <q-btn icon="save" @click="guardarAuditoria"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Guardar</q-item-label>
            <q-item-label caption>Guardar la auditoria seleccionada</q-item-label>
          </q-item-section>
        </q-item>
 -->
        <q-separator color="grey-9" />

        <q-item to="/">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Listado auditorías</q-item-label>
            <q-item-label caption>Volver al listado de auditorías</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-9" />

        <!-- <q-item to="/auditoria/pdf"> -->
        <!-- <q-item clickable @click="generarPDF">
          <q-item-section avatar>
            <q-icon name="picture_as_pdf" />
          </q-item-section>
          <q-item-section>
            <q-item-label>CheckList PDF</q-item-label>
            <q-item-label caption>Generar PDF del checklist</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item to="/auditoria/checkList">
          <q-item-section avatar>
            <q-icon name="picture_as_pdf" />
          </q-item-section>
          <q-item-section>
            <q-item-label>CheckList PDF</q-item-label>
            <q-item-label caption>Generar PDF (v.14) del checklist</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-9" />

        <q-item to="/auditoria/frases">
          <q-item-section avatar>
            <q-icon name="description" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Frases Informe</q-item-label>
            <q-item-label caption>Propuesta de frases para el informe</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-9" />


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>




<script>
import { openURL } from 'quasar'
import docDef from "../pages/pdfMake2/documentDefinition.js";

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL,

    guardarAuditories: function(){
      let value = this.$store.state.mAuditoria.auditories
      this.$q.localStorage.set("keyArrAuditories", value)

      this.$q.notify({
        color: "green-8",
        textColor: "white",
        message: "Auditories guardades a localStorage",
        position: "top-right",
        multiLine: true,
        timeout: 1000
      })
    },

    generarPDF: function () {
      console.log("directori actual: " + process.cwd())


			pdfMake.createPdf(docDef(this.objAuditoria)).open()
      try {
        

      } catch (e) {
        //debugger
        this.$q.dialog({
          dark: true,
          title: 'Error',
          message: "Hi ha algun error en la definció del document (PDFmake)\n\n" +
                    e.toString() + "\n" +
                    "DIRECTORI ACTUAL: " + process.cwd()
        }).onOk(() => {
          // console.log('OK')
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })

      } finally {

      }
    }


  },
  computed: {

    titolApp: function() {
      return "Auditoria " + this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories].dadesCentre.nomCentre.toUpperCase()
    },
    objAuditoria: function (){
      return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]
    },

  }
}
</script>

<style scope>
	.clTabs {
		border: 1px solid grey;
		border-radius: 5px;

background: rgb(172, 245, 191);
/* background: radial-gradient(circle, rgba(2,62,18,1) 0%, rgba(0,0,0,1) 100%, rgba(18,3,107,1) 100%); */

}
</style>
