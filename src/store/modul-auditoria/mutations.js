export function mutCarregarAuditories ( state, arrAuditories ) {
	state.auditories = arrAuditories
	state.carregarAuditories = false
}

export function mutImportarAuditories ( state, dadesImportacioAuditories ) {
	state.auditories = JSON.parse(dadesImportacioAuditories)
}



export function mutAfegirPropietat ( state, payload ) {
	Vue.set(
		eval(payload.objecte),
		payload.propietat,
		payload.valor
	)
}

export function mutSubstituirAuditoria ( state, payload ) {
	state.auditories[payload.index] = payload.objAuditoria
}





export function mutNovaAuditoria ( state ) {

	// nou ID d'auditoria
/* 	
	let nouIdAuditoria = null
	if ( state.auditories.length == 0 ) {
		nouIdAuditoria = 1

	} else {
		// debugger
		let idAudtitoriaMax = state.auditories.sort( function (a, b) {
			return b.idAuditoria - a.idAuditoria
		})[0].idAuditoria
		nouIdAuditoria = ++idAudtitoriaMax

	}
 */
	// afegim nou objecte auditoria a la matriu auditories (fent copia de "auditoriaPlantilla")
	state.auditories.push( JSON.parse(JSON.stringify(state.auditoriaPlantilla)) )

	// seleccio com a auditoria "activa"
	state.indexArrAuditories = state.auditories.length - 1

	// canviem el titol de la app per a que aparegui el nom del centre
	state.titolApp = "Auditoria CA: " + state.auditories[state.indexArrAuditories].nomCentre
	console.log("nou titol: " + state.titolApp)

	// edita el IdAuditoria amb un nou valor
	// state.auditories[state.indexArrAuditories].idAuditoria = nouIdAuditoria
}


export function mutEditarAuditoria ( state, indexARR ) {
	// selecciona l'auditoria "activa"
	state.indexArrAuditories = indexARR
	// canviem el titol de la app per a que aparegui el nom del centre
	state.titolApp = "Auditoria CA: " + state.auditories[state.indexArrAuditories].nomCentre
	console.log("nou titol: " + state.titolApp)
}

export function mutEliminarAuditoria ( state, indexARR ) {
	// selecciona l'auditoria "activa"
	state.auditories.splice(indexARR,1)
}




export function mutAfegirRack ( state) {
	let nouObjRack = JSON.parse(JSON.stringify(state.rackPlantilla))

	// afegeix nou rack al final de la matriu
	state.auditories[state.indexArrAuditories].instalacionsComunicacions.sala.racks.push(nouObjRack)

	// li agrego propietat idRack per que si no en el v-for dels racks dona keys duplicades si faig dependre de index
	// let intLength = state.auditories[state.indexArrAuditories].instalacionsComunicacions.sala.racks.length
	// state.auditories[state.indexArrAuditories].instalacionsComunicacions.sala.racks[intLength - 1].idRack = intLength
}

export function mutEliminarRack ( state, indexRack) {
	// elimina ultim rack de la matriu
	state.auditories[state.indexArrAuditories].instalacionsComunicacions.sala.racks.splice(indexRack, 1)
}




export function updateCamp ( state, payload ) {

	// console.log("UPDATECAMP - payload.valor: ")
	// console.log( payload.valor )
	// console.log( typeof payload.arrProps )
	//debugger
	//console.log("payload.valor: " + payload.valor + "\tes null? " + (payload.valor == null)? "Sí" : "No")

	//if (payload.valor == null) payload.valor = ""

	let arr = eval(payload.arrProps)

	console.log(`payload.valor: ${payload.valor}` )
	console.log(` typeof payload.valor === 'boolean': ${ typeof payload.valor === 'boolean'}` )
	console.log(` typeof payload.valor === 'string': ${ typeof payload.valor === 'string'}` )
	
	if (payload.objRack !== undefined) {
		console.log("payload.objRack['" + arr.join("']['") + "'] = " + payload.valor )

		if  ( typeof payload.valor === 'boolean') {
			eval("payload.objRack['" + arr.join("']['") + "'] = " + payload.valor )
		} else {
			eval("payload.objRack['" + arr.join("']['") + "'] = '" + payload.valor + "'")
		}

	} else {
		console.log("state.auditories[state.indexArrAuditories]['" + arr.join("']['") + "'] = " + payload.valor)

		if  ( typeof payload.valor === 'boolean') {
			eval("state.auditories[state.indexArrAuditories]['" + arr.join("']['") + "'] = " + payload.valor )
		} else {
			eval("state.auditories[state.indexArrAuditories]['" + arr.join("']['") + "'] = '" + payload.valor + "'")

		}

	}

}
