const redux = require('redux');
 
// Creamos el store de Redux
const createStore = redux.createStore;

// state inicial
const initialState = {
  
}

// Reducer
// parametros: stateActual y accion
const rootReducer = (state, action) => {
  return state;
}


// store --> almacena el state de la aplicación
// createStore() --> toma 3 parametros: reducer, state inicial, middleware
// reducer --> define como cambia el state
const store = createStore(rootReducer);


console.log(store.getState());