import React from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';

export class DispListing extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.items = props.items;
  }
  render () {
    // console.log(this.items);
    return (
      <div className="item-list">
        {/* <h2>The page is under development</h2> */}
        {this.items.map( o => o.state==='active' && <DispItem key={o.listing_id} item={o} />)}
      </div>
    );
  }
}

export class DispItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.item = props.item;
  }
  render() {
    // console.log(this.item);
    // Image
    const Image = this.item['MainImage'];
    let url = '';
    let alt = 'No image available';
    if (Image) {
      url = this.item.MainImage.url_570xN;
    }
    // Title
    let title;
    if (this.item.title.length <= 50) {
      title = this.item.title;
    } else {
      title = `${this.item.title.substring(0,49)}…`;
    }
    // Price
    const currency_code = this.item.currency_code;
    let price;
    if (['USD','EUR'].includes(currency_code)) {
      /* eslint-disable-next-line no-undef */
      price = Intl.NumberFormat(
        'en-US', {
          style: 'currency',
          currency: currency_code,
          currencyDisplay: 'symbol',
        }).format(this.item.price);
    } else {
      price = `${this.item.price} ${currency_code}`;
    }
    // Quantity
    const quantity = this.item.quantity;
    let qty_class = 'level-high';
    if (quantity <= 10) {
      qty_class = 'level-low';
    } else if (quantity <= 20) {
      qty_class = 'level-medium';
    }

    return (
      <div className="Item">
        <div className="item-image">
          <img src={url} alt={alt} />
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={`item-quantity ${qty_class}`}>{quantity} left</p>
        </div>
      </div>
    );
  }
}
