import { useState } from 'react';
import useNotesContext from '../hooks/useNotesContext';
import './EditNote.css';

const EditNote = () => {
  const { noteToEdit, saveNote } = useNotesContext();
  const [note, setNote] = useState(() => ({
    title: noteToEdit.title,
    body: noteToEdit.body,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNote(note);
  };

  const handleChange = (e) =>
    setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));

  return (
    <form id='EditNote' className='EditNote' onSubmit={handleSubmit}>
      <input
        autoFocus
        type='text'
        name='title'
        placeholder='Título'
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name='body'
        placeholder='Escribe tu nota, recuerda que tambien puedes usar Markdown 🤯'
        value={note.body}
        onChange={handleChange}></textarea>
      <button className='btn-icon btn-primary'>
        <i className='bx bx-save'></i>
      </button>
    </form>
  );
};

export default EditNote;
