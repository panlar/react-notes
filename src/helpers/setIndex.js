const setIndex = () => {
  const noteList = document.querySelector('.NotesList');
  [...noteList.children].forEach(
    (child, index) => (child.dataset.index = index)
  );
};

export default setIndex;
