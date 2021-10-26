
/* Aquesta funcio preten de que si en una mateixa frase hi ha punts i aparts o nous paragrafs,
   realment es mostrin per pantalla.
	 Requisits:
	 	1. que el string de la frase no vagi entre "" sino entre ``
		2. que a frasesInforme.vue hi hagi la directiva v-html al div que mostra la frase
*/
const frasePuntsApart = frase => {
	let string = ""
	frase.split("\n").forEach( (paragraf) => string += paragraf + "<br />")
	return string
}


export function frasesInforme (obj, apartat = null){
  var objAuditoria = obj
  var apartatInforme = apartat


/**
  2 tipus de objectes depenent de si la frase depen del valor d'algun camp (2on objecte) o és independent de qualsevol valor (1er objecte)



  {
    apartatInforme: "",
    fraseGeneral : ""
  },


  {
    apartatInforme: "",
    valorPropietat:  objAuditoria. ,
    arrFrases: [
      {
        valorActivacioFrase: valor ,
        frase: ""
      },
      {
        valorActivacioFrase: valor ,
        frase: ""
      }
    ]
  },


 */






  var arrAvaluacioFrases = [
    /*    ***** INSTALACIONS I COMUNICACIONS ******   */

    /*       sala comunicacions       */

    {
      apartatInforme: "instalaciones-sala",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Se dispone de un cuarto técnico ventilado a través de una rejilla que contiene el cuadro eléctrico, la alarma contra incendios, el equipo de control de la climatización y las líneas de comunicaciones, disponiendo de cerradura en su puerta y permaneciendo habitualmente cerrado."
        },
        {
          valorActivacioFrase: false ,
          frase: "No hay una sala de comunicaciones dedicada. El rack principal se encuentra ubicado en una zona de administración."
        }
      ]
    },

    {
      apartatInforme: "instalaciones-sala",
      valorPropietat: objAuditoria.instalacionsComunicacions.sala.accessibilitat.cerraduraPorta.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "La sala tiene cerradura en la puerta"
        },
        {
          valorActivacioFrase: false,
          frase: "La sala no tiene cerradura en la puerta"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-sala",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.accessibilitat.estatPorta,
      arrFrases: [
        {
          valorActivacioFrase: "abierta" ,
          frase: " y ésta se encuentra abierta."
        },
        {
          valorActivacioFrase: "cerrada" ,
          frase: " y ésta se encuentra cerrada."
        }
      ]
    },
    {
      apartatInforme: "instalaciones-sala",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.accessibilitat.zonaPasLliure.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El acceso a la sala se encuentra libre de obstáculos."
        },
        {
          valorActivacioFrase: false ,
          frase: "Hay ciertos obstáculos en el acceso a la sala."
        }
      ]
    },





    /*       proveidor WAN       */
    {
      apartatInforme: "instalaciones-proveedorWAN",
      fraseGeneral : "La instalación de las líneas de Fibra Óptica (PTR) del centro se encuentran en la pared al lado del rack de comunicaciones, y sus ONT (conversores de F.O.) están ubicados dentro del rack. "
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      fraseGeneral : "En el cofre se localizan los ONT (conversores de F.O.) estando ubicados en la parte inferior, inmediatamente encima de la regleta de alimentación. Ninguno de los dos identifica a que línea de Fibra Óptica corresponde, tampoco se alimentan del SAI al estar aquí ubicados. De dichos conversores salen sus respectivos cables del tipo RJ-45 cuyo camino hacia el router no es posible identificar, ya que se esconden detrás del cofre sin ningún tipo de identificación."
    },

    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.estatInstalacio,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado general de la instalacion del proveedor de comunicaciones es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado general de la instalacion del proveedor de comunicaciones es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.instalacionsObsoletes.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Se detectan instalaciones obsoletas del proveedor de comunicaciones"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.idLinia1.existeix,
      arrFrases: [
        {
          valorActivacioFrase: false ,
          frase: "La identificación de la línea principal es incorrecta o no tiene identificación"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.idLinia2.existeix,
      arrFrases: [
        {
          valorActivacioFrase: false ,
          frase: "La identificación de la línea de backup es incorrecta o no tiene identificación"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia1,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado del convertidor de medios principal es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado del convertidor de medios principal es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-proveedorWAN",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.proveidorWAN.estatConvertidorLinia2,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente" ,
          frase: "El estado del convertidor de medios de backup es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente" ,
          frase: "El estado del convertidor de medios de backup es muy deficiente"
        },
      ]
    },



    /***************       SAI       ***************/

    {
      apartatInforme: "instalaciones-SAI",
      fraseGeneral : "Se dispone de dos regletas de alimentación eléctrica dentro del rack. Una regleta marcada como salida SAI y otra línea 24h, toda los dispositivos del rack están conectados a la regleta del SAI a excepción el convertidor de medios de backup y el router que están conectados a la regleta sucia."
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.SAI.estatSAI,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado general del SAI es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado general del SAI es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.SAI.connexioSwitch.existeix,
      arrFrases: [
        {
          valorActivacioFrase: false,
          frase: "El SAI no tiene una conexión al switch"
        },
        {
          valorActivacioFrase: true,
          frase: (function(){
            if (objAuditoria.instalacionsComunicacions.sala.SAI.connexioSwitch.connexioPortSW1Gi26){
              return "El SAI esta correctamente conectado al SW1 puerto 26"
            } else {
              return "Els SAI esta conectado al switch " + objAuditoria.instalacionsComunicacions.sala.SAI.connexioSwitch.connexio.SW + 
                      " en el puerto " + objAuditoria.instalacionsComunicacions.sala.SAI.connexioSwitch.connexio.port
            }
          })()
        },
      ]
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.SAI.instalacioSAI,
      arrFrases: [
        {
          valorActivacioFrase: "enrackado",
          frase: "El SAI se encuentra enrackado"
        },
        {
          valorActivacioFrase: "sueloEnRack",
          frase: "El SAI se encuentra en el suelo del rack"
        },
        {
          valorActivacioFrase: "sueloJuntoRack",
          frase: "El SAI se encuentra en el suelo junto al rack"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat: typeof objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI,
      arrFrases: [
        {
          valorActivacioFrase: "object",
          frase: (function (){
            let arrElem = []
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.router) arrElem.push("router")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.switchs) arrElem.push("switchs")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia1) arrElem.push("convertidorLinia1")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.convertidorLinia2) arrElem.push("convertidorLinia2")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsConnectatsSAI.altres) arrElem.push("otros")

            if (arrElem.length == 0){
              return null
            } else {
              return "Elementos conectados directamente al SAI: " + arrElem.join(", ")
            }
          })()
        },
      ]
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat: typeof objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta,
      arrFrases: [
        {
          valorActivacioFrase: "object",
          frase: (function (){
            let arrElem = []
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.router) arrElem.push("router")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.switchs) arrElem.push("switchs")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia1) arrElem.push("convertidorLinia1")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.convertidorLinia2) arrElem.push("convertidorLinia2")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaNeta.altres) arrElem.push("otros")

            if (arrElem.length == 0){
              return null
            } else {
              return "Elementos conectados a la regleta limpia: " + arrElem.join(", ")
            }
          })()
        },
      ]
    },
    {
      apartatInforme: "instalaciones-SAI",
      valorPropietat: typeof objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta,
      arrFrases: [
        {
          valorActivacioFrase: "object",
          frase: (function (){
            let arrElem = []
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.router) arrElem.push("router")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.switchs) arrElem.push("switchs")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia1) arrElem.push("convertidorLinia1")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.convertidorLinia2) arrElem.push("convertidorLinia2")
            if (objAuditoria.instalacionsComunicacions.sala.SAI.elementsRegletaBruta.altres) arrElem.push("otros")

            if (arrElem.length == 0){
              return null
            } else {
              return "Elementos conectados a la regleta sucia: " + arrElem.join(", ")
            }
          })()
        },
      ]
    },



    /***************       ASPECTO / CLIMATIZACION / LATIGUILLOS / BAJAS INVENTARIO       ***************/
    {
      apartatInforme: "instalaciones-asepectoClimatizacionLatiguillos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.aspecteSala,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado general del la sala es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado general del la sala es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "instalaciones-asepectoClimatizacionLatiguillos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.climatitzacio.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "La sala tiene climatización. " + (objAuditoria.instalacionsComunicacions.sala.climatitzacio.observacions || "")
        },
        {
          valorActivacioFrase: false,
          frase: "La sala no tiene climatización. " + (objAuditoria.instalacionsComunicacions.sala.climatitzacio.observacions || "")
        },
      ]
    },
    {
      apartatInforme: "instalaciones-asepectoClimatizacionLatiguillos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.ventilacio.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Tiene ventilación. " + (objAuditoria.instalacionsComunicacions.sala.ventilacio.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No tiene ventilación. " + (objAuditoria.instalacionsComunicacions.sala.ventilacio.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "instalaciones-asepectoClimatizacionLatiguillos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.latiguillos.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Existen latiguillos de reserva. " + (objAuditoria.instalacionsComunicacions.sala.latiguillos.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No hay latiguillos de reserva " + (objAuditoria.instalacionsComunicacions.sala.latiguillos.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "instalaciones-asepectoClimatizacionLatiguillos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.sala.elementsBaixaInventari.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Existen elementos de baja en el inventario. " + (objAuditoria.instalacionsComunicacions.sala.elementsBaixaInventari.observacions || "")
        },
      ]
    },

    /***************     PENDRIVE i TELEMEDICINA       ***************/

    /***************     Pendrive         ***************/

    {
      apartatInforme: "instalaciones-pendrive",
      valorPropietat: objAuditoria.instalacionsComunicacions.pendriveBIOS.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de un pendrive de emergencia ubicado en " + (objAuditoria.instalacionsComunicacions.pendriveBIOS.ubicacio || "") + ". Costaisa periódicamente se pone en contacto con el centro para la realizar la actualización de dicho pendrive.",
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de un pendrive de emergencia. ",
        },
      ]
    },

    {
      apartatInforme: "instalaciones-pendrive",
      fraseGeneral : "En caso de fallo de la UCSE, el pendrive se ha de utilizar para poder iniciar los equipos de forma escalonada. Antes de la visita se confirma que está actualizado mediante ticket SS-     . El centro dispone de un manual sobre su utilización en una carpeta en el interior de rack."
    },
  


      
    /***************       AREA DE TRABAJO       ***************/


    /***************     Cableado         ***************/

    {
      apartatInforme: "AreaTrabajo-cableado",
      valorPropietat: objAuditoria.instalacionsComunicacions.llocsDeTeball.estatCablejat,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "En general el estado del cableado de los puestos de trabajo es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "En general el estado del cableado de los puestos de trabajo es muy deficiente"
        },
      ]
    },



    /***************     Punts de xarxa         ***************/

    {
      apartatInforme: "AreaTrabajo-tomasDatos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.estat,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado general de las tomas de red es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado general de las tomas de red es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-tomasDatos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Las tomas de datos estan debidamente identificadas. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Existen tomas de datos que no estan debidamente identificadas. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.identificacio.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-tomasDatos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro tiene suficientes tomas de datos. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Existen puestos de trabajo que no tienen suficientes tomas de datos. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.suficientsPunts.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-tomasDatos",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se ha encontrado mini-switch en el centro. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se ha encontrado ningún mini-switch en el centro. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.puntsXarxa.miniSwitchs.observacions || ""),
        },
      ]
    },




    /***************     Electricitat         ***************/

    {
      apartatInforme: "AreaTrabajo-electricidad",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.estat,
      arrFrases: [
        {
          valorActivacioFrase: "deficiente",
          frase: "El estado general del sistema eléctrico es deficiente"
        },
        {
          valorActivacioFrase: "muy deficiente",
          frase: "El estado general del sistema eléctrico es muy deficiente"
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-electricidad",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de suficientes enchufes. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "La cantidad de enchufes en el centro es insuficiente. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.suficientsEndolls.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-electricidad",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "En el centro hay algun puesto que usa regleta de enchufes. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Los puestos no tienen ninguna regleta de enchufes. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletes.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "AreaTrabajo-electricidad",
      valorPropietat:  objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "En el centro hay algun puesto que usa regleta de enchufes en cascada. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Los puestos no tienen ninguna regleta de enchufes en cascada. " + (objAuditoria.instalacionsComunicacions.llocsDeTeball.electricitat.regletesCascada.observacions || ""),
        },
      ]
    },






    /***************       LAN       ***************/

    /***************     Switchs         ***************/

    {
      apartatInforme: "LAN-switchs",
      fraseGeneral : "El centro dispone de un router Cisco 2911, 2 Switchs SG300 que dan servicio al AP (Wifi Access point plata baja, y el segundo AP el la primera planta), puestos de trabajo, impresoras, y terminal de presencia."
    },
    {
      apartatInforme: "LAN-switchs",
      fraseGeneral : "La UCSE está conectada al SW01-GE0/21 (puerto 21 del switch), y es la que permite que los ordenadores arranquen en red. IMPORTANTE -> Siempre debe estar conectada en ese switch y puerto, cambiarla a otra haría que dejase de funcionar. En caso de fallo de este dispositivo se deberá utilizar el pendrive de emergencia que está situado en el sobre del rack."
    },
    {
      apartatInforme: "LAN-switchs",
      valorPropietat:  objAuditoria.instalacionsComunicacions.LAN.SWidentificats.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Todos los switchs estan debidamente identificados con una etiqueta. " + (objAuditoria.instalacionsComunicacions.LAN.SWidentificats.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Hay n switchs que no tienen etiqueta identificativa. " + (objAuditoria.instalacionsComunicacions.LAN.SWidentificats.observacions || ""),
        },
      ]
    },


    /***************     APs Wifi         ***************/

    {
      apartatInforme: "LAN-APs",
      fraseGeneral : "No se ha conseguido localizar la ubicación de AP, posiblemente está sobre el falso techo cerca de Admisiones, ya que hay buena cobertura de wifi en la zona de PROAS."
    },
    {
      apartatInforme: "LAN-APs",
      fraseGeneral : "El Wifi AP está conectado en el Patch-Panel de enlaces del rack, y correctamente identificado. Está “parcheado” en el SW01-GE0/22 (puerto 22 del switch). IMPORTANTE -> Siempre debe estar conectado en ese switch y puerto, cambiarlo a otro haría que dejase de funcionar."
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat:  isNaN(objAuditoria.instalacionsComunicacions.LAN.wifiAPs.quantitat),
      arrFrases: [
        {
          valorActivacioFrase: false,
          frase: "En numero de puntos de acceso wifi que hay en el centro es de " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.quantitat || ""),
        },
      ]
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat: objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.salaEspera,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: (function() {
            if (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.quantitat == 1) {
              return "Se encuentra ubicado en la sala de espera."
            } else {
              return "En la sala de espera hay un punto de acceso."
            }
          })(),
        },
        {
          valorActivacioFrase: false,
          frase: "En la sala de espera no hay ningún punto de acceso",
        },
      ]
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat:  (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.altres == null || objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.altres == ""),
      arrFrases: [
        {
          valorActivacioFrase: false,
          frase: (function() {
            if (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.quantitat == 1) {
              if (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.salaEspera == false)
                return "El punto de acceso se encuentra ubicado en " + objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.altres
            } else {
              return "También hay un punto de acceso en " + objAuditoria.instalacionsComunicacions.LAN.wifiAPs.ubicacio.altres
            }
          })(),
        },
      ]
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat:  objAuditoria.instalacionsComunicacions.LAN.wifiAPs.APvisible.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El punto de acceso esta visible. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.APvisible.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El punto de acceso no esta visible. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.APvisible.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat:  objAuditoria.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Hay cobertrua wifi suficiente en zona PROAS. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "La cobertura wifi no es suficiente en zona PROAS. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.coberturaPROAS.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "LAN-APs",
      valorPropietat:  objAuditoria.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se comprueba que en el centro hay carteleria wifi. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Se comprueba que en el centro no hay carteleria wifi. " + (objAuditoria.instalacionsComunicacions.LAN.wifiAPs.carteleriaWifi.observacions || ""),
        },
      ]
    },



    /***************     Climatitzacio         ***************/

    {
      apartatInforme: "LAN-climatizacion",
      fraseGeneral : "El ordenador de control de climatización del centro asistencial está ubicado en el cuarto técnico del cofre. Está conectada al SW01-GE0/23 (puerto 23 del switch) a través del puerto DA.3 del patch panel de enlaces. IMPORTANTE -> Siempre debe estar conectada en ese switch y puerto, cambiarlo a otro haría que dejase de funcionar."
    },



    /***************     Hilo musical         ***************/

    {
      apartatInforme: "instalaciones-hiloMusical",
      valorPropietat: objAuditoria.instalacionsComunicacions.filMusical.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de hilo musical. " + ((objAuditoria.instalacionsComunicacions.filMusical.connexioSwitchPort == null || objAuditoria.instalacionsComunicacions.filMusical.connexioSwitchPort == "") ? "" : "Esta conectado al " + objAuditoria.instalacionsComunicacions.filMusical.connexioSwitchPort + ". ") + (objAuditoria.instalacionsComunicacions.filMusical.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de hilo musical. " + (objAuditoria.instalacionsComunicacions.filMusical.observacions || ""),
        },
      ]
    },


     /***************     telemedicina         ***************/

     {
      apartatInforme: "instalaciones-telemedicina",
      fraseGeneral : frasePuntsApart(`Xavi: Ayer JLP me llamó la atención por el mensaje que estamos dando sobre la revisión que hacemos del equipo de Telemedicina. Tenemos que poner un mensaje que no de a entender que como no lo utilizan, por las causas que sean, no lo revisamos.
			En el informe debería poner algo así:
        - Se revisan están todos los elementos y se comprueba que están correctamente conectados.
        - Se revisa que todos los elementos funcionan.
			`)
    },
		{
      apartatInforme: "instalaciones-telemedicina",
      fraseGeneral : "Se realiza con Costaisa la verificación del correcto funcionamiento del sistema de telemedicina. Las pruebas realizadas simulando una sesión de telemedicina son correctas."
    },
    {
      apartatInforme: "instalaciones-telemedicina",
      fraseGeneral : "El equipo de telemedicina está compuesto del siguiente material: ordenador Lenovo Tiny All-in-One; adaptador DP (Display Port) a HDMI; Jabra 510 (altavoz/micrófono); cámara Video Axis; televisor 32''"
    },
    {
      apartatInforme: "instalaciones-telemedicina",
      valorPropietat: objAuditoria.instalacionsComunicacions.telemedicina.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de equipo para telemedicina. " + (objAuditoria.instalacionsComunicacions.telemedicina.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de telemedicina, por lo que no procede valoración. " + (objAuditoria.instalacionsComunicacions.telemedicina.observacions || ""),
        },
      ]
    },

    /***************     Lector CD/DVD         ***************/

    {
      apartatInforme: "instalaciones-lectorCDExterno",
      valorPropietat: objAuditoria.instalacionsComunicacions.LectorCDDVDExtern.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de un lector de CD/DVD externo. " + (objAuditoria.instalacionsComunicacions.LectorCDDVDExtern.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de un lector de CD/DVD externo. " + (objAuditoria.instalacionsComunicacions.LectorCDDVDExtern.observacions || ""),
        },
      ]
    },




    /***************     COMUNICACIONES UNIFICADAS       ***************/

    /***************     medios audiovisuales         ***************/

    {
      apartatInforme: "cu-mediosAudioVisuales",
      valorPropietat: objAuditoria.comunicacionsUnificades.salaReunions.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "En el centro hay una sala de reuniones. Tiene aproximadamente unas medidas de " + objAuditoria.comunicacionsUnificades.salaReunions.mides + " y una capacidad de unas " + objAuditoria.comunicacionsUnificades.salaReunions.capacitat + " personas. " + (objAuditoria.comunicacionsUnificades.salaReunions.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no hay una sala de reuniones. " + (objAuditoria.comunicacionsUnificades.salaReunions.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "cu-mediosAudioVisuales",
      valorPropietat: /[a-z]|[A-Z]|[0-9]/.test( (objAuditoria.comunicacionsUnificades.salaReunions.recomanacions || "")),
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se recomienda " + (objAuditoria.comunicacionsUnificades.salaReunions.recomanacions || ""),
        },
      ]
    },
    {
      apartatInforme: "cu-mediosAudioVisuales",
      fraseGeneral : "El centro dispone de un equipo de videoconferencia compuesta de una SX10, Tablet, proyector, TV y estación corporativa."
    },
    {
      apartatInforme: "cu-mediosAudioVisuales",
      fraseGeneral : "El centro no dispone de equipo de videoconferencia. En su lugar disponen de una cámara webcam modelo Logitech 5500."
    },
      {
      apartatInforme: "cu-mediosAudioVisuales",
      valorPropietat: objAuditoria.comunicacionsUnificades.videoconferencia.prova.feta,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se realiza una prueba de videoconferencia y el resultado ha sido " + objAuditoria.comunicacionsUnificades.videoconferencia.prova.resultat + ". " + (objAuditoria.comunicacionsUnificades.videoconferencia.prova.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se ha podido hacer la prueba de videoconferencia. " + (objAuditoria.comunicacionsUnificades.videoconferencia.prova.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "cu-mediosAudioVisuales",
      valorPropietat: /[a-z]|[A-Z]|[0-9]/.test( (objAuditoria.comunicacionsUnificades.videoconferencia.observacions || "")),
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: (objAuditoria.comunicacionsUnificades.videoconferencia.observacions || ""),
        },
      ]
    },



    /***************     telefono supervivencia         ***************/

    {
      apartatInforme: "cu-telefonoSupervivencia",
      valorPropietat: objAuditoria.comunicacionsUnificades.telefonSupervivencia.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro tiene un teléfono de supervivencia cuyo numero es " + objAuditoria.comunicacionsUnificades.telefonSupervivencia.DDI + " y está ubicado en " + objAuditoria.comunicacionsUnificades.telefonSupervivencia.ubicacio + "." ,
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no tiene un teléfono de supervivencia. " + objAuditoria.comunicacionsUnificades.telefonSupervivencia.observacionsExistencia,
        },
      ]
    },
    {
      apartatInforme: "cu-telefonoSupervivencia",
      fraseGeneral : "Está conectado a la red eléctrica, se desconecta de la red para ver que la carga de la batería es correcta. La cobertura es buena."
    },
    {
      apartatInforme: "cu-telefonoSupervivencia",
      fraseGeneral : "Se prueban a realizar tanto llamadas salientes como entrantes, siendo el tono de llamada adecuado en el caso de que se recibiese alguna llamada."
    },
    {
      apartatInforme: "cu-telefonoSupervivencia",
      fraseGeneral : "A pesar de que las líneas de datos estan convenientemente redundadas, en el caso de perder las comunicaciones también se perdería la posibilidad de recibir y realizar llamadas. El objetivo de este teléfono es de disponer de un tercer sistema de backup que permita al centro comunicar a los proveedores de los servicios que tienen un problema y que, en caso de coincidir con una emergencia, se pudiera dar aviso a las ayudas externas (emergencias, bomberos, etc.). Así pues, su uso queda restringido para realizar llamadas en caso de que no funcionen las comunicaciones de voz habituales."
    },
    {
      apartatInforme: "cu-telefonoSupervivencia",
      valorPropietat: /[a-z]|[A-Z]|[0-9]/.test( (objAuditoria.comunicacionsUnificades.telefonSupervivencia.observacions || "")),
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: (objAuditoria.comunicacionsUnificades.telefonSupervivencia.observacions || ""),
        },
      ]
    },


    /***************     auriculares         ***************/

    {
      apartatInforme: "cu-auriculares",
      valorPropietat: objAuditoria.comunicacionsUnificades.auricularsRecanvi.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de " + objAuditoria.comunicacionsUnificades.auricularsRecanvi.quantitat + " auricular(es) de repuesto. " + objAuditoria.comunicacionsUnificades.auricularsRecanvi.observacions + "." ,
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no tiene auriculares de repuesto. " + objAuditoria.comunicacionsUnificades.auricularsRecanvi.observacions,
        },
      ]
    },
    {
      apartatInforme: "cu-auriculares",
      fraseGeneral : "Se recuerda que en caso de que se incorpore un nuevo empleado, en el momento de realizar la petición en SIAU se deben solicitar los auriculares nuevos (si correspondiera) en lugar de entregar los de repuesto."
    },






 
    
    /***************     SEGURETAT       ***************/

    /***************     taules netes         ***************/

    {
      apartatInforme: "seguridad-mesasLimpias",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.3.2): Para prevenir la exposición al robo de información y de recursos de tratamiento de datos durante las ausencias del Usuario de su puesto de trabajo, toda la documentación debe quedar fuera del alcance de personal no autorizado y en lugares de acceso restringido."
    },
    {
      apartatInforme: "seguridad-mesasLimpias",
      fraseGeneral : "Normativa de la política de protección de datos y seguridad de la información (norma 5.9.3): Los usuarios aplicarán una política de mesas limpias basada en la digitalización de su actividad y en la eliminación del papel."
    },
    {
      apartatInforme: "seguridad-mesasLimpias",
      valorPropietat: objAuditoria.seguretatInformacio.taulesNetes.documentacioSobreTaules.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se detectan casos en los que queden documentos visibles a personas ajenas a la organización. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioSobreTaules.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se detectan casos en los que queden documentos visibles a personas ajenas a la organización, o en caso de que el empleado haya finalizado su jornada, quede documentación en su puesto de trabajo. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioSobreTaules.observacions || ""),
        },
      ]
    },


    /***************     documentacio a impresores         ***************/

    {
      apartatInforme: "seguridad-mesasLimpias",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.3.25): En el caso de las impresoras el usuario debe asegurarse de que no quedan documentos impresos en la bandeja de salida. Si las impresoras son compartidas con otros usuarios no autorizados para acceder a la información, los responsables de cada puesto deben retirar los documentos conforme vayan siendo impresos."
    },
    {
      apartatInforme: "seguridad-mesasLimpias",
      valorPropietat: objAuditoria.seguretatInformacio.taulesNetes.documentacioImpresores.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se detecta documento 'abandonado' en impresora. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioImpresores.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se detectan casos en los que queden documentos “abandonados” en las impresoras. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioImpresores.observacions || ""),
        },
      ]
    },
    {
      apartatInforme: "seguridad-mesasLimpias",
      valorPropietat: objAuditoria.seguretatInformacio.taulesNetes.documentacioPapeleres.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Se encuentra documentación confidencial en papelera. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioPapeleres.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Se revisa alguna papelera y no se encuentra documentación confidencial en ella. " + (objAuditoria.seguretatInformacio.taulesNetes.documentacioPapeleres.observacions || ""),
        },
      ]
    },



    /***************     Destrucció de documents         ***************/

    {
      apartatInforme: "seguridad-destruccion",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.6.23): Toda documentación que contenga información confidencial debe destruirse en una destructora de documentos antes de su eliminación (nivel 3 de seguridad según la norma DIN 32757), o bien depositarse en un recipiente adecuado (contenedor cerrado) para su posterior destrucción. En el caso que el centro/dependencia no disponga de destructora de papel se deberá proceder a la solicitud de una."
    },
    {
      apartatInforme: "seguridad-destruccion",
      valorPropietat: objAuditoria.seguretatInformacio.destruccioDocuments.destructoraPapers.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de " + objAuditoria.seguretatInformacio.destruccioDocuments.destructoraPapers.quantitat + " destructoras de papel. " + (objAuditoria.seguretatInformacio.destruccioDocuments.destructoraPapers.observacionsPapers || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de ninguna destructora de papel. " + (objAuditoria.seguretatInformacio.destruccioDocuments.destructoraPapers.observacionsPapers || ""),
        },
      ]
    },
    {
      apartatInforme: "seguridad-destruccion",
      valorPropietat: objAuditoria.seguretatInformacio.destruccioDocuments.destructoraPapers.complementCDs,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Existe al menos una destructora de papel con complemento para la destrucción de CD/DVD.",
        },
        {
          valorActivacioFrase: false,
          frase: "No hay ninguna destructora de papel con complemento para la destrucción de CD/DVD. ",
        },
      ]
    },
    {
      apartatInforme: "seguridad-destruccion",
      valorPropietat: objAuditoria.seguretatInformacio.destruccioDocuments.contenidorSegur.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El centro dispone de " + objAuditoria.seguretatInformacio.destruccioDocuments.contenidorSegur.quantitat + " contenedores seguros. " + (objAuditoria.seguretatInformacio.destruccioDocuments.contenidorSegur.observacions || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "El centro no dispone de ningún contenedor seguro. " + (objAuditoria.seguretatInformacio.destruccioDocuments.contenidorSegur.observacions || ""),
        },
      ]
    },




    /***************     Orientació pantalles         ***************/

    {
      apartatInforme: "seguridad-orientacionPantallas",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.3.22): La orientación de las pantallas, la ubicación de las impresoras y cualquier otro tipo de dispositivo conectado al puesto de trabajo debe estar físicamente situado en lugares que garanticen la confidencialidad de la información."
    },
    {
      apartatInforme: "seguridad-orientacionPantallas",
      valorPropietat: objAuditoria.seguretatInformacio.OrientacioPantalles.exterior,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "La orientacion de según qué pantalla hace posible que dede el exterior al centro se pueda ver información. " + (objAuditoria.seguretatInformacio.OrientacioPantalles.observacionsExterior || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se observa ninguna pantalla que este mal orientada en relación a la posibilidad de poder ver información desde el exterior del centro. " + (objAuditoria.seguretatInformacio.OrientacioPantalles.observacionsExterior || ""),
        },
      ]
    },
    {
      apartatInforme: "seguridad-orientacionPantallas",
      valorPropietat: objAuditoria.seguretatInformacio.OrientacioPantalles.zonaPas,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Existe una zona de paso en que sería posible ver la información mostrada en la panatalla de algun puesto de trabajo. " + (objAuditoria.seguretatInformacio.OrientacioPantalles.observacionsZonaPas || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "No se observa ninguna zona de paso que sea susceptible de poder ver información que muestre la pantalla de cualquier puesto de trabajo. " + (objAuditoria.seguretatInformacio.OrientacioPantalles.observacionsZonaPas || ""),
        },
      ]
    },




    /***************     Carteleria LOPD         ***************/

    {
      apartatInforme: "seguridad-carteleria",
      fraseGeneral : "Normativa de Letreros informativos privacidad y protección de datos (Circular nº C-082/09.5): El Reglamento General de Protección de Datos establece la obligación de informar a cualquier persona atendida en las dependencias de la Mutua, sobre el tratamiento de sus datos de carácter personal de modo expreso, preciso e inequívoco. Esto implica que debe informarse acerca de la identidad del responsable del tratamiento, la finalidad por la cual se recaban los datos, el plazo de conservación de los mismos, si existe cesión y el procedimiento para ejercitar sus derechos."
    },
    {
      apartatInforme: "seguridad-carteleria",
      valorPropietat: objAuditoria.seguretatInformacio.carteleriaLOPD.PROAS,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "En los puestos de trabajo de los PROAS existe carteleria LOPD. " + (objAuditoria.seguretatInformacio.carteleriaLOPD.observacionsPROAS || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Hay algún puesto PROAS que no tiene cartel LOPD. " + (objAuditoria.seguretatInformacio.carteleriaLOPD.observacionsPROAS || ""),
        },
      ]
    },
    {
      apartatInforme: "seguridad-carteleria",
      valorPropietat: objAuditoria.seguretatInformacio.carteleriaLOPD.CEX,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "Las mesas de las consultas médicas y de rehabilitació tienen carteleria LOPD. " + (objAuditoria.seguretatInformacio.carteleriaLOPD.observacionsCEX || ""),
        },
        {
          valorActivacioFrase: false,
          frase: "Hay alguna mesa de consulta médica / rehabilitación que no tiene cartel LOPD. " + (objAuditoria.seguretatInformacio.carteleriaLOPD.observacionsCEX || ""),
        },
      ]
    },



    /***************     Gestion de activos         ***************/

    {
      apartatInforme: "seguridad-gestionActivos",
      valorPropietat:  objAuditoria.seguretatInformacio.materialBaixaInventari.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita se encuentran los siguientes materiales que estan dados de baja en el inventario: " + objAuditoria.seguretatInformacio.materialBaixaInventari.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En la visita no se encuentra material alguno que este dado de baja en el inventario" + objAuditoria.seguretatInformacio.materialBaixaInventari.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.6.25): Cualquier soporte digital (CD/DVD, cinta seguridad, etc.) sin utilidad (datos no vigentes, copias históricas,soporte inutilizable, etc.) debe destruirse, de acuerdo a los procedimientos establecidos, de forma que el acceso a los datos almacenados sea imposible (p.e. rallando ambas supervicies o procediendo a su rotura). El la medida de lo posible, la destrucción debe realizarse en el centro/dependencia donde esté ubicado el soporte (in situ)."
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.6.26): Ningún soporte deberá ser tirado directamente a las papeleras, contenedores, etc."
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.6.27): El procedimiento de destrucción de las memorias externas USB se encuentra descrito en la Política de uso de dispositivos de memoria."
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      valorPropietat:  objAuditoria.seguretatInformacio.suportsFisics.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita se encuentran los siguientes soportes físicos: " + objAuditoria.seguretatInformacio.suportsFisics.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En la visita no se encuentra soporte físico alguno. " + objAuditoria.seguretatInformacio.suportsFisics.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      fraseGeneral : "Normativa de la política de protección de datos y seguridad de la información (norma 5.9.4): Los documentos que deban utilizarse en formato papel deberán quedar guardados en un armario cerrado con llave al finalizar la jornada de trabajo."
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      valorPropietat:  objAuditoria.seguretatInformacio.documentacioSensible.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita se encuentra documentación sensibe: " + objAuditoria.seguretatInformacio.documentacioSensible.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En la visita no se encuentra documentación sensible alguna" + objAuditoria.seguretatInformacio.documentacioSensible.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-gestionActivos",
      valorPropietat:  objAuditoria.seguretatInformacio.expedientsGreus.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita se encuentran expedientes graves  " + objAuditoria.seguretatInformacio.expedientsGreus.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En la visita no se encuentra expediente grave alguno." + objAuditoria.seguretatInformacio.expedientsGreus.observacions
        }
      ]
    },
  


    /***************     Acceso al centro        ***************/

    {
      apartatInforme: "seguridad-controlAcceso",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.12): El responsable de la dependencia designa, en función de las características de ésta, las personas autorizadas para efectuar la apertura y cierre de la dependencia."
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.13): El control y distribución de los códigos e acceso de las alarmas, llaves de acceso, etc. son tareas asignadas al responsable de la dependencia."
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.15): El acceso del personal de servicios externos (mantenimiento instalaciones, etc.) debe estar notificado y autorizado previamente. Si el responsable de la dependencia no tuviera conocimiento previo deberá verificar la visita con la Dirección del responsable."
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      fraseGeneral : "Seguirdad de la información (norma 3.1.16): El control y supervisión del personal de servicios externo es competencia del responsable de la dependencia."
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      valorPropietat:  objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El personal del centro designado por el director dispone de llaves para abrir o cerrar el mismo. " + objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El personal del centro no dispone de llaves para abrir o cerrar el mismo. " + objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.usuarisAmbClaus.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      valorPropietat:  objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.tipus,
      arrFrases: [
        {
          valorActivacioFrase: "individuales" ,
          frase: "Cada empleado de Asepeyo designado por el director dispone de un código inidividual para la activación / desactivación de la alarma. " + objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.observacions
        },
        {
          valorActivacioFrase: "genericos" ,
          frase: "Los empleados de Asepeyo designados por el director disponen de un código genérico para la activación / desactivación de la alarma. " + objAuditoria.seguretatInformacio.accesAlCentre.personalIntern.codisAlarma.observacions
        }
      ]
    },

    {
      apartatInforme: "seguridad-controlAcceso",
      valorPropietat:  objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Personal externo al centro dispone de llaves para abrir o cerrar el mismo. " + objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El personal externo al centro no dispone de llaves para abrir o cerrar el mismo. " + objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.usuarisAmbClaus.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      valorPropietat:  objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.tipus,
      arrFrases: [
        {
          valorActivacioFrase: "individuales" ,
          frase: "El personal externo al centro dispone de un código inidividual para la activación / desactivación de la alarma. " + objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.observacions
        },
        {
          valorActivacioFrase: "genericos" ,
          frase: "El personal externo al centro dispone de un código genérico para la activación / desactivación de la alarma. " + objAuditoria.seguretatInformacio.accesAlCentre.personalExtern.codisAlarma.observacions
        }
      ]
    },

    {
      apartatInforme: "seguridad-controlAcceso",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.14): El acceso a las dependencias de ASEPEYO furea del horario habitual de atención está prohibido salvo autorización expresa del responsable de la dependencia. Existen controles de acceso a los sistemas de información en horarios fuera de oficina."
    },
    {
      apartatInforme: "seguridad-controlAcceso",
      valorPropietat:  objAuditoria.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true,
          frase: "El director informa de que hay personal del centro que, ocasionalmente, trabaja en el centro fuera de su horario laboral. " + objAuditoria.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.observacions
        },
        {
          valorActivacioFrase: false,
          frase: "El director informa que ningún empleado trabaja fuera de su horario laboral. " + objAuditoria.seguretatInformacio.accesAlCentre.accesForaHorariHabitual.observacions
        }
      ]
    },





    /***************     Seguirdad física y del entorno        ***************/

    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.7): En el supuesto de existencia de CCTV se cumple debidamente con lo establecido en la instrucción 01/2006 de la AEPD."
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.3): Los códigos de alarmas deben modificarse siempre que haya cambios (desvinculaciones, cambios de centro, etc.) en los usuarios, tanto internos como externos, que tuvieran conocimiento de los mismos"
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.alarmaIntrusio.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El centro dispone de alarma de intrusión. " + objAuditoria.seguretatInformacio.alarmaIntrusio.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El centro no dispone de alarma de intrusión. " + objAuditoria.seguretatInformacio.alarmaIntrusio.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.alarmaIncendis.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El centro dispone de alarma de incendios. " + objAuditoria.seguretatInformacio.alarmaIncendis.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El centro no dispone de alarma de incendios. " + objAuditoria.seguretatInformacio.alarmaIncendis.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El centro dispone de un sistema de videovigilancia. " + objAuditoria.seguretatInformacio.videovigilancia.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El centro no dispone de un sistema de videovigilancia. " + objAuditoria.seguretatInformacio.videovigilancia.observacions
        }
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.gestioInterna.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "La gestión del sistema de videoconferencia la hace el mismo personal del centro. " + objAuditoria.seguretatInformacio.videovigilancia.gestioInterna.observacions + " El personal encargado de dicha gestión es " + objAuditoria.seguretatInformacio.videovigilancia.gestioInterna.gravacioImatges.personalAmbAcces + ". El tiempo de conservación de las imágenes es de " + objAuditoria.seguretatInformacio.videovigilancia.gestioInterna.gravacioImatges.periodeConservacio
        }
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "La gestión del sistema de videoconferencia la hace la empresa " + objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.observacionsExistencia + ". El tiempo de conservación de las imágenes es de " + objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.periodeConservacio
        }
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.evidencia,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El centro dispone de documento que acredita el tiempo de conservación de las imágenes del sistema de videovigilancia por parte de la empresa externa. " + objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.observacionsEvidencia
        },
        {
          valorActivacioFrase: false ,
          frase: "El centro no dispone de documento que acredite el tiempo de conservación de las imágenes del sistema de videovigilancia por parte de la empresa externa. " + objAuditoria.seguretatInformacio.videovigilancia.gestioExterna.observacionsEvidencia
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.retol.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "En el centro hay cartel informativo del sistema de videovigilancia. " + objAuditoria.seguretatInformacio.videovigilancia.retol.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En el centro no hay cartel informativo alguno del sistema de videovigilancia. " + objAuditoria.seguretatInformacio.videovigilancia.retol.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadFisicaEntorno",
      valorPropietat:  objAuditoria.seguretatInformacio.videovigilancia.carteleriaActualitzada.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "La carteleria del sistema de videoconferencia esta actualizada. " + objAuditoria.seguretatInformacio.videovigilancia.carteleriaActualitzada.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "La carteleria del sistema de videoconferencia no esta actualizada. " + objAuditoria.seguretatInformacio.videovigilancia.carteleriaActualitzada.observacions
        },
      ]
    },





    /***************     Seguirdad de las operaciones        ***************/

    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.centresAlternatiusGADA.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "En GADA hay informados centros alternativos en caso de cierre del centro. " + objAuditoria.seguretatInformacio.centresAlternatiusGADA.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En GADA no hay informados centros alternativos en caso de cierre del centro. " + objAuditoria.seguretatInformacio.centresAlternatiusGADA.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.telefonSupervivencia.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "En el centro existe teléfono de supervivencia. " + objAuditoria.seguretatInformacio.telefonSupervivencia.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En el centro no existe teléfono de supervivencia. " + objAuditoria.seguretatInformacio.telefonSupervivencia.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.procedimentsPaper.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "En el centro existe documentación en papel de los procedimientos a seguir en caso de cierre del centro. " + objAuditoria.seguretatInformacio.procedimentsPaper.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "En el centro no existe documentación en papel de los procedimientos a seguir en caso de cierre del centro. " + objAuditoria.seguretatInformacio.procedimentsPaper.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El pendrive de emergencia se encuentra debidamente ubicado en el rack. " + objAuditoria.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "Durante la visita se observa que el pendrive de emergencia no está debidamente ubicado en el rack. " + objAuditoria.seguretatInformacio.pendriveEmergencia.ubicacioCorrecte.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.pendriveEmergencia.ultimaVersio.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El pendrive de emergencia está actualizado. " + objAuditoria.seguretatInformacio.pendriveEmergencia.ultimaVersio.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El pendrive de emergencia no está actualizado. " + objAuditoria.seguretatInformacio.pendriveEmergencia.ultimaVersio.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadOperaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.pendriveEmergencia.actualitzacio.feta,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita se ha procedido a la actualización del pendrive de emergencia. " + objAuditoria.seguretatInformacio.pendriveEmergencia.actualitzacio.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "Se comprueba antes del día de la visita que el pendrive de emergencia ya se encuentra actualizado. " + objAuditoria.seguretatInformacio.pendriveEmergencia.actualitzacio.observacions
        },
      ]
    },












    /***************     Seguirdad de las operaciones        ***************/

    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      fraseGeneral : "Normativa de la política de protección de datos y seguridad de la información (norma 5.9.4): Los armarios de comunicaciones (rack) están cerrados con llave. Éstas están debidamente custodiadas según criterio de la dirección de la dependencia. En los centros singulares, los armarios de comunicaciones son responsabilidad de los Administradores de Seguridad del Sistema."
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.17): El acceso a las estancias consideradas de especial protección (racks, servidores, comunicaciones, etc.) está restringido"
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.20): Los armarios de comunicaciones (rack) están cerrados con llave. Éstas están debidamente custodiadas según criterio de la dirección de la dependencia. En los centros singulares, los armarios de comunicaciones son responsabilidad de los Administradores de Seguridad del Sistema."
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      fraseGeneral : "Normativa de seguridad ASEPEYO (norma 3.1.19): Los equipos críticos (servidores, dispositivos de comunicación, etc.) disponen de sistemas de alimentación ininterrumpida (SAI) en caso de caídas de suministro eléctrico."
    },

    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.accesSegurSalaComunicacions.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El acceso a la sala de comunicaciones está restringido. " + objAuditoria.seguretatInformacio.accesSegurSalaComunicacions.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El acceso a la sala de comunicaciones no está restringido. " + objAuditoria.seguretatInformacio.accesSegurSalaComunicacions.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.accesSegurRack.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "El armario de comunicaciones (rack) esta cerrado con llave. La llave esta debidamente custodiada según criterio de la dirección del centro. " + objAuditoria.seguretatInformacio.accesSegurRack.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "El armario de comunicaciones (rack) está abierto. " + objAuditoria.seguretatInformacio.accesSegurRack.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.SAIRack.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Los equipos críticos (dispositivos de comunicación) disponen de sistema de alimentación ininterrupida (SAI) en caso de caída del suministro eléctrico. " + objAuditoria.seguretatInformacio.SAIRack.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "Los equipos críticos (dispositivos de comunicación) no disponen de sistema de alimentación ininterrupida (SAI) en caso de caída del suministro eléctrico. " + objAuditoria.seguretatInformacio.SAIRack.observacions
        },
      ]
    },
    {
      apartatInforme: "seguridad-seguridadComunicaciones",
      valorPropietat:  objAuditoria.seguretatInformacio.puntsXarxaSalaEspera.existeix,
      arrFrases: [
        {
          valorActivacioFrase: true ,
          frase: "Durante la visita no se observan tomas de datos en las paredes de la sala de espera. " + objAuditoria.seguretatInformacio.puntsXarxaSalaEspera.observacions
        },
        {
          valorActivacioFrase: false ,
          frase: "Durante la visita se observan tomas de datos en las paredes de la sala de espera. " + objAuditoria.seguretatInformacio.puntsXarxaSalaEspera.observacions
        },
      ]
    },
    










