import React from 'react';
import Categories from '../categories/categories';
import './productContainer.scss';
import ProductList from '../productList/productList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { categoryIsSelected } from '../../../redux/actions/categorySelectedActions';
import PropTypes from 'prop-types';

export class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.actions.categoryIsSelected(this.props.match.params.category);
    }

    render() {
        return (<article className="product-container container">

            <section className="product-container__categories">
                <Categories />
            </section >
            <section className="product-container__product-list">
                <ProductList />
            </section>
        </article>

        )
    }
}

ProductsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
}

function mapDispacthProps(dispacth) {
    return {
        actions: {
            categoryIsSelected: bindActionCreators(categoryIsSelected, dispacth),
        }
    };
}



export default connect(undefined, mapDispacthProps)(ProductsContainer);


