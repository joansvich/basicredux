const redux = require('redux');
 
// Creamos el store de Redux
const createStore = redux.createStore;



// store --> almacena el state de la aplicación
// createStore() --> toma 3 parametros: reducer, state inicial, middleware
// reducer --> define como cambia el state
const store = createStore();


console.log(store.getState());