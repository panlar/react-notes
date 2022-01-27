import setIndex from '../helpers/setIndex';
import useNotesContext from '../hooks/useNotesContext';
import useShowdown from '../hooks/useShowdown';
import './Note.css';

const Note = ({ note }) => {
  const { setNoteToEdit, dragItem, setDragItem, orderNotes } =
    useNotesContext();
  const { id, body, title, date } = note;
  const { text } = useShowdown(body);

  const handleClick = () => {
    setNoteToEdit(id);
  };

  const dragStart = (e) => {
    setDragItem(e.target);
    e.target.classList.add('drag');
  };

  const dragEnter = (e) => {
    const noteList = document.querySelector('.NotesList');
    const thisItem = e.currentTarget;
    thisItem.dataset.index > dragItem.dataset.index
      ? noteList.insertBefore(dragItem, thisItem.nextElementSibling)
      : noteList.insertBefore(dragItem, thisItem);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragLeave = () => setIndex();

  const dragEnd = (e) => {
    e.target.classList.remove('drag');
    orderNotes();
  };

  return (
    <div
      draggable='true'
      className='Note'
      onClick={handleClick}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragEnd={dragEnd}
      id={id}>
      <h6>{title || 'Nueva nota...'}</h6>
      <p>{text}</p>
      <time>{date}</time>
    </div>
  );
};

export default Note;
