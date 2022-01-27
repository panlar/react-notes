import useNotesContext from '../hooks/useNotesContext';
import PostIt from '../post-it.png';
import './Empty.css';

const Empty = () => {
  const { addNote } = useNotesContext();
  return (
    <div className='Empty'>
      <img src={PostIt} alt='post-it' />
      <h4>Oops! está vacio</h4>
      <p>
        No hay notas en este momento, puedes añadir una dando clic aquí abajo
      </p>
      <button className='btn-primary' onClick={addNote}>
        Añadir Nota
      </button>
    </div>
  );
};

export default Empty;
