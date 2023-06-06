(function () {
    var toDo = {
        description: 'todo',
        done: false
    };
    var reminder = {
        description: 'reminder',
        date: '31.05.2023'
    };
    var taskView = {
        render: function (tasks) {
            var tasksList = document.querySelector('#tasksList');
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            ;
            tasks.forEach(function (task) {
                var li = document.createElement('li');
                var textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                tasksList.appendChild(li);
            });
        },
    };
    var TaskController = function (view) {
        var _a;
        var tasks = [toDo, reminder];
        var handleEvent = function (event) {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document
            .getElementById('taskForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleEvent);
    };
    TaskController(taskView);
})();
