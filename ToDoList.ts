(() => {
    enum NotificationPlatform {
        EMAIL = 'EMAIL',
        SMS = 'SMS',
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
    }

    enum ViewMode {
        TODO = 'TODO',
        REMINDER = 'REMINDER'
    }

    const UUID = (): string => {
        return Math.random().toString(32).substr(2, 9);
    };

    const dateUtils = {
        tomorrow(): Date {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },

        today(): Date {
            return new Date();
        },

        formatDate(date: Date): string {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    };

    //create a interface which will lead the objects type
    interface Task {
        id: string;
        dateCreated: Date;
        dateUpdated: Date;
        description: string;
        render(): string;
    };

    //then we create classes which will contain all the properties that our future
    //objects will have.
    class Reminder implements Task {
        id: string = UUID();
        dateCreated: Date = dateUtils.today();
        dateUpdated: Date = dateUtils.today();
        description: string = '';

        date: Date = new Date();
        notifications: Array<NotificationPlatform> = [NotificationPlatform.EMAIL];

        constructor(description: string, date: Date, notifications: Array<NotificationPlatform>){
            this.description = description
            this.date = date
            this.notifications = notifications
        }

        render(): string {
            return `
            Reminder
            Description: ${this.description}
            Date: ${dateUtils.formatDate(this.date)}
            Platform: ${this.notifications.join(', ')}
            `;
        }
    }

    class Todo implements Task {
        id: string = UUID();
        dateCreated: Date = dateUtils.today();
        dateUpdated: Date = dateUtils.today();
        description: string = '';

        done: boolean = false;

        constructor(description: string){
            this.description = description;
        }

        render(): string {
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
        getTodo(form: HTMLFormElement): Todo {
            const todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },

        getReminder(form: HTMLFormElement): Reminder {
            const reminderNotifications = [
                form.notification.value as NotificationPlatform
            ];
            const reminderDate = new Date(form.scheduleDate.value);
            const reminderDescription = form.reminderDescription.value;
            form.reset();
            return new Reminder(
                reminderDescription,
                reminderDate,
                reminderNotifications
            );
        },

        render(tasks: Array<Task>, mode: ViewMode) {
            const tasksList = document.querySelector('#tasksList') as HTMLElement;
            tasksList.innerHTML = '';

            tasks.forEach((task)  => {
                const ul = document.createElement('ul');
                const label = document.createElement('label');
                label.innerHTML = 'Done: ';
                const div = document.createElement('div');
                div.className = 'checkmark';
                
                const doneCheck = document.createElement('input');
                doneCheck.type = 'checkbox';
                doneCheck.addEventListener('change', () => {
                    li.style.transition = '0.4s'
                    doneCheck.checked ?
                        li.style.backgroundColor = 'rgb(237, 253, 253)'
                    :
                        li.style.backgroundColor = 'rgb(253, 212, 212)'
                });
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn?.addEventListener('click', ()=> {
                    const index = tasks.indexOf(task);
                    if(index !== -1) {
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

            const todoSet = document.querySelector('#todoSet') as HTMLElement;
            const reminderSet = document.querySelector('#reminderSet') as HTMLElement;

            if(mode === ViewMode.TODO){
                todoSet?.setAttribute('style', 'display: flex');
                todoSet?.removeAttribute('disabled');
                reminderSet?.setAttribute('style', 'display: none');
                reminderSet?.setAttribute('disabled', 'true');
            } else {
                reminderSet?.setAttribute('style', 'display: flex');
                reminderSet?.removeAttribute('disabled');
                todoSet?.setAttribute('style', 'display: none');
                todoSet?.setAttribute('disabled', 'true');
            }
        },
    };

    const TaskController = (view: typeof taskView) => {
        const tasks: Array<Task> = [];
        let mode: ViewMode = ViewMode.TODO;

        const handleEvent = (event: Event) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            switch(mode as ViewMode){
                case ViewMode.TODO:
                    tasks.push(view.getTodo(form));
                    break;
                case ViewMode.REMINDER:
                    tasks.push(view.getReminder(form));
                    break;
                default: 
                    console.log('problem')
                break;
            }
            view.render(tasks, mode);
        };

        const handleToggleMode = () => {
            switch(mode as ViewMode) {
                case ViewMode.TODO:
                    mode = ViewMode.REMINDER;
                    break;
                case ViewMode.REMINDER:
                    mode = ViewMode.TODO;
            }
            view.render(tasks, mode);
        };

        const checkBox = document.getElementById('toggleMode') as HTMLInputElement;

        checkBox
        ?.addEventListener('click', handleToggleMode);

        const taskForm = document.getElementById('taskForm') as HTMLFormElement;

        taskForm
        ?.removeEventListener('submit', handleEvent);
        taskForm
        ?.addEventListener('submit', handleEvent);
    };

    const body = document.querySelector('body') as HTMLElement;
    const lightDark = document.querySelector('#toggleDarkMode') as HTMLInputElement;
    lightDark
    ?.addEventListener('click', () => {
        body.style.transition = '0.4s';
        if(lightDark.checked){
            body.style.backgroundColor = '#212121'
            body.style.color = '#76ad8f'
        } else{
          body.style.backgroundColor = '#fff'
          body.style.color = '#000'
        } 
    })

    TaskController(taskView);
})()
