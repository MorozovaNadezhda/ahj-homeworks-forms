import Widget from '../Widget';

test('Should add widget', () => {
  const widget = new Widget(document.body);
  widget.bindToDOM();
  const createdWidget = document.querySelector('#widget');

  expect(createdWidget.innerHTML).toEqual(widget.htmlElement);
});

test('Should show widget', () => {
  const widget = new Widget(document.body);
  widget.bindToDOM();
  const createdWidget = document.querySelector('#widget');

  const documentBody = document.body;
  documentBody.addEventListener('click', () => {
    widget.positionWidget(documentBody);
  });
  documentBody.click();

  expect(createdWidget.classList.contains('hidden')).toBeFalsy();
});