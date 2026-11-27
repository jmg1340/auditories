export default {

	
	auditories: [],
	indexArrAuditories: null,
	carregarAuditories: true,

	auditoriaPlantilla: {
		idAuditoria: null,	// numero
		data: null,
		tecnic: null,
		CA: {
			codi: "",
			nom: "",
			idSiteBT: "",
			totalUsuaris: 0,
		},
		checkList:{


			// INSTALACIONS I COMUNICACIONS
			instalacionsComunicacions: {

				sala: {

					aspecteSala: null,	// valor 1 - 5
					centreSecundari: {
						existeix: null,
						idCentrePrincipal: ""
					},
					ventilacio: {
						existeix: null,
						observacions: ""
					},
					latiguillos: {
						existeix: null,
						observacions: ""
					},
					numRacksAdecuats: {
						existeix: null,
						observacions: ""
					},

					accessibilitat: {
						cerraduraPorta: {
							existeix: null,
							observacions: ""
						},
						estatPorta: "",	// oberta / tancada
						zonaPasLliure: {
							existeix: null,
							observacions: "",
						},
					},
					proveidorWAN: {
						estatInstalacio: null,	// valor entre 1 - 5
						instalacionsObsoletes: {
							existeix: null,
							observacions: ""
						},
						idLinia1: {
							existeix: null,
							observacions: ""
						},
						idLinia2: {
							existeix: null,
							observacions: ""
						},
						estatConvertidorLinia1: null, 	// valor 1 - 5
						estatConvertidorLinia2: null,	// valor 1 - 5
						instalacionsObsoletes: {
							existeix: null,
							observacions: ""
						}
					},
	 
					racks: [] 
				},


				llocsDeTeball : {
					cablejat: {
						estat: null, 	// valor 1 - 5
						observacions: ""
					},
					
					puntsXarxa: {
						estat: null,	// valor 1 - 5
						identificacio: {
							existeix: null,		// true / false
							observacions: ""
						},
						suficientsPunts: {
							existeix: null, 	// true / false
							observacions: ""
						},
						miniSwitchs: {
							existeix: null, 	// true / false
							observacions: ""
						}
					},

					electricitat: {
						estat: null,	// valor 1 - 5
						suficientsEndolls: {
							existeix: null,		// true / false
							observacions: ""
						},
						regletes: {
							existeix: null, 	// true / false
							observacions: ""
						},
						regletesCascada: {
							existeix: null, 	// true / false
							observacions: ""
						}
					},

					observacions: ""
				},

				LAN : {
					dispositiusNoRack: {
						wifiAPs: {
							quantitat: null,
							ubicacio: "",
							cobertura: "",
							observacions: ""
						},
						impresores: {
							quantitat: null,
							observacions: ""
						},
						multifuncions: {
							quantitat: null,
							observacions: ""
						},
						altres: ""
					}
				},

				pendriveEmergencia: {
					ubicacioCorrecte : {
						existeix: null,		// Esta en un sobre enganxat al rack ?
						observacions: ""
					},
					actualitzacio : {
						feta: null, 	// true / false
						observacions: ""
					},
				},

				pendriveBIOS : {
					existeix: null,		// true / false
					ubicacio: "",
					observacions: ""
				},

				telemedicina : {
					existeix: null, 	// true / false
					dispositius: {
						TV32: false,		// true / false
						Jabra510: false,	// true / false
						camaraIP: false,	// true / false
						DisplayPort: false, 	// true / false
					},
					estat: null,	// valor 1 - 5
					observacions: ""
				},




			},


			// Comunicacions unificades
			comunicacionsUnificades : {
				videoconferencia : {
					existeix: null, 	// true / false
					operativa: null,	// true / false
					estat: null,		// valor 1 - 5
					dispositius: {
						SX10: false,		// true / false
						SX80: false,		// true / false
						roomkit: false,	// true / false
						camaraWeb: false,  // true / false
						tablet: false, 	// true / false
						TV: false,		// true / false
						projector: false, // true / false
						displayPortHDMI: false, 	// true / false
						duplicadorHDMI: false,	// true / false
						conversorVGA_HDMI: false,	// true / false
						cableAudio: false,	// true / false
					},
					prova: {
						trucada: false,	// true / false
						compartirPc: false, // true / false
						audio: false,	// true / false
						video: false, 	// true / false
						resultat: null,	// valor 1 - 5
						observacions: ""
					}
				},

				telefonSupervivencia : {
					existeix: null,		// true / false
					numTelefon: "",
					instruccions: null,
					estat: null,		// valor 1 - 5
					ubicacio: "",
					cobertura: "",
					bateria: "",
					connectatCorrent: null,
					prova : {
						trucadaSortint: null,	// true / false
						trucadaEntrant: null 	// true / false
					},
					observacions: ""
				},

				auriculars: {
					existeix: null,		// true / false
					quantitat: null,	// numero
					observacions: ""
				}

			},


			seguretatInformacio : {
				destruccioDocuments: {
					destructoraPapers: {
						existeix: null,			// true / false
						complementCDs: null,	// true / false
						quantitat: null,		// numero
					},
					contenidorSegur: {
						existeix: null,			// true / false
						quantitat: null,		// numero
					}
				},

				accesAlCentre : {
					usuarisAmbClaus: {
						existeix: null,		// true / false
						numUsuaris: null 	// numero
					},
					codisAlarmaIndividuals: null 	// true / false
				},

				taulesNetes : {
					documentacioSobreTaules: {
						existeix: null,		// true / false
						observacions: ""
					},
					documentacioImpresores : {
						existeix: null,		// true / false
						observacions: ""
					}
				},

				videovigilancia : {
					existeix: null,		// true / false
					retol: null,		// true / false
					gravacioImatges: {
						personalAmbAcces: "",
						periodeConservacio: ""
					},
					observacions: ""
				},

				suportsFisics : {
					existeix: null,
					tipusSuport: null,
					observacions: null
				},

				OrientacioMonitors: {
					existeix: null, 		// hi ha algun monitor mal orientat
					ubicacio: null,
					observacions: null
				}
			}


		}
	},







	rackPlantilla: {

		idRack: null,	// necessari per la key del v-for
		
		ubicacio: "",
		tipusRack: "",
		estatGeneral: null,		// valor 1 - 5
		aspecteNeteja: null, 	// valor 1 - 5
		zonaPasLliure: null, 	// true / false
		ventilacio: null,		// true / false
		dispositiusObsolets: "",
		
		pany: {
			existeix: null,		// true / false
			clauAlPany: null,	// true / false
			estatPany: "",		// obert / tancat
		},


		cablejat: {
			aspecte: null, 	// valor 1 - 5
			estatTerminacions: null,  // valor 1 - 5
			duplicadorPorts: null,	// true / false,
			cablejatObsolet: null,	// true / false,
			observacions: null,	
		},

		electronicaRed: {

			pPanels: {
				numPPanelActius: null,		// numero
				numPPanelObsolets: null,	// numero
				categoriesPPanel: null, 	// valors: 5; 5e; 6; mixte
			},

			switchs: {
				Actius: null,		//numero
				Obsolets: {
					existeix: null, // true / false,
					observacions: ""
				},
				identificacio: {  // estan identificats ?
					existeix: null,		// true / false
					observacions: ""
				},
				connexionsSwitchPrincipal: {
					portGE21_UCS: false,		// true / false
					portGE22_wifiAP: false,	// true / false
					portGE23_serveis: false,	// true / false
					portGE24_antigaCentraleta: false,	// true / false
					portGE25_router: false,	// true / false
					portGE26_SAI: false,		// true / false
					observacions: ""
				}
			},


			router: {
				existeixIdentificacio: null,	// true / false
				observacions: ""
			}

		},

		SAI : {
			estatSAI: null,	// valor 1 - 5
			connexioSwitch: {
				existeix: null,
				portSwitch: ""
			},
			ubicacioRack: "",	// opcions: enrackat; a terra dins el rack; al terra junt al rack
			elementsConnectats: {
				router: false,	// true / false
				switchs: false,
				convertidorLinia1: false,
				convertidorLinia2: false,
				altres: ""
			},
			regletaSuministreNet: null,		// true / false
			regletaSuministreBrut: null,	// true / false
			observacions: ""
		},

		observacions: ""



	}






}
