import { useEffect, useRef } from 'react';
import useNotesContext from '../hooks/useNotesContext';
import useShowdown from '../hooks/useShowdown';
import './ViewNote.css';

const ViewNote = () => {
  const body = useRef();
  const { switchButtons, noteToEdit, handleOpen } = useNotesContext();
  const { html, text } = useShowdown(noteToEdit.body);

  useEffect(() => {
    body.current.innerHTML = html || text;
  });

  return (
    <div className='ViewNote'>
      <h3>{noteToEdit.title || 'Sin Título'}</h3>
      <div ref={body}></div>
      <div className='actions'>
        <button className='btn-icon btn-primary' onClick={switchButtons}>
          <i className='bx bx-edit'></i>
        </button>
        <button className='btn-icon btn-secundary' onClick={handleOpen}>
          <i className='bx bx-trash-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default ViewNote;