/*

  {
    apartatInforme: "",
    fraseGeneral : ""
  },


  {
    apartatInforme: "",
    valorPropietat:  objAuditoria.,
    arrFrases: [
      {
        valorActivacioFrase: "" ,
        frase: ""
      },
      {
        valorActivacioFrase: "" ,
        frase: ""
      }
    ]
  },

*/

  ]










  var generaFrases = function () {
    var arr = []
    let vColor = null

    arrAvaluacioFrases.forEach( function(obj) {
      //debugger
      
      console.log("obj.apartatInforme: " + obj.apartatInforme)
      if (apartat != null ){
        // Si s'ha informat el apartatInforme, afegir NOMES LES FRASES DE L'APARTAT CORRESPONENT



        if (obj.fraseGeneral != undefined && obj.apartatInforme == apartatInforme) {
          // Si existeix la propietat obj.FRASEGENERAL, posar com a frase el seu valor

          // Si la frase comença per "Normativa..." establir propietat colorNorma (de fons de la frase)
          // let re = /^Normativa/
          // vColor = (re.test(obj.fraseGeneral)) ? true : false
          vColor = true
          
          arr.push({tema: obj.apartatInforme, frase: obj.fraseGeneral, colorNorma: vColor })

        } else {
          // Si existeix la propietat obj.FRASEGENERAL, posar les possibles frases segons el valor que hagi triat l'usuari
          //obj.arrFrases.forEach( function(objFrase) {
          for (let index in obj.arrFrases){
            if (obj.valorPropietat != undefined ){
              if ( obj.valorPropietat == "true") obj.valorPropietat = true
              if ( obj.valorPropietat == "false") obj.valorPropietat = false
            }

            if (obj.arrFrases[index].valorActivacioFrase == obj.valorPropietat && obj.apartatInforme == apartatInforme)
              arr.push({tema: obj.apartatInforme, frase: obj.arrFrases[index].frase })

          }
        }


      } else {
        // Si NO s'ha informat el apartatInforme, afegir TOTES LES FRASES DE TOTS ELS APARTATS
        console.log("pasa per aqui")

        if (obj.fraseGeneral != undefined) {
          // Si existeix la propietat obj.FRASEGENERAL, posar com a frase el seu valor
          
          
          // Si la frase comença per "Normativa..." establir propietat colorNorma (de fons de la frase)
          // let re = /^Normativa/
          // vColor = (re.test(obj.fraseGeneral)) ? true : false
          vColor = true
          arr.push({tema: obj.apartatInforme, frase: obj.fraseGeneral, colorNorma: vColor })

        } else {
          // Si existeix la propietat obj.FRASEGENERAL, posar les possibles frases segons el valor que hagi triat l'usuari
          for (let index in obj.arrFrases){

            if (obj.valorPropietat != undefined ){
              if ( obj.valorPropietat == "true") obj.valorPropietat = true
              if ( obj.valorPropietat == "false") obj.valorPropietat = false
            }

            if (obj.arrFrases[index].valorActivacioFrase == obj.valorPropietat)
              arr.push({tema: obj.apartatInforme, frase: obj.arrFrases[index].frase })

          }
        }


      }


    })
    console.log("arr")
    console.log(arr)
    return arr
  }


  return generaFrases()



}
