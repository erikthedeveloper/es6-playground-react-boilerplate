let DUMMY_TASKS = [
  {title: 'Open React docs', complete: false},
  {title: 'Open devtools and install React devtools (you are using Chrome, right?)', complete: false},
  {title: 'Implement "deleting a task"', complete: false},
  {title: 'Gut out ClicheTodoHelloWorldApp code', complete: false},
  {title: 'Write the Java scripts', complete: false},
  {title: 'Do all the ES6 things', complete: false},
  {title: 'Win Life', complete: true}
];

let TasksResource = {

  /**
   * Asynchronously fetch all tasks from "the server" .... :)
   */
  getAll() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(DUMMY_TASKS), 1000);
    });
  }

};

module.exports = TasksResource;
