import React from 'react';
import { connect } from 'react-redux';

const Alternates = ({ alternates, removeAlternate }) => (
    <section>
        <h2>Alternates</h2>
        <div className="cancha">
            {
                alternates.map(alternate => (
                    <article key={alternate.id} className='suplente'>
                        <div>
                            <img src={alternate.image} alt={alternate.name} />
                            <button onClick={() => removeAlternate(alternate)}>X</button>
                        </div>
                        <p>{alternate.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    alternates: state.alternates
})

const mapDispatchToProps = dispatch => ({
    removeAlternate(alternate) {
        dispatch({
            type: "removeAlternate",
            alternate
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Alternates)