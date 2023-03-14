<template>
  <q-page class="q-pa-md">

	<div class="columns items-center">
	    <q-table
	      title="Auditorías"
	      :data="auditories"
	      :columns="columns"
	      row-key="_id"
	      :pagination.sync="pagination"
	      width="75%"
	      :filter="filter"
	      dense
	      table-style="{background-color: 'yellow'}"
	    >
	      <template v-slot:top-right>

	        <!-- recuadre text a buscar -->
<!--
	        <q-input dense debounce="300" dense v-model="filter" placeholder="text a buscar" class="q-mr-lg">
	          <template v-slot:append>
	            <q-icon name="search" />
	          </template>
	        </q-input>

	        <q-space />
 -->


	        <!-- boto nova auditoria -->
	        <q-btn
	          color="green-8"
	          icon="fiber_new"
	          align="center"
	          class="q-mr-md"
	          @click="novaAuditoria" />

	      </template>


	      <q-tr slot="body" slot-scope="props" :props="props">

	        <!-- columna data -->
	        <q-td key="data" :props="props">
	          {{ props.row.dadesCentre.data }}
	        </q-td>

	        <!-- columna centre -->
	        <q-td key="centre" :props="props">
	          {{ props.row.dadesCentre.nomCentre }}
	        </q-td>

	        <!-- columna amb botons edicio i eliminar -->
	        <q-td key="idAuditoria" :props="props" >
	          <q-btn size="sm" round dense color="warning" icon="create" @click="editarAuditoria(props.row)" class="q-mr-md" />
	          <q-btn size="sm" round dense color="negative" icon="delete" @click="eliminarAuditoria(props.row)"  />
	        </q-td>

	      </q-tr>

	    </q-table>

	</div>

  </q-page>
</template>

<style>
</style>

<script>
export default {
	name: 'PageIndex',

	created () {
		this.loadAuditories().then(() => {
			// this.comprovarExistenciaNovesPropietats ()
		}).catch ( (e) => {
			console.log("Hi ha hagut algun error a comprovarExistenciaNovesPropietats")
			console.log(e)
		})
	},


	data () {
	  	return {
	  		//auditories: [],

	  		filter: "",
			pagination: {
				page: 1,
				rowsPerPage: 15 // 0 means all rows
			},

			columns:[
				{
					name: 'data',
					required: true,
					label: 'FECHA',
					align: 'center',
					field: 'data',
					sortable: true,
					//classes: 'my-class',
					style: 'width: 20%'
				},

				{
					name: 'centre',
					required: true,
					label: 'CENTRO',
					align: 'left',
					field: row => row.nomCentre,
					sortable: true,
					//classes: 'my-class',
					style: 'width: 50pxx'
				},

				{
					name: 'idAuditoria',
					required: true,
					label: '',
					align: 'left',
					field: 'idAuditoria',
					sortable: false,
					//classes: 'my-class',
					style: 'width: 10%'
				}
			]
		}

  	},

  	methods : {
  		loadAuditories: function() {
  			// console.log("keyArrAuditories: " + this.$q.localStorage.getItem("keyArrAuditories"))

  			let promesa = new Promise ( (resolve, reject) => {

	  			if ( this.carregarAuditories ) {
		  			if ( this.$q.localStorage.has("keyArrAuditories") ) {
		  				this.$store.dispatch("mAuditoria/actCarregarAuditories", this.$q.localStorage.getItem("keyArrAuditories"))
		  				resolve ()
		  			}
		  		} else {
		  			reject ()
		  		}

  			})

  			return promesa
  		},

  		comprovarExistenciaNovesPropietats: function() {
  		},

  		editarAuditoria: function(row) {
  			this.$store.dispatch("mAuditoria/actEditarAuditoria", row.idAuditoria)
  			this.$router.push({ path: "/auditoria/informacio" })
  		},

  		eliminarAuditoria: function(row) {
	      this.$q.dialog({
	        dark: true,
	        title: 'Confirmar',
	        message: 'Eliminar auditoria del centre ' + row.dadesCentre.nomCentre.toUpperCase() + ' ?',
	        cancel: true,
	        persistent: true
	      }).onOk(() => {
	        this.$store.dispatch("mAuditoria/actEliminarAuditoria", row.idAuditoria)
	      }).onCancel(() => {
	        console.log('>>>> Cancel')
	      })

  		},

  		novaAuditoria: function () {
  			this.$store.dispatch("mAuditoria/actNovaAuditoria")
  			//debugger
  			this.$router.push({ path: "/auditoria/informacio" })
  		}
  	},

  	computed: {
  		auditories: function() {
  			return this.$store.state.mAuditoria.auditories.map( function(element, index){
					
					element.idAuditoria = index
					
					// let dd = element.data.getDate()
  				// let mm = element.data.getMonth()
  				// let yy = element.data.getFullYear()

  				// if (dd < 10) dd = '0' + dd;
  				// if (mm < 10) mm = '0' + mm;

  				// element.data = yy + "/" +  mm + "/" + dd

					return element
			  })
  		},

  		carregarAuditories: function() {
  			return this.$store.state.mAuditoria.carregarAuditories
  		},

/* 
  		auditoriesCampCalculat: function() {
  			this.auditories.forEach((obj, index, array) => {

  				let dd = obj.data.getDate()
  				let mm = obj.data.getMonth()
  				let yy = obj.data.getFullYear()

  				if (dd < 10) dd = '0' + dd;
  				if (mm < 10) mm = '0' + mm;

  				obj.data = yy + "/" +  mm + "/" + dd

  				array[index] = obj

  			})

  			return this.auditories
			}
 */			


  	}
}
</script>
