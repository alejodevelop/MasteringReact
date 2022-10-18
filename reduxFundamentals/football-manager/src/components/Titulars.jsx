import React from 'react';
import { connect } from 'react-redux';
import cancha from '../cancha.svg';

const Titulars = ({ titulars, removeTitular }) => (
    <section>
        <h2>Titulars</h2>
        <div className="cancha">
            {
                titulars.map(titular => (
                    <article key={titular.id} className='titular'>
                        <div>
                            <img src={titular.image} alt={titular.name} />
                            <button onClick={() => removeTitular(titular)}>X</button>
                        </div>
                        <p>{titular.name}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulars: state.titulars
})

const mapDispatchToProps = dispatch => ({
    removeTitular(titular) {
        dispatch({
            type: "removeTitular",
            titular
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulars)