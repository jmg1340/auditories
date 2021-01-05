<template>
  <q-page class="q-pa-md">
	<div class="columns items-center">
		
		<q-input v-model="idAuditoria" label="Id auditoria" dense bg-color="brown-2" color="red-10" class="q-mb-md" autogrow filled />	
			
		<q-input v-model="objecteAuditoria" label="objecte auditoria" dense bg-color="brown-2" color="red-10" class="q-mb-md" autogrow filled />

        <q-btn
          dense
          @click="substituirAuditoria"
          class=""
          color="blue-10"				  
        >
        	buscar i substituir auditoria
        </q-btn>		
		

	</div>
  </q-page>
</template>

<style>
</style>

<script>

export default {
	name: 'PageIndex',

	created () {
	},


	data () {
	  	return {
	  		idAuditoria: null,
	  		objecteAuditoria: null
	  	}
  	},

  	methods : {
  		substituirAuditoria: function() {
  			
		    try {
	  			let strJSONStrinyfy = JSON.stringify(this.objecteAuditoria)
	  			strJSONStrinyfy.replace(/\\n/g, '')
	  			strJSONStrinyfy.replace(/\\t/g, '')

	  			let obj = JSON.parse(strJSONStrinyfy)

	  			this.$store.dispatch("mAuditoria/actSubstituirAuditoria", {
	  				id_auditoria: this.idAuditoria,
	  				obj_auditoria: obj
	  			})
		    } catch(e) {
		        alert(e); // error in the above string (in this case, yes)!
		    }

  		}

  	},

  	computed: {
  	}
}
</script>
