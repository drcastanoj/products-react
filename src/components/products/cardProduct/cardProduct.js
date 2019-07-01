import React from 'react';
import { CardTitle, Card, CardText } from 'react-md';
import './cardProduct.scss';
import PropTypes from 'prop-types';

function CardProduct({ product }) {
    const { name, brand, stock, price, categories, photo } = product;
    function generateTextCategory(categories) {
        let text = '';
        categories.forEach((category, index) => {
            if (index + 1 < categories.length) {
                text += `${category}, `
            } else {
                text += category;
            }
        })
        return text;
    }
    return (<Card className="md-block-centered card-product">
        <CardTitle
            title={name}
            subtitle={`${generateTextCategory(categories)} - ${brand}`}
        />
        <CardText className="card-content">

            <span className="card-content__avatar">
                <img alt="Product" src={photo} />
            </span>
            <div className="card-content__description">
                <span className="card-content__description__text">
                    {product.description}
                </span>
                <span> <b>Stock: </b>  {stock}</span>
                <span> <b>Price: </b> ${price}</span>
            </div>
        </CardText>
    </Card>)
}

CardProduct.propTyoes = {
    product: PropTypes.object.isRequired
};

export default CardProduct;
