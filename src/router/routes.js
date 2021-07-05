
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/importar',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/importar.vue') }
    ]
  },
  {
    path: '/exportar',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/exportar.vue') }
    ]
  },
  {
    path: '/apunts',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/apunts.vue') }
    ]
  },
  {
    path: '/carregarAuditoria',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/carregarAuditoria.vue') }
    ]
  },
  {
    path: '/proves',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/proves.vue') }
    ]
  },




  //  pagina auditories
  {
    path: '/auditoria/frases',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/frasesInforme.vue') }
    ]
  },
  {
    path: '/auditoria/checkList',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/checkList.vue') }
    ]
  },




  {
    path: '/auditoria/pdf',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pdfMake/checkListPdf.vue') }
    ]
  },
  {
    path: '/auditoria/informacio',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/informacioInicial2.vue') }
    ]
  },
  {
    path: '/auditoria/instalacions1',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/instalacions1.vue') }
    ]
  },
  {
    path: '/auditoria/instalacions2',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/instalacions2.vue') }
    ]
  },
  {
    path: '/auditoria/cu',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/CU.vue') }
    ]
  },
  {
    path: '/auditoria/seguretat',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/seguretat.vue') }
    ]
  },
  {
    path: '/auditoria/formacio',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/formacio.vue') }
    ]
  },
  {
    path: '/auditoria/valoracions',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/valoracions.vue') }
    ]
  },
  {
    path: '/auditoria/accionsMillora',
    component: () => import('layouts/AuditoriaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auditoria/accionsMillora.vue') }
    ]
  },



]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
