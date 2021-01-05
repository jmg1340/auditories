<template>
  <q-page class="q-pa-md q-gutter-md">



      <div class="rows">
        <div class="text-center q-mb-lg text-h5">IMPORTAR</div>
        <q-input v-model="dadesImportacio" label="Pegar el contenido del fichero JSON a importar" dense bg-color="brown-2" color="red-10" class="q-mt-md" autogrow filled />
        <q-btn dense @click="importar" class=" q-mt-sm q-mr-sm" color="blue-10" >Importar</q-btn>
        <q-btn dense @click="dadesAmbNovesProps" class="q-mt-sm q-mr-sm" color="blue-10" >Añadir posibles campos nuevos</q-btn>
        <p class="text-red-8 q-mt-md">* Después de hacer la importación sería conveniente guardar la información en el localStorage</p>


    		<!-- <pre>{{ dades }}</pre> -->


    	</div>







  </q-page>
</template>

<style>
</style>

<script>
import { copyToClipboard } from 'quasar'
import { exportFile } from 'quasar'

export default {
	name: 'PageImportar',

	created () {
	},


	data () {
	  	return {
	  		index: "",
	  		esJSONstringify: false,
	  		novesPropietats: false,
        dadesImportacio: ""
	  	}
  	},

  	methods : {

      copiar: function(){
        copyToClipboard(this.dades)
        .then(() => {
          this.$q.notify({
            color: "green-10",
            textColor: "white",
            message: "copiat al porta-retalls",
            position: "top",
            multiLine: true,
            timeout: 1000
          })        })
        .catch(() => {
          // fail
        })
      },

      exportar: function(){
        const status = exportFile('auditorias.json', this.dades)

        if (status === true) {
          // browser allowed it
        }
        else {
          // browser denied it
          console.log('Error: ' + status)
        }
      },



      importar: function(){
        this.$store.dispatch("mAuditoria/actImportarAuditories", this.dadesImportacio)
      },


      substituirAuditoria: function() {

		    try {
	  			let obj = JSON.parse(this.dades)

	  			this.$store.dispatch("mAuditoria/actSubstituirAuditoria", {
	  				id_auditoria: obj.idAuditoria,
	  				obj_auditoria: obj
	  			})
		    } catch(e) {
		        alert(e); // error in the above string (in this case, yes)!
		    }

  		},



  		dadesAmbNovesProps: function() {

        // plantilles on hi poden haver noves propietats que no tinguin les auditories importades
  			let localAuditoriaPlantilla = JSON.parse(JSON.stringify(this.$store.state.mAuditoria.auditoriaPlantilla))
  			let localRackPlantilla = JSON.parse(JSON.stringify(this.$store.state.mAuditoria.rackPlantilla))

        // audiotories en memòria
        let localAuditories = JSON.parse(JSON.stringify(this.$store.state.mAuditoria.auditories))



  			// Per cada auditoria, recorrem totes les propietats
  			localAuditories.forEach( function(objAuditoria, index, array) {
          console.log("--- CENTRE: " + objAuditoria.nomCentre )

          // propietats no rack
  				recorrerPropietatsObjecte( localAuditoriaPlantilla, objAuditoria )

  				// per cada rack de cada auditoria recorrem totes les seves propietats
  				let racksAuditoria = objAuditoria.instalacionsComunicacions.sala.racks
  				racksAuditoria.forEach( function(objRack, index, array) {
  					console.log("estic a les propietats del RACK")
  					recorrerPropietatsObjecte( localRackPlantilla, objRack )

  				})

  			})

        this.$store.dispatch("mAuditoria/actImportarAuditories", JSON.stringify(localAuditories))
		  	//return localAuditories


		    function recorrerPropietatsObjecte(objPlantilla, obj, arrPropsAnteriors = []) {


		    	var self = this
          let strPropietatsanteriors


		      Object.keys(objPlantilla).forEach( function (propPlantilla, index) {

          strPropietatsanteriors = (arrPropsAnteriors.length == 0) ? "" : "['" + arrPropsAnteriors.join("']['") + "']"

            // if (propPlantilla == "NumAPsWifi") debugger
            console.log ("\n--------------------------------------------------------\n")
            console.log ("strPropietatsanteriors: " + strPropietatsanteriors)
            console.log ("Propietat de l'auditoria PLANTILLA a examinar: " + propPlantilla.toUpperCase() + "\tvalor de la propietat: " + objPlantilla[propPlantilla])


            // comprovació de que NO existeix la propietat de l'auditoria plantilla a la auditoria de torn
            if (! eval("obj" + strPropietatsanteriors + ".hasOwnProperty('" + propPlantilla + "')") ) {

              // si el valor de la propietat plantilla es un objecte
      				if ( typeof objPlantilla[propPlantilla] == "object"  && objPlantilla[propPlantilla] != null){

                  console.log("La propietat (valor OBJECTE) no existeix a la auditoria de TORN. Creació de la nova propietat " + strPropietatsanteriors + "['" + propPlantilla + "'] = {}")

              		// Creacio de nova propietat a l'auditoria de TORN amb valor = objecte buit
              		eval("obj" + strPropietatsanteriors + "['" + propPlantilla + "']  = {} ")


                  /*
  	            	self.$store.dispatch("mAuditoria/actAfegirPropietat", {
  			  				objecte: "obj" + strPropietatsanteriors,
  			  				porpietat: propPlantilla,
  			  				valor: {}
			  			    })
                  */

                // afegim la propietat plantilla a arrPropsAnteriors
                arrPropsAnteriors.push(propPlantilla)

                console.log("Busquem les propietats que tingui dit objecte per afegir-les")
                // cridem a la funcio per a que comprovi les propietats de l'objecte (valor de la propietat plantilla )
                recorrerPropietatsObjecte( objPlantilla[propPlantilla], obj, arrPropsAnteriors )

                // quan ha acabat de comporovar les propietats, treiem la propietat de arrPropsAnteriors
                arrPropsAnteriors.pop()

              } else {

                  // el valor de la propietat plantilla NO es un objecte

                  console.log("La propietat (de valor NO OBJECTE) no existeix a la auditoria de TORN. Creació de la nova propietat " + strPropietatsanteriors + "['" + propPlantilla + "'] = NULL")


                  // Creacio de nova propietat amb valor = NULL
                  eval("obj" + strPropietatsanteriors + "['" + propPlantilla + "']  = null ")

                  /*
                  self.$store.dispatch("mAuditoria/actAfegirPropietat", {
                  objecte: "obj" + strPropietatsanteriors,
                  porpietat: propPlantilla,
                  valor: null
                  })
                  */

              }

	  				} else {
                console.log ("Aquesta propietat ja existeix a la auditoria de TORN.")

                if ( typeof objPlantilla[propPlantilla] == "object" && objPlantilla[propPlantilla] != null ){
                  console.log("Com que el valor de la propietat de l'auditoria PLANTILLA es un objecte, busquem per les propietats d'aquest")

                  // afegim la propietat plantilla a arrPropsAnteriors
                  arrPropsAnteriors.push(propPlantilla)

                  // cridem a la funcio per a que comprovi les propietats de l'objecte (valor de la propietat plantilla )
                  recorrerPropietatsObjecte( objPlantilla[propPlantilla], obj, arrPropsAnteriors )

                  // quan ha acabat de comporovar les propietats, treiem la propietat de arrPropsAnteriors
                  arrPropsAnteriors.pop()

                } else {
                  console.log("Com que el valor de la propietat de l'auditoria PLANTILLA es NO objecte, passem a la següent propietat")

                  // si estem a la ultima propPlantilla, treiem la propietat de arrPropsAnteriors
                  // if (Object.keys(objPlantilla).length - 1 == index ) arrPropsAnteriors.pop()
              }
            }

	  			})
	  		}

	  	}


  	},

  	computed: {
  		dades: function () {
  			let varDades

  			// if (this.novesPropietats) {
  			// 	varDades = this.dadesAmbNovesProps().slice(0)
  			// } else {
  				varDades = this.$store.state.mAuditoria.auditories
  			// }

  			if ( this.index.length != 0 ) {
  				varDades = varDades[parseInt(this.index)]
  			}

  			if (this.esJSONstringify) varDades = JSON.stringify(varDades)

  			return varDades
  		},


  	}
}
</script>
