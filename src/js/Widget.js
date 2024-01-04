/* eslint-disable */
export default class Widget {
  constructor(parentElement, header, content) {
    this.parentElement = parentElement;
    this.header = header;
    this.content = content;
    this.widgetElement = document.createElement('div');
  }

  get htmlElement() {
    return `
    <p class="header-widget">${this.header}</p>
    <p class="content-widget">${this.content}</p>
    `;
  }

  bindToDOM() {
    this.widgetElement.id = 'widget';
    this.widgetElement.className = 'widget hidden';
    this.widgetElement.innerHTML = this.htmlElement;
    this.parentElement.appendChild(this.widgetElement);
    // <div id="widget" class="widget hidden">
    //   <p class="header-widget">${this.header}</p>
    //   <p class="content-widget">${this.content}</p>
    // </div>
  }

  positionWidget(element) {
    const clickWidget = document.querySelector('#widget');
    clickWidget.classList.toggle('hidden');
    clickWidget.style.bottom = `${element.offsetTop + 20}px`;
    clickWidget.style.left = `${element.offsetLeft - (clickWidget.offsetWidth - element.offsetWidth) / 2}px`;

    // const button = document.getElementById('button');
    // const widget = button.getBoundingClientRect();
    // console.log(widget)
    // console.log(element.offsetTop)
    // console.log(element.offsetLeft)
    // console.log(element.offsetWidth)
    // console.log(element.offsetHeight)
  }
}