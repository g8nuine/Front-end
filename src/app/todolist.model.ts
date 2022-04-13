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

  constructor(item: task) {
    this.title = item.title;
    this.content = item.content;
  }
}
