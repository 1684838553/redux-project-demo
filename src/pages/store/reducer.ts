import {
  DELETE_ITEM,
  SUBMIT_INPUT_VALUE,
  INIT_TODOLIST,
  CHANGE_VALUE,
  ADD_TODOLIST,
  INIT_WORDS,
  SELECT_TAG,
} from './actionType';
// 创建reducer,reducer返回的必须是一个函数，reducer负责管理整个store中的数据
// 默认值
const defaultState = {
  list: ['1', '2', 'fff'],
  value: '',
  words: [],
};

//reducer ,可以接受state，但绝不可以修改state
export default (state = defaultState, action) => {
  let newState;
  try {
    //不能直接修改state
    newState = JSON.parse(JSON.stringify(state));
  } catch (e) {
    console.log(e, 'throw Error');
  }
  switch (action.type) {
    case SUBMIT_INPUT_VALUE:
      newState.list = [action.value, ...state.list];
      newState.value = '';
      return newState;
    case DELETE_ITEM:
      newState.list.splice(action.value, 1);
      return newState;
    case INIT_TODOLIST:
      newState.list = action.value;
      return newState;
    case CHANGE_VALUE:
      newState.value = action.value;
      return newState;
    case ADD_TODOLIST:
      newState.list = [...state.list, ...action.value];
      return newState;
    case INIT_WORDS:
      newState.words = action.value;
      return newState;
    case SELECT_TAG:
      newState.words.splice(action.value.index, 1);
      newState.list = [action.value.item, ...state.list];
      return newState;
  }
  return state;
};
