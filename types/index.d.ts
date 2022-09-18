declare module "toDo" {
  interface Item {
    id: number;
    content: string;
    isCompleted: boolean;
    category: string;
    tags?: string[];
  }
  type SelectedId = Item['id'];
  const item: Item;
  class ToDoApp {
    private toDoList;
    constructor();
    createToDo(newToDo: Item): void;
    readAllToDos(): Item[];
    readToDo(selectedId: SelectedId): Item[];
    updateToDo(selectedId: SelectedId, newToDo: Item): void;
    deleteToDo(selectedId: SelectedId): void;
    deleteAllToDos(): void;
    deleteAllTags(): void;
    deleteTagsById(): void;
  }
}