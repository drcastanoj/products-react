import React, { useEffect, useState } from 'react';
import CardProduct from '../cardProduct/cardProduct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LOAD_PROUDCTS } from '../../../redux/actions/actionsTypes';
import PropTypes from 'prop-types';

export function ProductList({ products, actions, categorySelected }) {
  const [productsFiltered, setProductFiltered] = useState([]);
  useEffect(() => {
    if (products.length === 0) {
      actions.loadProducts();
    }
    if (categorySelected) {
      setProductFiltered(
        products.filter(({ categories }) => categories.includes(categorySelected))
      );
    } else {
      setProductFiltered(products);
    }


  }, [categorySelected, products, actions]);

  return (<article >
    Showing: <b>{productsFiltered.length}</b> products
    {productsFiltered.length !== products.length && <span className="hidden-products">
      - hidden: <b>{products.length - productsFiltered.length} </b>
    </span>}
    {productsFiltered.map(product => {
      return <CardProduct key={product.id} product={product} />
    })}

  </article>

  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  categorySelected: PropTypes.string
}

function mapStateProps({ products, categorySelected }) {
  return {
    products,
    categorySelected
  };
}

function mapDispacthProps(dispacth) {
  return {
    actions: {
      loadProducts: bindActionCreators(() => ({ type: LOAD_PROUDCTS }), dispacth),
    }
  };
}

export default connect(mapStateProps, mapDispacthProps)(ProductList);
