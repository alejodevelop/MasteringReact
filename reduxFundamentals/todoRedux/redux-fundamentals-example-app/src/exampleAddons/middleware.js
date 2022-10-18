/**
 * Tienen la funcion de ejecutarse siempre que se despacha una accion
 * son funciones que se pasan como argumento en el metodo createStore,
 * como reemplazon de los enhacer si lo unico que se quiere es
 * personalizar un poco cuando se genera un dispatch de un action al store
 * hay que usar applyMiddleware, pasar las funciones, y almacenar
 * esta funcion en una variable para pasarla a createStore
 */

export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}
