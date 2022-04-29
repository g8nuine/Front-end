export class User {
  toDoListEntities: Array<todolist>;

  constructor(user: User) {
    this.toDoListEntities = user.toDoListEntities;
  }
}

export class todolist {
  id: number;
  name: string;
  taskEntities: Array<task>;

  constructor(list: todolist) {
    this.id = list.id;
    this.name = list.name;
    this.taskEntities = list.taskEntities;
  }
}
export class task {
  id: number;
  title: string;
  content: string;
  status: boolean;

  constructor(item: task) {
    this.id = item.id;
    this.title = item.title;
    this.content = item.content;
    this.status = item.status;
  }
}
