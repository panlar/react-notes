import useNotesContext from '../hooks/useNotesContext';

const ConfirmDelete = () => {
  const { noteToEdit, deleteNote, handleOpen } = useNotesContext();

  return (
    <div className='Modal'>
      <div className='Box'>
        <h4>Eliminando Nota...</h4>
        <p>
          Deseal eliminar la nota <b>{noteToEdit.title}</b>?
        </p>
        <div>
          <button className='btn-primary' onClick={handleOpen}>
            Cancelar
          </button>
          <button
            className='btn-secundary'
            onClick={() => {
              handleOpen();
              deleteNote();
            }}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
