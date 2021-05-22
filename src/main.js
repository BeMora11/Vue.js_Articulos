import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router';

//Importando componentes

import inicio from './components/Inicio'
import listarArticulos from './components/ListarArticulos'
import crearArticulo from './components/CrearArticulo'
import editarArticulo from './components/EditarArticulo'
import contacto from './components/Contacto'

//Vue router

Vue.use(VueRouter);

//DEfiniendo las rutas

const routes = [
  {path: '/', component: inicio},
  {path: '/inicio', component: inicio},
  {path: '/articulos', component: listarArticulos},
  {path: '/crear', component: crearArticulo, name: 'crearArticulo'},
  {path: '/editar/:id', component: editarArticulo, name: 'editarArticulo'},
  {path: '/contacto', component: contacto}
];

//Objeto router

const router = new VueRouter({
  routes,
  mode: 'history'
});

//Creando componente

Vue.component('inicio', inicio);
Vue.component('listarArticulos', listarArticulos);
Vue.component('crearArticulo', crearArticulo);
Vue.component('editarArticulo', editarArticulo);
Vue.component('contacto', contacto);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
