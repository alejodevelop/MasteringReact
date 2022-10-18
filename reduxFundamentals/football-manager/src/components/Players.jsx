import React, { useEffect, createRef } from 'react';
import { connect } from "react-redux";

const Players = ({ players, addTitular, addAlternate }) => {

    // todo lo que esta entre los arteriscos es el contenedor que contiene los jugadores
    // no es importante para el manejo de redux, son solo estilos

    //*************************************/
    const gridJugadores = createRef()

    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
    }, [])

    // Función que fija el tamaño del grid de los jugadores
    const setScrollContainer = (desktop = true) => {
        let container = gridJugadores.current
        if (container) {
            const generatedGrid = () => {
                let items = container.getElementsByClassName('jugador')
                let itemsLength = items.length
                let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

                const getWidth = () => {
                    let n = bp + (itemsLength > bp ? 0.3 : 0)
                    return (itemsLength / n) * 100
                }
                return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
            }
            let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
            container.setAttribute('style', styles)
        }
    }
    //*************************************/


    return (
        <section>
            <h2>Players</h2>
            <div className="contenedor-jugadores">
                <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
                    {
                        players.map(player => (
                            <article key={player.id} className="jugador">
                                <img src={player.image} alt={player.name} />
                                <h3>{player.name}</h3>
                                <div>
                                    <button onClick={() => addTitular(player)}>Titular</button>
                                    <button onClick={() => addAlternate(player)}>Alternate</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}


/* 
    convierte los states almacenado en store.js en propiedades 
    usables dentro de un componente de react
*/
const mapStateToProps = state => ({
    players: state.players
})

/*
    se encarga de despachar las acciones a ejecutar en el store.js
*/
const mapDispatchToProps = dispatch => ({
    addTitular(player) {
        dispatch({
            type: "addTitular",
            player
        })
    },
    addAlternate(player) {
        dispatch({
            type: "addAlternate",
            player
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Players);