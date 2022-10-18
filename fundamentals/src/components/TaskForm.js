const { Component } = require("react");


export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        return (
            <div>
                <br />
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange}
                        name='title'
                        value={this.state.title}
                        type='text' placeholder='Write a Task'
                    />
                    <br />
                    <br />
                    <textarea onChange={this.onChange}
                        name='description'
                        value={this.state.description}
                        placeholder='Write a Description'>
                    </textarea>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}
