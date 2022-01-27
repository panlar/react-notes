import showdown from 'showdown';

const converter = new showdown.Converter({ simpleLineBreaks: true });

const useShowdown = (md) => {
  const html = converter.makeHtml(md);
  const n = document.createElement('div');
  n.innerHTML = html;
  const text = n.children[0]?.textContent || '';

  return { html, text };
};

export default useShowdown;
