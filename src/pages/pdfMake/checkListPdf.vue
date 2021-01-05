<template>
  <q-page class="q-pa-md">

    <div class="column">
      <div class="column justify-center items-center">
        <div class="col-9">
          <q-img
            :src="foto"
            spinner-color="grey-2"
            style="height: 140px; max-width: 150px"
          >

            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>


          </q-img>

          {{ info }}
          <!-- <q-input label="instruccions pdf-make" v-model="instruccions" autogrow class="bg-grey-3"/> -->
        </div>
        <div class="col-auto q-px-md">
          <q-btn glossy label="generar pdf" @click="generarPDF" color="primary"  />
        </div>
      </div>
    </div>

  </q-page>
</template>

<style>
</style>



<script>

//import pm from "../../statics/js/pdfmake.js";
import docDef from "./documentDefinition.js";

export default {

	name: 'PageIndex',

	created () {
	},


	data () {
	  	return {
        info: "________________________",
        foto: null
	  	}
  	},

  	methods : {
      generarPDF: function () {
        console.log("directori actual: " + process.cwd())

        try {
          this.foto = "statics/img/logo-asepeyo.jpg"
          pdfMake.createPdf(docDef(this.objAuditoria)).open()

        } catch (e) {
          //debugger
          this.$q.dialog({
            dark: true,
            title: 'Error',
            message: "Hi ha algun error en la definció del document (PDFmake)"

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
      objAuditoria: function (){
        return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories]
      },

  	}
}
</script>
