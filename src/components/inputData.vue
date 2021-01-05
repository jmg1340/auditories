<template>

	<div class="row items-center jmg_bordeInferior">
		<div class="col-4 q-pr-sm text-left">
			{{ etiqueta}}
		</div>
		<div class="col-8" >

		    <q-input filled v-model="campTemplate" mask="date" :rules="['date']">
		      <template v-slot:append>
		        <q-icon name="event" class="cursor-pointer">
		          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
		            <q-date 
		            	minimal
		            	mask="YYYY-MM-DD"
		            	:locale="formatCalendari"
		            	v-model="campTemplate" 
		            	@input="() => $refs.qDateProxy.hide()" 
		            />
		          </q-popup-proxy>
		        </q-icon>
		      </template>
		    </q-input>
		    
		</div>
	</div>


</template>

<style>
	.borde {
		border: 2px solid red;
	}
</style>

<script>
export default {
	name: 'PageIndex',

	props: ['etiqueta', 'arrCamps'],

	created () {
	},


	data () {
	  	return {
			formatCalendari: {
				days: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte' ],
				daysShort: ['dg', 'dll', 'dm', 'dcr', 'dj', 'dv', 'ds'],
				months: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
				monthsShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
				firstDayOfWeek: 1
			},
			_arrCamps: null
	  	}
  	},

  	methods : {
  	},

  	computed: {
		
		campTemplate: {
			get() {
				//debugger
				this._arrCamps = eval(this.arrCamps)   // transforma string a array
				
				switch ( this._arrCamps.length )  {
					case 1:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]]
						break
					case 2:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]][this._arrCamps[1]]
						break
					case 3:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]][this._arrCamps[1]][this._arrCamps[2]]
						break
					case 4:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]][this._arrCamps[1]][this._arrCamps[2]][this._arrCamps[3]]
						break
					case 5:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]][this._arrCamps[1]][this._arrCamps[2]][this._arrCamps[3]][this._arrCamps[4]]
						break
					case 6:
						return this.$store.state.mAuditoria.auditories[this.$store.state.mAuditoria.indexArrAuditories][this._arrCamps[0]][this._arrCamps[1]][this._arrCamps[2]][this._arrCamps[3]][this._arrCamps[4]][this._arrCamps[5]]
						break
				}

			},
			set (value) {
				this.$store.commit( 'mAuditoria/updateCamp', { arrProps: this.arrCamps, valor: value} )
			}
		},
  	}
}
</script>
