let React         = require('react');
let TasksResource = require('../util/TasksResource');
let TodoItem      = require('./TodoItem');
let AddTaskForm   = require('./AddTaskForm');

let ClicheTodoHelloWorldApp = React.createClass({

  getInitialState() {
    return {
      tasks: []
    };
  },

  componentDidMount() {
    TasksResource.getAll().then((tasks) => this.setState({tasks}));
  },

  render() {
    let tasks = this.state.tasks;
    return (
        <div>
          <h2>Welcome, to the ClicheTodoHelloWorldApp!!</h2>

          <p>
            {tasks.filter((task) => task.complete === true).length} of {tasks.length} tasks complete
          </p>
          <ul className="list-unstyled">
            {tasks.map((task) =>
                <TodoItem
                    key={tasks.indexOf(task)}
                    title={task.title}
                    complete={task.complete}
                    onCheck={this.makeOnCheckHandler(task)}
                    />)}
          </ul>
          <AddTaskForm addTask={this.addTask} />
        </div>
    );
  },

  addTask(newTask) {
    let tasks = this.state.tasks.slice(0);
    tasks.push(newTask);
    this.setState({tasks: tasks});
  },

  makeOnCheckHandler(task) {
    return (e) => {
      let tasks = this.state.tasks.slice(0);
      tasks[tasks.indexOf(task)].complete = e.target.checked;
      this.setState({tasks: tasks});
    };
  }

});

module.exports = ClicheTodoHelloWorldApp;
