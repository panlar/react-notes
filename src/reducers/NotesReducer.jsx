import formatDate from '../helpers/formatDate';
import {
  ADD_NOTE,
  DELETE_NOTE,
  SAVE_NOTE,
  ORDER_NOTES,
  SET_NOTE_TO_EDIT,
  SWITCH_BUTTONS,
} from '../types/NotesTypes';

const notesReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SWITCH_BUTTONS: {
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    }

    case ADD_NOTE: {
      const newNote = {
        id: crypto.randomUUID(),
        title: '',
        body: '',
        date: formatDate(new Date(), 'es', {
          month: 'numeric',
          year: 'numeric',
          day: 'numeric',
        }),
      };

      return {
        ...state,
        isEdit: true,
        noteToEdit: newNote,
        notes: [newNote, ...state.notes],
      };
    }

    case SAVE_NOTE: {
      const { title, body } = payload;
      const newNote = {
        ...state.noteToEdit,
        title,
        body,
      };
      return {
        ...state,
        isEdit: false,
        noteToEdit: newNote,
        notes: state.notes.map((note) =>
          note.id === state.noteToEdit.id ? newNote : note
        ),
      };
    }

    case DELETE_NOTE: {
      const notes = state.notes.filter(
        (note) => note.id !== state.noteToEdit.id
      );
      return {
        ...state,
        notes,
        noteToEdit: notes[0] || null,
      };
    }

    case SET_NOTE_TO_EDIT: {
      return {
        ...state,
        isEdit: false,
        noteToEdit: state.notes.find((note) => note.id === payload),
      };
    }

    case ORDER_NOTES: {
      const ids = [...document.querySelectorAll('.Note')].map(
        (note) => note.id
      );
      return {
        ...state,
        notes: ids.map((id) => state.notes.find((note) => id === note.id)),
      };
    }

    default: {
      return state;
    }
  }
};

export default notesReducer;
