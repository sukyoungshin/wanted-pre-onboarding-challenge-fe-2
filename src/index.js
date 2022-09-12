// @ts-check

/**
 * 각 투두 아이템에 필요한 형태(Modeling/Shape) 입니다.
 * @constant
 * @typedef {Object} item
 * @property {number} id - 각 todo의 ID# 입니다.
 * @property {string} content - 처리해야 하는 일의 내용입니다. (ex. 챌린지 과제하기)
 * @property {boolean} isCompleted - todo의 완료유무를 나타냅니다.
 * @property {string} category - 카테고리를 나타냅니다. (ex. study, exercise, hobby)
 * @property {string[]} [tags] - 해쉬태그처럼 todo를 꾸며주는 속성입니다. (ex. 휴식, 등산, 카페)
 */
/** @type {item} */
const item = {
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
    this.toDoList = [];
  }

  /**
   * - 투두를 추가할 수 있습니다.
   * - 내용을 입력하지 않았을 시, 투두를 추가할 수 없습니다.
   * @param {item} newToDo - 새로운 투두를 담고 있는 Object입니다.
   */
  createToDo(newToDo) {
    // 입력한 내용이 없을 시, 해당 투두는 등록되지 않습니다.
    if (newToDo.content.length <= 0) {
      console.error('투두의 내용을 입력해주세요.');
      return;
    } 
    
    this.toDoList = [...this.toDoList, newToDo]
  }

  /**
    * - 모든 할 일을 조회합니다.
    * @return {item[]}
    */
  readAllToDos() {
    return this.toDoList;
  }
  /**
  * - ID#를 기반으로 특정 할 일을 조회할 수 있습니다. 
  * @param {number} [seleteId] - ID#를 기반으로 특정 할 일을 조회하거나, 전체 투두리스트를 조회할 수 있습니다.
  * @return {item[]}
  */
  readToDo(seleteId) {
    return this.toDoList.filter(({toDoId}) => toDoId === seleteId);
  }

  /**
    * - ID를 제외한 모든 속성을 수정할 수 있습니다.
    * - 특정 할 일의 특정 태그를 수정할 수 있습니다.
    * @param {number} id - 해당 ID#의 투두를 조회합니다.
    * @param {item} newToDo - 새로 입력한 투두의 내용입니다.
    * 
    */
  updateToDo(id, newToDo) {
    const index = this.toDoList.findIndex(({toDoId}) => toDoId === id);
    const targetToDo = this.toDoList[index];
    targetToDo.content = newToDo.content;
    targetToDo.category = newToDo.category;
    targetToDo.isCompleted = newToDo.isCompleted;
    if (newToDo.tags) {
      targetToDo.tags = newToDo.tags;
    }
  }

  /**
    * - ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
    * @param {number} selectedId - 제거할 투두의 id#
    */
  deleteToDo(selectedId) {
    this.toDoList = this.toDoList.filter(({toDoId}) => toDoId !== selectedId);
  }
  /** 
   * - 모든 할 일을 제거할 수 있습니다.
  */
  deleteAll() {
    this.toDoList = [];    
  }

  // TODO: Tags 삭제 로직구현 필요
  /**
   * - 특정 할 일의 특정 태그를 삭제할 수 있습니다.
   */
   deleteTagsById () {}
  /**
   * - 특정 할 일의 모든 태그를 제거할 수 있습니다.
   */
  deleteAllTags () {}
}