/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
export default class RegisterBtn {
  constructor(element) {
    if (typeof element === 'string') {
      // eslint-disable-next-line no-param-reassign
      element = document.querySelector(element);
    }
    this.element = element;
    this.button = this.element.querySelector('.button');
    this.button.addEventListener('click', () => this.createTooltip());
  }

  createTooltip() {
    if (document.querySelector('.tooltip')) this.removeTooltip();

    const coords = this.button.getBoundingClientRect();
    let tooltip = '<div class=\'tooltip\'><h2 class=\'tooltip-header\'>Здесь заголовок</h2><div class=\'tooltip-content\'>Ваш контент</div></div>';
    this.element.insertAdjacentHTML('beforeend', tooltip);
    tooltip = this.element.querySelector('.tooltip');
    tooltip.style.top = `-${tooltip.offsetHeight + 5}px`;
    tooltip.style.left = `-${(tooltip.offsetWeight - coords.width) / 2}px`;
    setTimeout(() => {
      this.removeTooltip()
    }, 5000);

  }

  removeTooltip() {
    if (document.querySelector('.tooltip')) document.querySelector('.tooltip').remove();
  }

}
