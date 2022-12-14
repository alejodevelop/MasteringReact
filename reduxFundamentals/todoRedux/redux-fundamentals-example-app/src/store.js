import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer';
import { print1, print2, print3 } from './exampleAddons/middleware'


// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//     preloadedState = {
//         todos: JSON.parse(persistedTodosString)
//     }
// }

const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware()
    // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store
