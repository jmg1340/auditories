<template>
	<q-page class="pagina">
		<div class="text-h4 text-center q-mb-md">APUNTS</div>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">A L'HORA D'ENVIAR ELS INFORMES</div>
					<ul>
						<li>
							El correo se remitirá con enlace donde esta ubicado el informe en formato PDF. El destinatario sera ASEPEYO SEGURIDAD DTIC con copia a ASEPEYO SISTEMAS DTIC
						</li>
						<li>
							El nombre del fichero sera INFORME AUDITORIA INTERNA TIC ASXXXX (NOMBRE DEL CENTRO) 2023
						</li>
					</ul>
			</q-card-section>
		</q-card>


		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">VALORACIÓ AUDITORIA:</div>
					<q-markup-table separator='cell' bordered>
						<thead>
							<tr>
								<th class="text-left">NC</th>
								<th class="text-left">OBS</th>
								<th class="text-left">Resultat</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-left">No</td>
								<td class="text-left">No</td>
								<td class="text-left">Muy satisfactoria</td>
							</tr>
							<tr>
								<td class="text-left">No</td>
								<td class="text-left">Sí</td>
								<td class="text-left">Satisfactoria</td>
							</tr>
							<tr>
								<td class="text-left">Sí</td>
								<td class="text-left"></td>
								<td class="text-left">Necessita atenció</td>
							</tr>
							<tr>
								<td class="text-left">Sí (amb algun risc)</td>
								<td class="text-left"></td>
								<td class="text-left">Necessita molta atenció</td>
							</tr>
							<tr>
								<td class="text-left">Sí (amb risc inminent)</td>
								<td class="text-left"></td>
								<td class="text-left">Fora de control</td>
							</tr>
						</tbody>
					</q-markup-table>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">PCN:</div>
				Xavi comenta: <br>
				Efectivamente, a raiz de la necesidad de impresión nos estamos replanteando la obligatriedad de tener el PCN impreso. La verdad es que lo tenemos en formato electronico en Drive y en Webex. Es difícil que simultáneamente no se disponga de acceso a ambos repositorios desde fuera del entorno corporativo. <br>
				A tal efecto proponemos los siguientes cambios:
				<ul>
					<li>
						A nivel de las auditorias internas se deberia verificar con el DC que dispone de la aplicación Webex instalada y configurado en el disposiivo móvil (y por tanto teine acceso a las salas "PCN - Avisos" y "PCN - Documentacion"). En este caso, si no lo tiene en formato papel, NO debería tratarse como una NC.
					</li>
					<li>
						La versión en papel pasa a ser na recomendación. Así lo reflejaremos en el manual M1486.
					</li>
					<li>
						En cualquier caso se reubicarán los docuemtnos del manual M-1486 a la UC que sí permite la impresión (por si alguien los quiere imprimir)
					</li>
				</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">FIRMA BIOMETRICA:</div>
					<ul>
						<li>
							Per saber el numero de tablets que te el centre -> "analisis de Datos (Business intelligence)" a la INTRANET<br/>
							Apartat <span class="text-italic">"'Firma Biométrica'"</span><br/>
							"Analisis uso de Tablets"
						</li>
						<li>
							Es tracta de veure si al centre no hi ha cap tablet que estigui en desús (es a dir, que no estigui instalada o que estigui en un calaix, etc.)
						</li>
						<li>A l'informe posar captura de us de les tablets (2 ultims mesos) i la ubicació de cadascuna d'elles.</li>
					</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">GESTOR DE TORNS:</div>

					"El centro dispone de X pantallas + NUC y de X impresoras de tickets" <br>
					"Se realiza una revisión operativa comprobando el circuito de recepción"

					<ul>
						<li> Impresión del ticket a la llegada del paciente: correcto / incorrecto</li>
						<li> Inofrmación en pantalla y sonido cuando el paciente es llamado: correcto / incorrecto</li>
						<li> Tiempo que transcurre desde que los sanitarios pulsan la llamada hasta que muestra la información en pantalla: correcto / incorrecto</li>
					</ul>

			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">TELEMEDICINA:</div>
					<ul>
						<li>
							Esto ya no lo podemos poner en el apartado de telemedicina:<br/>
							<span class="text-italic">
								"Debido a la alerta sanitaria por COVID no es posible hacer pruebas de funcionamiento con COSTAISA.""
							</span>
						</li>
						<li>
							Texto alternativo:<br/>
							<span class="text-bold">
								"Se verifica que todos los componentes que forman parte de la equipación de telemedicina están presentes, correctamente conectados y operativos."
							</span>
						</li>

					</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">PENDRIVE DE EMERGENCIA fuera:</div>
					<ul>
						<li>Hemos decidido dejar de actualizar los pendrives de emergencia en todos los centros. El coste que tiene es altísimo (en horas técnico) y el beneficio es muy poco. Se ha hecho balance de los últimos años y las veces en las que ha tenido utilidad se pueden contar con los dedos de una mano. Queda claro que necesitamos un sistema alternativo de backup.</li>
						<li>Teniendo esto en cuenta, os ruego quitéis este punto del acta y no volváis a abrir un ticket por este motivo.</li>
					</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">Con relación a las verificaciones (y correspondientes no conformidades si las hay) de los códigos de alarma genéricos:</div>
					<ul>
						<li>indicar que éstas deben hacer referencia única y exclusivamente al personal EXTERNO (M-1450). Por el momento este control no debe ser enfocado ni tratado desde la perspectiva de los usuarios internos (pendiente de desarrollo).</li>
						<li>En cuanto se hayan consensuado los criterios y éstos estén por escrito en forma de manual serán objeto de auditoría o verificación. </li>
						<li>Aquellas ACP que estén pendientes (y afecten a personal propio) pueden ser cerradas indicando que para este colectivo se está desarrollando el oportuno procedimiento.</li>
					</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">Eliminar las siguientes frases de la plantilla del informe:</div>
					<ul>
						<li>"Las No Conformidades han sido aclaradas y entendidas".</li>
						<li>"Este informe se da por TERMINADO y ACEPTADO. Antes de su publicación en la INTRANET ha sido consensuado con el director del centro."</li>
					</ul>
			</q-card-section>
		</q-card>

		<q-card class="q-ma-md">
			<q-card-section>
				<div class="text-h6">Sobre las observaciones:</div>
					<ul>
						<li>No se registran en Acciones de Mejora.</li>
						<li>En cada carpeta de auditoria crear un sheet y apuntar observaciones</li>
						<li>En el informe hacer constar las observaciones pero no hacer seguimiento para la resolución de las mismas</li>
						<li>En la siguiente auditoria revisar si se ha realizado alguna acción respecto a dichas observaciones. Caso de que no, considerar que sean "NO CONFORMIDADES".</li>
					</ul>
			</q-card-section>
		</q-card>



	</q-page>
</template>

<script>
export default {

}
</script>

<style scope>
	.pagina{
		margin: 20px auto;
		width: 80%;
		/* border: 1px solid black */
		background-color: beige;
	}

	td, th {
		border: 1px solid darkgray;
		padding: 5px;
	}

</style>