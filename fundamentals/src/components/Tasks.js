import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render() {
        return (this.props.task.map((e) => <Task key={e.id} task={e}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />));
    }
}

Tasks.propTypes = {
    task: PropTypes.array.isRequired
}

export default Tasks;
