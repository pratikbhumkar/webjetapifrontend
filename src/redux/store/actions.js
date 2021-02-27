import { SET_MOVIES, GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from "../actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: SET_MOVIES,
  payload: {
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
