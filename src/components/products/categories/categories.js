import React from 'react';
import ItemCategory from '../../share/itemCategory/itemCategory';
import { List, Subheader, Divider } from 'react-md';
import './categories.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { categoryIsSelected } from '../../../redux/actions/categorySelectedActions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Categories extends React.Component {

    categoryIsSelected = (categorySelected) => {
        const category = categorySelected !== 'All' ? categorySelected : '';
        this.props.actions.categoryIsSelected(category);
        this.setState({ categorySelected: category })
    }

    isCategorySelected(category){
        if(!this.props.categorySelected && category === 'All'){
            return true;
        }
        return this.props.categorySelected === category;
    }

    render() {
        const baseUrl = this.state && '/products/' + this.state.categorySelected;
        return (
            <section>
                {this.state && <Redirect to={baseUrl} />}
                <List className="md-cell md-paper md-paper--1 categories">
                    <Subheader primaryText="Categories"  key='subheader'/>
                    {this.props.categories &&
                        this.props.categories.map(({ category, icon }, index) =>
                            <section key={index}>
                                <ItemCategory key={category} onClick={this.categoryIsSelected} icon={icon} name={category}
                                isSelected={this.isCategorySelected(category)} />
                                {index === 0 && <Divider key={index} />}
                            </section>
                        )}
                </List>
            </section>
        )
    }
}

Categories.propsTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateProps({ categories, categorySelected }) {
    return {
        categories,
        categorySelected
    };
}

function mapDispacthProps(dispacth) {
    return {
        actions: {
            categoryIsSelected: bindActionCreators(categoryIsSelected, dispacth),
        }
    };
}



export default connect(mapStateProps, mapDispacthProps)(Categories);

