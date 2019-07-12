const redux = require('redux');

// Creamos el store de Redux
const createStore = redux.createStore;

// state inicial
const initialState = {
  usuarios: []
}

// Reducer
// parametros: stateActual y accion
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        usuarios: action.name
      }
    case 'SHOW_USER':
      return {
        ...state
      }
  }
  return state;
}


// STORE --> almacena el state de la aplicación
// createStore() --> toma 3 parametros: reducer(obligatorio), state inicial, middleware
// reducer --> define como cambia el state
const store = createStore(rootReducer);
console.log(store.getState());


// SUBSCRIBE o SUSCRIPTION
// Escucha los cambios, se ejecuta cada vez que el state cambia
// o se ejecuta un dispatch
store.subscribe(()=>{
  console.log('Something change', store.getState());
})

// Dispatch: es la forma de cambiar el state
store.dispatch({ type: 'ADD_USER', name: 'Joan' });
store.dispatch({ type: 'SHOW_USER' });
