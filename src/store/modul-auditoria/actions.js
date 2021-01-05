

export function actCarregarAuditories ( context, arrAuditories ) {
	context.commit("mutCarregarAuditories", arrAuditories)
}

export function actNovaAuditoria ( context ) {
	context.commit("mutNovaAuditoria")
}

export function actImportarAuditories ( context, dadesImportacioAuditories ) {
	context.commit("mutImportarAuditories", dadesImportacioAuditories)
}




export function actAfegirPropietat ( context, payload ) {
	context.commit("mutAfegirPropietat", payload)
}

export function actSubstituirAuditoria ( context, payload ) {
	context.state.auditories.forEach( (obj, index, array) => {
		if (obj.idAuditoria == payload.id_auditoria) {
			context.commit("mutSubstituirAuditoria", { index, objAuditoria: payload.obj_auditoria })
		}
	})
}






export function actEditarAuditoria ( context, id_auditoria ) {
	context.state.auditories.forEach( (obj, index, array) => {
		if (obj.idAuditoria == id_auditoria) {
			context.commit("mutEditarAuditoria", index)
		}
	})
}

export function actEliminarAuditoria ( context, id_auditoria ) {
	context.state.auditories.forEach( (obj, index, array) => {
		if (obj.idAuditoria == id_auditoria) {
			context.commit("mutEliminarAuditoria", index)
		}
	})
}

export function actAfegirRack ( context ) {
	// selecciona l'auditoria "activa"
	context.commit("mutAfegirRack")
}

export function actEliminarRack ( context, indexRack ) {
	// selecciona l'auditoria "activa"
	context.commit("mutEliminarRack", indexRack)
}
