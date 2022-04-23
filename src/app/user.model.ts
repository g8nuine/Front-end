export class User {
  toDoListEntities: Array<todolist>;

  constructor(user: User) {
    this.toDoListEntities = user.toDoListEntities;
  }
}

export class todolist {
  name: string;
  taskEntities: Array<task>;

  constructor(list: todolist) {
    this.name = list.name;
    this.taskEntities = list.taskEntities;
  }
}
export class task {
  title: string;
  content: string;
  status: boolean;

  constructor(item: task) {
    this.title = item.title;
    this.content = item.content;
    this.status = item.status;
  }
}
