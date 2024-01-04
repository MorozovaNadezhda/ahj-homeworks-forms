import Widget from './Widget';

const button = document.getElementById('button');
const widget = new Widget(
  document.body,
  'Popover title',
  'And here`s some amazing content. It`s very engaging. Right?',
);
widget.bindToDOM();

button.addEventListener('click', () => {
  widget.positionWidget(button);
});