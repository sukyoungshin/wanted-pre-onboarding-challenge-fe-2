import { Item, SelectedId } from "toDo";

const item: Item = {
  id: 0,
  content: '',
  isCompleted: false,
  category: '',
  tags: []
};

class ToDoApp {
  private toDoList: typeof item[];
  constructor() {
    this.toDoList = [];
  }

  createToDo(newToDo: Item) {
    if (newToDo.content.length <= 0) {
      console.error('투두의 내용을 입력해주세요.');
      return;
    } 

    this.toDoList = [...this.toDoList, newToDo];
  }

  readAllToDos() {
    return this.toDoList;
  }

  readToDo(selectedId: SelectedId) {
    return this.toDoList.filter(({id: toDoId}) => toDoId === selectedId);
  }

  updateToDo(selectedId: SelectedId, newToDo: Item ) {
    if (this.toDoList.length > 0) {
      const index = this.toDoList.findIndex(({id: toDoId}) => toDoId === selectedId);
      const targetToDo = this.toDoList[index];
      targetToDo.content = newToDo.content;
      targetToDo.category = newToDo.category;
      targetToDo.isCompleted = newToDo.isCompleted;
      if (newToDo.tags) {
        targetToDo.tags = newToDo.tags;
      }
    }
  }

  deleteToDo(selectedId: SelectedId) {
    this.toDoList = this.toDoList.filter(({id: toDoId}) => toDoId !== selectedId);
  }

  deleteAllToDos() {
    this.toDoList = [];
  }

  // TODO: Tags 삭제 로직구현 필요
  // 특정 할 일의 모든 태그를 제거할 수 있습니다.
  deleteAllTags () {}
  // 특정 할 일의 특정 태그를 삭제할 수 있습니다.
  deleteTagsById () {}
}