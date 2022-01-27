import { createContext, useEffect, useReducer, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import notesReducer from '../reducers/NotesReducer';
import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  ORDER_NOTES,
  SAVE_NOTE,
  SET_NOTE_TO_EDIT,
  SWITCH_BUTTONS,
} from '../types/NotesTypes';

const NotesContext = createContext();

const initialValue = {
  isEdit: false,
  noteToEdit: null,
  notes: [],
};

const NotesProvider = ({ children }) => {
  const [value, handleValue] = useLocalStorage({
    key: 'notes_panlar',
    initialValue,
  });
  const [state, dispatch] = useReducer(notesReducer, value);
  const [open, setOpen] = useState(false);
  const [dragItem, setDragItem] = useState(null);

  const switchButtons = () => dispatch({ type: SWITCH_BUTTONS });

  const addNote = () => dispatch({ type: ADD_NOTE });

  const saveNote = (note) => dispatch({ type: SAVE_NOTE, payload: note });

  const deleteNote = () => dispatch({ type: DELETE_NOTE });

  const orderNotes = () => dispatch({ type: ORDER_NOTES });

  const setNoteToEdit = (id) =>
    dispatch({ type: SET_NOTE_TO_EDIT, payload: id });

  const handleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    handleValue(state);
  }, [state]);

  return (
    <NotesContext.Provider
      value={{
        state,
        open,
        dragItem,
        switchButtons,
        addNote,
        saveNote,
        deleteNote,
        setNoteToEdit,
        handleOpen,
        setDragItem,
        orderNotes,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
export { NotesProvider };
