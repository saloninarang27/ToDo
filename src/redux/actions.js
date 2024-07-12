export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    name
  }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});

export const editTask = (id, name) => ({
  type: EDIT_TASK,
  payload: { id, name }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});
