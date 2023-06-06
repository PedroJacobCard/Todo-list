"use strict";
(() => {
    let NotificationPlatform;
    (function (NotificationPlatform) {
        NotificationPlatform["EMAIL"] = "EMAIL";
        NotificationPlatform["SMS"] = "SMS";
        NotificationPlatform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(NotificationPlatform || (NotificationPlatform = {}));
    let ViewMode;
    (function (ViewMode) {
        ViewMode["TODO"] = "TODO";
        ViewMode["REMINDER"] = "REMINDER";
    })(ViewMode || (ViewMode = {}));
    const UUID = () => {
        return Math.random().toString(32).substr(2, 9);
    };
    const dateUtils = {
        tomorrow() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },
        today() {
            return new Date();
        },
        formatDate(date) {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    };
    ;
    //then we create classes which will contain all the properties that our future
    //objects will have.
    class Reminder {
        constructor(description, date, notifications) {
            this.id = UUID();
            this.dateCreated = dateUtils.today();
            this.dateUpdated = dateUtils.today();
            this.description = '';
            this.date = new Date();
            this.notifications = [NotificationPlatform.EMAIL];
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }
        render() {
            return `
            Reminder
            Description: ${this.description}
            Date: ${dateUtils.formatDate(this.date)}
            Platform: ${this.notifications.join(', ')}
            `;
        }
    }
    class Todo {
        constructor(description) {
            this.id = UUID();
            this.dateCreated = dateUtils.today();
            this.dateUpdated = dateUtils.today();
            this.description = '';
            this.done = false;
            this.description = description;
        }
        render() {
            return `
            To-Do
            Description: ${this.description}
            `;
        }
    }
    //here is realy important to remember that our reder method will include the list of our objects.
    //because of this we have to define that the type of the objects that will be rended must be an array of objects of te same type of ou interface.
    //it asure us that every object that is suposed to be rended must be a implamentantion of our interface
    const taskView = {
        getTodo(form) {
            const todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },
        getReminder(form) {
            const reminderNotifications = [
                form.notification.value
            ];
            const reminderDate = new Date(form.scheduleDate.value);
            const reminderDescription = form.reminderDescription.value;
            form.reset();
            return new Reminder(reminderDescription, reminderDate, reminderNotifications);
        },
        render(tasks, mode) {
            const tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = '';
            tasks.forEach((task) => {
                const ul = document.createElement('ul');
                const label = document.createElement('label');
                label.innerHTML = 'Done: ';
                const div = document.createElement('div');
                div.className = 'checkmark';
                const doneCheck = document.createElement('input');
                doneCheck.type = 'checkbox';
                doneCheck.addEventListener('change', () => {
                    li.style.transition = '0.4s';
                    doneCheck.checked ?
                        li.style.backgroundColor = 'rgb(237, 253, 253)'
                        :
                            li.style.backgroundColor = 'rgb(253, 212, 212)';
                });
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.addEventListener('click', () => {
                    const index = tasks.indexOf(task);
                    if (index !== -1) {
                        tasks.splice(index, 1);
                        ul.remove();
                    }
                });
                const li = document.createElement('li');
                const textNode = document.createTextNode(task.render());
                label.append(doneCheck, div);
                li.append(textNode, label, removeBtn);
                ul.appendChild(li);
                tasksList.appendChild(ul);
            });
            const todoSet = document.querySelector('#todoSet');
            const reminderSet = document.querySelector('#reminderSet');
            if (mode === ViewMode.TODO) {
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: block');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.removeAttribute('disabled');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: none');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('disabled', 'true');
            }
            else {
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: block');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.removeAttribute('disabled');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: none');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('disabled', 'true');
            }
        },
    };
    const TaskController = (view) => {
        const tasks = [];
        let mode = ViewMode.TODO;
        const handleEvent = (event) => {
            event.preventDefault();
            const form = event.target;
            switch (mode) {
                case ViewMode.TODO:
                    tasks.push(view.getTodo(form));
                    break;
                case ViewMode.REMINDER:
                    tasks.push(view.getReminder(form));
                    break;
                default:
                    console.log('problem');
                    break;
            }
            view.render(tasks, mode);
        };
        const handleToggleMode = () => {
            switch (mode) {
                case ViewMode.TODO:
                    mode = ViewMode.REMINDER;
                    break;
                case ViewMode.REMINDER:
                    mode = ViewMode.TODO;
            }
            view.render(tasks, mode);
        };
        const checkBox = document.getElementById('toggleMode');
        checkBox === null || checkBox === void 0 ? void 0 : checkBox.addEventListener('click', handleToggleMode);
        const taskForm = document.getElementById('taskForm');
        taskForm === null || taskForm === void 0 ? void 0 : taskForm.removeEventListener('submit', handleEvent);
        taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener('submit', handleEvent);
    };
    const body = document.querySelector('body');
    const lightDark = document.querySelector('#toggleDarkMode');
    lightDark === null || lightDark === void 0 ? void 0 : lightDark.addEventListener('click', () => {
        body.style.transition = '0.4s';
        if (lightDark.checked) {
            body.style.backgroundColor = '#212121';
            body.style.color = '#76ad8f';
        }
        else {
            body.style.backgroundColor = '#fff';
            body.style.color = '#000';
        }
    });
    TaskController(taskView);
})();
