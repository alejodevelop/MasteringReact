/**
 * enhancers se pueden usar para modificar o sobreescribir los metodos 
 * por defecto que se pasa store, se pasa como argumento el enhancer
 * al metodo createStore, para unir enchancers se usa la funcion 
 * compose de la libreria redux a la cual se le pasa como parametro
 * los enhancer (significa potenciador)
 */

export const sayHiOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch(action) {
      const result = store.dispatch(action)
      console.log('Hi!')
      return result
    }

    return { ...store, dispatch: newDispatch }
  }
}

export const includeMeaningOfLife = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      }
    }

    return { ...store, getState: newGetState }
  }
}
