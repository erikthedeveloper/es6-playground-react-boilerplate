let React = require('react');

let AddTaskForm = React.createClass({
  propTypes: {
    addTask: React.PropTypes.func.isRequired
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
  },

  render() {
    return (
      <form className="commentForm" onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-sm-3">
            <input ref="newTaskInput" className="form-control" type="text" placeholder="Some Great Task"/>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-sm btn-default"><span className="glyphicon glyphicon-ok"></span></button>
          </div>
        </div>
      </form>
    );
  }

});

module.exports = AddTaskForm;
