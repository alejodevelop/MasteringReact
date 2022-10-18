import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// task JSON file
import task from './samples/tasks.json';

// components
import Task from './components/Tasks.js';
import TaskForm from './components/TaskForm';
import Post from './components/Post';

class App extends Component {

    state = {
        task: task
    }

    // agrega una tarea 
    addTask = (title, description) => {
        const newTask = {
            title: title,
            description: description,
            done: false,
            id: this.state.task.length
        }
        this.setState({
            task: [...this.state.task, newTask]
        })
    }

    //borra una tarea
    deleteTask = (id) => {
        const newTasks = this.state.task.filter(task => task.id !== id)
        this.setState({ task: newTasks })
    }

    //marca o desmarca una tarea como hecha o no hecha
    checkDone = id => {
        const newTasks = this.state.task.map(task => {
            if (task.id === id) {
                task.done = !task.done
            }
            return task;
        })

        this.setState({ task: newTasks })
    }

    render() {
        return (
            <div>
                <Router>

                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/post">Posts</Link>


                    <Route exact path="/" render={() => {
                        return (
                            <div>
                                <TaskForm addTask={this.addTask} />
                                <Task
                                    task={this.state.task}
                                    deleteTask={this.deleteTask}
                                    checkDone={this.checkDone}
                                />
                            </div>
                        );
                    }}>

                    </Route>

                    <Route path="/post" component={Post} />



                </Router>

            </div>
        );
    }
}

export default App;
