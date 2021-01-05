export default {

  idRack: null,	// necessari per la key del v-for

  ubicacio: null,
  tipusRack: null,
  estatGeneral: null,		// valor 1 - 5
  aspecteNeteja: null, 	// valor 1 - 5
  pany: {
    existeix: null,		// true / false
    clauAlPany: null,	// true / false
    estatPany: null,		// obert / tancat
  },
  zonaPasLliure: null, 	// true / false
  cablejat: {
    aspecte: null, 	// valor 1 - 5
    pPanels: {
      numPPanelActius: null,		// numero
      categoriesPPanel: null, 	// valors: 5; 5e; 6; mixte
    },
    estatTerminacions: null,  // valor 1 - 5
    duplicadorPorts: null,	// true / false,
    cablejatObsolet: null,	// true / false,
  },
  electricitat: {
    estat: null,
    regletaSuministramentNet: null,
    regletaSuministramentBrut: null,
    observacions: null
  },

  ventilacio: null,		// true / false
  dispositiusObsolets: null,
  observacions: null

}
