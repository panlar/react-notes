import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

const useNotesContext = () => {
  const {
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
  } = useContext(NotesContext);
  const { isEdit, noteToEdit, notes } = state;
  return {
    isEdit,
    noteToEdit,
    notes,
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
  };
};

export default useNotesContext;
