import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const fetchNotebooks = () => dispatch => (
  NotebookApiUtil.fetchNotebooks()
  .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  NotebookApiUtil.fetchNotebook(id)
  .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const deleteNotebook = id => dispatch => (
  NotebookApiUtil.deleteNotebook(id)
  .then((notebook) => dispatch(removeNotebook(notebook)))
);

export const createNotebook = note => dispatch => (
  NotebookApiUtil.createNotebook(note)
  .then(newNotebook => dispatch(receiveNotebook(newNotebook)))
);

export const updateNotebook = note => dispatch => (
  NotebookApiUtil.updateNotebook(note)
  .then(updatedNotebook => dispatch(receiveNotebook(updatedNotebook)))
);
