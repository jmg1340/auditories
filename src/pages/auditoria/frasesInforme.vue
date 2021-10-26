<template>
  <div class="columns items-center q-mt-md">
    <div class="row justify-center">
      <div class="column col-sm-8 col q-pa-sm">
        <q-list bordered class="q-mb-xl bg-red-1">
          <q-item-label
            header
            class="text-red-8 text-h6 text-bold"
          >Eliminar las siguientes frases de la plantilla del informe:</q-item-label>
          <q-item>
            <q-list>
              <q-item>"Las No Conformidades han sido aclaradas y entendidas".</q-item>
              <q-separator spaced />
              <q-item>"Este informe se da por TERMINADO y ACEPTADO. Antes de su publicación en la INTRANET ha sido consensuado con el director del centro."</q-item>
            </q-list>
          </q-item>
        </q-list>


		<div class="text-h5 q-mb-md">Propuesta de frases</div>

		<q-card v-for="(obj, index) in arrFrases2" :key="'obj-'+index" class="bordered q-mb-sm">
			<q-card-section>
				<div class="text-h6 text-bold">{{ obj.tema }} </div>
			</q-card-section>

			<q-card-section >
				<div v-for="(obj2,index) in obj.frases" :key="'obj2-'+index" :class="{formatNorma: obj2.colorNorma}" class="q-pa-xs q-mx-md q-mb-xs" v-html="obj2.frase">
					<!-- {{ obj2.frase }} -->
					<q-separator spaced />
				</div>
			</q-card-section>

		</q-card>

      </div>
    </div>
  </div>
</template>

<style>
	.borde {
		border: 2px solid red;
	}
	.formatNorma {
		background-color: rgb(231, 214, 166);
	}
</style>

<script>
import {frasesInforme} from "../../statics/js/_informeFrases.js"

export default {
  name: "pFrasesInforme",

  created() {
    this.construirFrases();
  },

  data() {
    return {
      arrFrases: null
    };
  },

  methods: {
    construirFrases: function(apartat) {
      this.arrFrases = frasesInforme(this.auditoriaActual, apartat);
    }
  },

  computed: {
    auditoriaActual: function() {
      return this.$store.state.mAuditoria.auditories[
        this.$store.state.mAuditoria.indexArrAuditories
      ];
		},
		
		arrFrases2: function(){
			var arr = []
			var vTema = null
			var vFrases = []
			
			this.arrFrases.forEach(function(obj, index, array){
				if (index == 0) {
					// per al primer registre
					vTema = obj.tema
					vFrases.push({frase: obj.frase, colorNorma: obj.colorNorma})
				
				}	else if (array.length == index + 1){
					// per a l'ultim registre
					
					if (array[index].tema == array[index - 1].tema){
						vFrases.push({frase: obj.frase, colorNorma: obj.colorNorma})
						arr.push ({tema: vTema, frases: vFrases})
					}else{
						arr.push ({tema: obj.tema, frases: [obj.frase]})
					}


				}	else if (array[index].tema == array[index - 1].tema){
					// el tema del registre  actual es igual al del registre anterior
					vFrases.push({frase: obj.frase, colorNorma: obj.colorNorma})
				
				} else if (array[index].tema != array[index - 1].tema){
					// el tema del registre actual es diferent de l'anterior.

					// 1er. Guardem nova entrada a arr
					arr.push ({tema: vTema, frases: vFrases})

					// 2on. establim nous valors a les variables
					vTema = obj.tema
					vFrases = [{frase: obj.frase, colorNorma: obj.colorNorma}]

				}
			})

			return arr
		}

  }
};
</script>
