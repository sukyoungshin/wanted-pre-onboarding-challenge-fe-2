// @ts-check

/**
 * 각 투두 아이템에 필요한 형태(Modeling/Shape) 입니다.
 * @constant
 * @typedef {Object} Item
 * @property {number} id - 각 todo의 ID# 입니다.
 * @property {string} content - 처리해야 하는 일의 내용입니다. (ex. 챌린지 과제하기)
 * @property {boolean} isCompleted - todo의 완료유무를 나타냅니다.
 * @property {string} category - 카테고리를 나타냅니다. (ex. study, exercise, hobby)
 * @property {string[]} [tags] - 해쉬태그처럼 todo를 꾸며주는 속성입니다. (ex. 휴식, 등산, 카페)
 */
/** @type {Item} */
const Item = {
  id: 0,
  content: '',
  isCompleted: false,
  category: '',
  tags: []
};

/** 
 * @class
*/
 class ToDoApp {
  /**
    * @constructor
    */
  constructor() {
    this.todolist = [];
  }

  /**
   * - 투두를 추가할 수 있습니다.
   * - 내용을 입력하지 않았을 시, 투두를 추가할 수 없습니다.
   * @param {Item} newToDo - 새로운 투두를 담고 있는 Object입니다.
   */
  createToDo(newToDo) {
    // 입력한 내용이 없을 시, 해당 투두는 등록X
    if (newToDo.content.length <= 0) return; 
    
    this.todolist = [...this.todolist, newToDo]
  }

  /**
    * - ID#를 기반으로 특정 할 일을 조회할 수 있습니다. 
    * - 입력받은 ID#가 없을 시, 모든 할 일을 조회합니다.
    * @param {number} [id] - ID#를 기반으로 특정 할 일을 조회하거나, 전체 투두리스트를 조회할 수 있습니다.
    * @return {Item[]}
    */
  readToDo(id) {
    // READ All
    if (id === undefined) return this.todolist;
    // READ Todos By Id
    return this.todolist.find(v => v.id === id);
  }

  /**
    * - ID를 제외한 모든 속성을 수정할 수 있습니다.
    * - 특정 할 일의 특정 태그를 수정할 수 있습니다.
    * @param {number} id - 해당 ID#의 투두를 조회합니다.
    * @param {Item} newToDo - 새로 입력한 투두의 내용입니다.
    * 
    */
  updateToDo(id, newToDo) {
    const index = this.todolist.findIndex(v => v.id === id);
    this.todolist[index].content = newToDo.content;
    this.todolist[index].category = newToDo.category;
    this.todolist[index].isCompleted = newToDo.isCompleted;
    if (newToDo.tags) {
      this.todolist[index].tags = newToDo.tags;
    }
  }

  /**
    * - ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
    * @param {number} id - 제거할 투두의 id#
    */
  deleteToDo(id) {
    this.todolist = this.todolist.filter(a => a.id !== id);
  }
  /** 
   * - 모든 할 일을 제거할 수 있습니다.
  */
  deleteAll() {
    this.todolist = [];    
  }

  // TODO: Tags 삭제 로직구현 필요
  /**
   * - 특정 할 일의 특정 태그를 삭제할 수 있습니다.
   */
  deleteTags () {}
  /**
   * - 특정 할 일의 모든 태그를 제거할 수 있습니다.
   */
  deleteAllTags () {}
}