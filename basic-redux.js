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
      break;
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

// Dispatch: es la forma de cambiar el state
store.dispatch({ type: 'ADD_USER', name: 'Joan' });
console.log(store.getState());
store.dispatch({ type: 'SHOW_USER' });
console.log(store.getState());