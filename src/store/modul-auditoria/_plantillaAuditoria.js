export default {

  // idAuditoria: null,
  dadesCentre: {
		data: null,
		nomCentre: "",
		sector: null,
		codi: null,
		domicili: null,
		tecnic: null,
		DC: null,
		interlocutors: null
	},
	
	tareasRequeridas:{
		RetirarMinipacsDelRack: false,
		RevisarCascosJabra: false,
		RetirarDelRack: false,
		Retirar1: null,
		Retirar2: null,
		Retirar3: null,
		Retirar4: null,
		Retirar5: null,
	},
	
	
	
  // INSTALACIONS I COMUNICACIONS
	
  instalacionsComunicacions: {
		

    sala: {
      
      centreSecundari: {
        existeix: null,
        idCentrePrincipal: null
      },

      accessibilitat: {
        cerraduraPorta: {
          existeix: null,
          observacions: null
        },
        estatPorta: null,	// oberta / tancada
        zonaPasLliure: {
          existeix: null,
          observacions: null,
        },
      },

      proveidorWAN: {
        estatInstalacio: null,	// valor entre 1 - 5
        instalacionsObsoletes: {
          existeix: null,
          observacions: null
        },
        idLinia1: {
          existeix: null,
          observacions: null
        },
        idLinia2: {
          existeix: null,
          observacions: null
        },
        estatConvertidorLinia1: null, 	// valor 1 - 5
        estatConvertidorLinia2: null,	// valor 1 - 5
      },

      SAI : {
        estatSAI: null,	// valor 1 - 5
        connexioSwitch: {
          existeix: null,
          connexioPortSW1Gi26: false,
          connexio: {
            SW: null,
            port: null
          }

        },
        instalacioSAI: null,	// opcions: enrackat; a terra dins el rack; al terra junt al rack
        elementsConnectatsSAI: {
          router: false,
					routerNFS: false,
					switch1: false,
					switch2: false,
					switch3: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
					router4G: false,
					filMusical: false,
					ampliFilM: false,
					raspberry: false,
          altres1: null,
          altres2: null,
          altres3: null,
          altres4: null,
          altres5: null,
          altres6: null
        },
        elementsRegletaNeta: {
          router: false,
          routerNFS: false,
					switch1: false,
					switch2: false,
					switch3: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
					router4G: false,
					filMusical: false,
					ampliFilM: false,
					raspberry: false
        },
        elementsRegletaBruta: {
          router: false,
					routerNFS: false,
          switchs: false,
					switch1: false,
					switch2: false,
					switch3: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
					router4G: false,
					filMusical: false,
					ampliFilM: false,
					raspberry: false,
        },
        elementsSenseVerificar: {
          router: false,
					routerNFS: false,
          switchs: false,
					switch1: false,
					switch2: false,
					switch3: false,
          convertidorLinia1: false,
          convertidorLinia2: false,
					router4G: false,
					filMusical: false,
					ampliFilM: false,
					raspberry: false
        },

				altresElements: {
					element1: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
					element2: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
					element3: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
					element4: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
					element5: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
					element6: {
						nom: null,
						connexio: {
							SAI: false,
							RNeta: false,
							RBruta: false,
							SenseVerificar: false
						}
					},
				}
      },

      aspecteSala: null,	// valor 1 - 5
      climatitzacio: {
        existeix: null,
        observacions: null
      },
      ventilacio: {
        existeix: null,
        observacions: null
      },
      latiguillos: {
        existeix: null,
        observacions: null
      },
      numRacksAdecuats: {
        existeix: null,
        observacions: null
      },
      elementsBaixaInventari: {
        existeix: null,
        observacions: null
      },

      numRacks: null,
      numRacksAdecuat: {
        existeix: null,
        observacions: null
      },


      racks: []
    },


    llocsDeTeball : {
      estatCablejat: null, 	// valor 1 - 5

      puntsXarxa: {
        estat: null,	// valor 1 - 5
        identificacio: {
          existeix: null,		// true / false
          observacions: null
        },
        suficientsPunts: {
          existeix: null, 	// true / false
          observacions: null
        },
        miniSwitchs: {
          existeix: null, 	// true / false
          observacions: null
        }
      },

      electricitat: {
        estat: null,	// valor 1 - 5
        suficientsEndolls: {
          existeix: null,		// true / false
          observacions: null
        },
        regletes: {
          existeix: null, 	// true / false
          observacions: null
        },
        regletesCascada: {
          existeix: null, 	// true / false
          observacions: null
        }
      },

      observacions: null
    },

    LAN : {

      SWidentificats: {  // estan identificats ?
        existeix: null,		// true / false
        observacions: null
      },
      wifiAPs: {
        quantitat: null,
        APs:{
					AP1:{
						ubicacio: null,
						observacions: null
					},
					AP2:{
						ubicacio: null,
						observacions: null
					},
					AP3:{
						ubicacio: null,
						observacions: null
					},
					AP4:{
						ubicacio: null,
						observacions: null
					},
					AP5:{
						ubicacio: null,
						observacions: null
					},
				},
				
        APvisible: {  // estan identificats ?
          existeix: null,		// true / false
          observacions: null
        },
        // coberturaPROAS: {  // estan identificats ?
        //   existeix: null,		// true / false
        //   observacions: null
        // },
        carteleriaWifi: {  // estan identificats ?
          existeix: null,		// true / false
          observacions: null
        },
        observacions: null,

				coberturaWifi: {
					dbProas: null,
					dbSalaReunions: null,
					altre1: {
						lloc: null,
						dbAltre1: null
					},
					altre2: {
						lloc: null,
						dbAltre2: null
					},
					altre3: {
						lloc: null,
						dbAltre3: null
					},
					altre4: {
						lloc: null,
						dbAltre4: null
					},
				},
      },




      NumCuesImpressio: null,
      NumCuesImpressioMTF: null,
      altresDispositius: null,
    },
		
		
    equipamentConexions: {
			connexioPortSW1Gi23: null,
      altraConnexioSW: null,
      altraConnexioGi: null,
			observacions: null,
    },


    filMusical: {
      existeix: null,
      observacions: null
    },

    telemedicina : {
      existeix: null, 	// true / false
      observacions: null,
      dispositius: {
        TV32: false,		// true / false
        Jabra510: false,	// true / false
        camaraIP: false,	// true / false
        DisplayPort: false, 	// true / false
      },
      estat: null,	// valor 1 - 5
    },

    LectorCDDVDExtern : {
      existeix: null,		// true / false
      observacions: null
    },

		firmaBiometrica: {
			numTablets: null,

			tabletsApagades: {
				existeix: null,
				observacions: null
			},

			retirarTablets: {
				existeix: null,
				observacions: null
			},
			

			tablets: {
				t1:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t2:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t3:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t4:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t5:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t6:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
				t7:{
					codi: null,
					ubicacio: null,
					observacions: null
				},
			}

		},


		gestioTorns: {
			dispositius: {
				totem: null,
				impresores: null,
				pantalles: null,
				observacions: null

			},

			revisio: {
				avisAPacients: {
					existeix: null,
					observacions: null
				},
				arribadaPacient: {
					existeix: null,
					observacions: null
				}
			}
		},



    observacions: null

  },



  // COMUNICACIONS UNIFICADES

  comunicacionsUnificades : {
    salaReunions: {
      // existeix: null,
      numero: null,
      capacitat: null,
      mides: null,
      dispositius: {
        SX10: false,		// true / false
        SX80: false,		// true / false
        roomkit: false,	// true / false
        DX80: false,	// true / false
        camaraWeb: false,  // true / false
        tablet: false, 	// true / false
        mando: false,		// true / false
        TV: false,		// true / false
        projector: false, // true / false
        PC: false, // true / false
        displayPortHDMI: false, 	// true / false
        conversorVGA_HDMI: false,	// true / false
        cableAudio: false,	// true / false
        duplicadorHDMI: false,	// true / false
      }
    },
		
    videoconferencia : {
      // existeix: null, 	// true / false
      // observacionsExistencia: null,
      // operativa: null,	// true / false
      // observacionsOperativa: null,
      // estat: null,		// valor 1 - 5
      prova: {
        feta: null,
        resultat: null,	// valor 1 - 5
        observacions: null,
      },
      // observacions: null
    },

    telefonSupervivencia : {
      existeix: null,		// true / false
      // observacionsExistencia: null,
      DDI: null,
      // instruccions: null,
      estat: null,		// valor 1 - 5
      ubicacio: null,
			resultatProva: null,
      prova : {
        trucadaSortint: false,	// true / false
        trucadaEntrant: false, 	// true / false
        desconectarTensio: false,
        nivellAudioRing: false
      },
      nivellCobertura: null,
      nivellBateria: null,
      connectatCorrent: null,
      instruccionsProperes: null,
      // observacions: null,
    },

    auricularsRecanvi: {
      existeix: null,		// true / false
      observacions: null,
      quantitat: null,	// numero
    },

		observacionsCU: null

  },


  // SEGURETAT DE LA INFORMACIO

  seguretatInformacio : {

    taulesNetes : {
      documentacioSobreTaules: {
        existeix: null,		// true / false
        observacions: null
      },
      documentacioImpresores : {
        existeix: null,		// true / false
        observacions: null
      },
      documentacioPapeleres : {
        existeix: null,		// true / false
        observacions: null
      }
    },

    destruccioDocuments: {
      destructoraPapers: {
        existeix: null,			// true / false
        observacionsPapers: null,
        complementCDs: null,	// true / false
        observacionsCDs: null,
        quantitat: null,		// numero
      },
      contenidorSegur: {
        existeix: null,			// true / false
        observacions: null,
        quantitat: null,		// numero
      }
    },

    OrientacioPantalles: {
      exterior: null, 		// true / false
      observacionsExterior: null,
      zonaPas: null, 			// true / false
      observacionsZonaPas: null
    },

    carteleriaLOPD: {
      PROAS: null, 		// true / false
      observacionsPROAS: null,
      CEX: null, 			// true / false
      observacionsCEX: null
    },

    materialBaixaInventari: {
      existeix: null, 	// true / false
      observacions: null
    },

    suportsFisics: {
      existeix: null, 	// true / false
      observacions: null
    },

    documentacioSensible: {
      existeix: null, 	// true / false
      observacions: null
    },

    expedientsGreus: {
      existeix: null, 	// true / false
      observacions: null
    },



    accesAlCentre : {
      personalIntern: {
        usuarisAmbClaus: {
          existeix: null,		// true / false
          observacions: null 	// numero
        },
        codisAlarma: {
          tipus: null,		// individuals / generic
          observacions: null 	// numero
        },
      },
      personalExtern: {
        // llibreRegistre: {
        //   existeix: null,		// true / false
        //   observacions: null 	// numero
        // },
        usuarisAmbClaus: {
          existeix: null,		// true / false
          observacions: null 	// numero
        },
        codisAlarma: {
          tipus: null,		// individuals / generic
          observacions: null 	// numero
        },
      },
      accesForaHorariHabitual: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },

      observacions: null,
    },





    // seguridad fisica i del entorno


    alarmaIntrusio: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },
		
    videovigilancia : {
			existeix: null,		// true / false
      observacions: null,
      gestioInterna: {
				existeix: null,
        observacions: null,
        gravacioImatges: {
					personalAmbAcces: null,
          periodeConservacio: null
        },
      },
      gestioExterna: {
				existeix: null,
        observacionsExistencia: null,
        periodeConservacio: null,
        evidencia: null,
        observacionsEvidencia: null
      },
			
      retol: {
				existeix: null,		// true / false
        observacions: null 	// numero
      },
      carteleriaActualitzada: {
				existeix: null,		// true / false
        observacions: null 	// numero
      },
    },
		
		alarmaIncendis: {
			existeix: null,		// true / false
			observacions: null 	// numero
		},


    // Seguretat de les operacions

    // continuidad de negocio

    GADAplanContinuidadNegocio: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    GADAcentresAlternatius: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    telefonSupervivencia: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    procedimentsPaper: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    // pendriveEmergencia: {
    //   ubicacioCorrecte : {
    //     existeix: null,		// Esta en un sobre enganxat al rack ?
    //     observacions: null
    //   },
    //   ultimaVersio : {
    //     existeix: null,		// true / false
    //     observacions: null
    //   },
    //   actualitzacio : {
    //     feta: null, 	// true / false
    //     observacions: null
    //   },
    // },


    // seguretat de les comunicacions

    accesSegurSalaComunicacions: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    accesSegurRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    SAIRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    // puntsXarxaSalaEspera: {
    //   existeix: null,		// true / false
    //   observacions: null 	// numero
    // },

    observacions: null

  },

  formacio: {
    auriculars: null,
    videoconferencia: null,
    llicenciesM3: null,
    telefonSupervivencia: null,
    observacions: null
  },

  valoracions: {
    usuari: {
      queixes: null,
      suggeriments: null,
      millores: null
    },

    tecnic: {
      valoracions: null
    }
  },

  accionsMillora: {
    observacions:{
      rack:{
        neteja: false,
        sanejar: false,
        retirarPatchP: false,
        retirarRack: false
      },
      wanSanejar: false,
      sala: {
        neteja: false,
        retirarObjectes: false
      },
      SAI: {
        revisoDispNoConnectats: false,
      },
      enviarPendriveBIOS: false,
      enviarLatiguillos: false,
      llocsTreball: {
        ampliacioPuntsXarxa: false,
        revisarPresesXarxa: false,
        revisarCaixaConexions: false,
      },
      revisarTelemedicina: false,
      revisarVideoconferencia: false,
      // enviarWebcam: false,
      CU: {
        enviarAuricularsReservaEvolve65: false,
        enviarAuricularsReservaJabra930: false,
        enviarAuricularsReserva: false,
        enviarAltaveuJabra: false,
      },
			Seguretat: {
				solicitarDestructoraPaper: false,
				solicitarContenidor: false,
				visibilitatPantalles: false
			},
      enviarLectorCDDVD: false,
      // renoveProjector: false,
      // altres: null
    },

    NC: {
      // enviarPendriveEmergencia: false,
      solicitarDestructoraPaper: false,
      solicitarContenidor: false,
      visibilitatPantalles: false,
      salaRackSenseClau: false,
      rackSenseClaus: false,
      carteleriaLOPD: false,
      suportsBackup: false,
      docsSensibles: false,
      // altres: null
    }
  }

}
