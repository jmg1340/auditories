<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-light-blue-10">
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

        <q-toolbar-title class="titol">
          Auditorías CCAA Asepeyo
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-btn
          flat
          dense
          round
          @click="guardarAuditories"
          aria-label="Guardar"
        >
          <q-icon name="save" />
        </q-btn>


      </q-toolbar>
    </q-header>



    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"

    >
      <q-list>
        <q-item-label header>Opciones</q-item-label>

        <q-separator color="red-10" />

        <q-item to="/">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Listado auditorías</q-item-label>
            <q-item-label caption>Ver listado auditorías</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />

        <q-item to="/importar">
          <q-item-section avatar>
            <q-icon name="import_export" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Importar</q-item-label>
            <q-item-label caption>Importa auditorías de fichero JSON</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />
        <q-item to="/exportar">
          <q-item-section avatar>
            <q-icon name="import_export" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Exportar</q-item-label>
            <q-item-label caption>Exporta auditorías a fichero JSON</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />
        <q-item to="/apunts">
          <q-item-section avatar>
            <q-icon name="description" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Apunts</q-item-label>
            <q-item-label caption>Apunts en general</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />
<!--
        <q-item to="/carregarAuditoria">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>substituir auditoria</q-item-label>
            <q-item-label caption>substitueix objecte auditoria</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />
 -->
<!--
        <q-item to="/proves">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Proves</q-item-label>
            <q-item-label caption>proves varies</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="red-10" />
 -->

      </q-list>
    </q-drawer>




    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

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
    }

  },
  computed: {
  }
}
</script>

<style scoped>

	.titol {
/* color: #4400ff; */
/* background: #e8e8e8; */
text-shadow: 3px 5px 2px #a8a8a8;




	}




</style>
