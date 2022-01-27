import './App.css';
import ConfirmDelete from './components/ConfirmDelete';
import EditNote from './components/EditNote';
import Empty from './components/Empty';
import NotesList from './components/NotesList';
import ViewNote from './components/ViewNote';
import useNotesContext from './hooks/useNotesContext';

function App() {
  const { open, isEdit, notes, addNote } = useNotesContext();
  return (
    <div className='App'>
      <div className='bg'></div>
      {open && <ConfirmDelete />}
      <NotesList />
      {notes.length ? (
        <>
          {isEdit ? (
            <EditNote />
          ) : (
            <>
              <ViewNote />
              <button className='btn-add btn-primary' onClick={addNote}>
                Nueva Nota
              </button>
            </>
          )}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default App;
