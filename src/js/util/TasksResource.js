let DUMMY_TASKS = [
  {title: 'Open React docs', complete: false},
  {title: 'Open devtools and install React devtools (you are using Chrome, right?)', complete: false},
  {title: 'Implement "deleting a task"', complete: false},
  {title: 'Gut out ClicheTodoHelloWorldApp code', complete: false},
  {title: 'Write the Java scripts', complete: false},
  {title: 'Do all the ES6 things', complete: false},
  {title: 'Win Life', complete: true}
];

/**
 * Yes. I know. This is not actually doing anything... but the consuming code doesn't need to know that!
 */
let TasksResource = {

  /**
   * Asynchronously fetch all tasks from "the server" .... :)
   */
  getAll() {
    return new Promise(function (resolve, reject) {
      _mockDelay(() => resolve(DUMMY_TASKS));
    });
  },

  /**
   * Asynchronously fetch all tasks from "the server" .... :)
   */
  addTask(task) {
    return new Promise(function (resolve, reject) {
      _mockDelay(() => resolve(true));
    });
  }

};

function _mockDelay(callback) {
  setTimeout(callback, Math.random() * 1000);
}

module.exports = TasksResource;
