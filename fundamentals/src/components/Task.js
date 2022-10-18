import { Component } from "react";
import PropTypes from 'prop-types';

class Task extends Component {


    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {

        // en vez de escribir this.props.task se decosntruye para 
        // usar unicamente la palabra task
        const { task } = this.props;

        //en lugar de usar bind en el metodo onclick del boton para poder
        // pasar la propiedad si que se ejecute la funcion, puedo meter la
        // funcion en una arrow funtion y asi () => { this.props.deleteTask(task.id)}
        // de ambas formas funciona

        return (
            <div className='cyan' style={this.StyleCompleted()} >
                {task.title} - {this.props.task.description}
                -{task.done} - {task.id}

                <input type='checkbox' onChange={() => { this.props.checkDone(task.id) }} style={{ fontSize: '1rem' }} />


                <button style={btonDeleteStyles} onClick={this.props.deleteTask.bind(this, task.id)}>
                    X
            </button>

            </div>
        );
    }
}


Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btonDeleteStyles = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}


export default Task;
