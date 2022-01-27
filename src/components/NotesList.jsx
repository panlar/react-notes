import { useEffect } from 'react';
import setIndex from '../helpers/setIndex';
import useNotesContext from '../hooks/useNotesContext';
import Note from './Note';
import './NotesList.css';

const NotesList = () => {
  useEffect(() => {
    setIndex();
  });

  const { notes, isEdit } = useNotesContext();
  return (
    <div className='NotesList'>
      {notes.length && !isEdit ? (
        <>
          <h5>Todas las notas</h5>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default NotesList;
