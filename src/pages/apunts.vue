<template>
	<q-page class="pagina">
		<div class="text-h4 text-center q-mb-md">APUNTS</div>

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

<style>
	.pagina{
		margin: 20px auto;
		width: 80%;
		/* border: 1px solid black */
		background-color: beige;
	}
</style>