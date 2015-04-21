let React = require('react');

let TodoItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onCheck: React.PropTypes.func.isRequired,
    complete: React.PropTypes.bool
  },

  render() {
    return (
        <li>
          <input
              type="checkbox"
              checked={this.props.complete}
              onChange={this.props.onCheck}
              style={{marginRight: 10}}
              />
          {this.props.title}
        </li>
    );
  }

});

module.exports = TodoItem;
