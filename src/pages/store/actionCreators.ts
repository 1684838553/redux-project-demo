//将action放在actionCreators文件里面统一管理
import {
  DELETE_ITEM,
  SUBMIT_INPUT_VALUE,
  INIT_TODOLIST,
  CHANGE_VALUE,
  ADD_TODOLIST,
} from './actionType';
import axios from 'axios';

export const getInputChangeValue = (value) => ({
  type: SUBMIT_INPUT_VALUE,
  value,
});
export const getDeleteItem = (value) => ({
  type: DELETE_ITEM,
  value,
});

export const getInitTodolist = (value) => ({
  type: INIT_TODOLIST,
  value,
});

export const addTodoList = (value) => ({
  type: ADD_TODOLIST,
  value,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('test/list').then((res) => {
      const action = getInitTodolist(res.data.list);
      dispatch(action);
    });
  };
};

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const addList = () => {
  return (dispatch) => {
    axios.get('test/list').then((res) => {
      const action = addTodoList(res.data.data);
      dispatch(action);
    });
  };
};
