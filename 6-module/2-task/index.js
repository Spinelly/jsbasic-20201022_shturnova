import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.init();
    this.addCard();
  }

  init() {
    const card = document.createElement('div');
    card.className = 'card';
    card.insertAdjacentHTML('beforeend', this.renderProduct(this.product));
    return card;
  }

  renderProduct({image, price, name}) {
    return `
        <div class="card__top">
          <img src="../../assets/images/products/${image}" class="card__image" alt="product">
          <span class="card__price">€${price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${name}</div>
          <button type="button" class="card__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
        `;
  }

  addCard() {
    this.elem.addEventListener('click', () => {
      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      }));
    });
  }

}
