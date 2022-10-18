// store
// se importa el store, que es donde se almacenan los estados de la app
import { createStore } from 'redux';

// estado inicial por default
const initialState = {
    players: [{
        id: 7,
        name: "El Bicho",
        image: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/13750477/13750477-1616634780930-2dcc6c22a12d5.jpg"
    },
    {
        id: 10,
        name: "Neymar",
        image: "https://laopinion.com/wp-content/uploads/sites/3/2018/07/636661500821119587w.jpg?quality=80&strip=all&w=800"
    },
    {
        id: 16,
        name: "Cuadrado",
        image: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20210511220446/juan-guillermo-cuadrado.jpg"
    }
    ],
    titulars: [],
    alternates: []
}

// reducer
// funcion encargada de hacer los cambios en el store  

// state, estado almacenado, action, cambio a realizar
const reducer = (state = initialState, action) => {

    if (action.type === "addTitular") {
        return {
            ...state,
            titulars: state.titulars.concat(action.player), // 
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }

    if (action.type === "addAlternate") {
        return {
            ...state,
            alternates: state.alternates.concat(action.player),
            players: state.players.filter(player => player.id !== action.player.id)
        }
    }

    if (action.type === "removeTitular") {
        return {
            ...state,
            titulars: state.titulars.filter(titular => titular.id !== action.titular.id),
            players: state.players.concat(action.titular)
        }
    }

    if (action.type === "removeAlternate") {
        return {
            ...state,
            alternates: state.alternates.filter(alternate => alternate.id !== action.alternate.id),
            players: state.players.concat(action.alternate)
        }
    }
    return state;
}


export default createStore(reducer);