let React = require('react');

let AddTaskForm = React.createClass({
  propTypes: {
    addTask: React.PropTypes.func.isRequired
  },

  render() {
    return (
        <form className="commentForm" onSubmit={this.onSubmit}>
          <input ref="newTaskInput" type="text" placeholder="Some Great Task"/>
        </form>
    );
  },

  onSubmit(e) {
    let input = React.findDOMNode(this.refs.newTaskInput);
    let newTask = {
      title: input.value,
      complete: false
    };

    e.preventDefault();
    if (!newTask.title.trim().length) return;

    this.props.addTask(newTask);

    input.value = '';
    input.focus();
  }

});

module.exports = AddTaskForm;
