let React = require('react');
let ClicheTodoHelloWorldApp = require('./components/ClicheTodoHelloWorldApp');

let thingsTodo = [
  {title: 'Open React docs', complete: false},
  {title: 'Open devtools and install React devtools (you are using Chrome, right?)', complete: false},
  {title: 'Implement "deleting a task"', complete: false},
  {title: 'Gut out ClicheTodoHelloWorldApp code', complete: false},
  {title: 'Write the Java scripts', complete: false},
  {title: 'Do all the ES6 things', complete: false},
  {title: 'Win Life', complete: true}
];

React.render(
    <ClicheTodoHelloWorldApp />,
    document.getElementById('react_playground')
);
