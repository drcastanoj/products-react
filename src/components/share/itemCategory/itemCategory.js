import React from 'react';
import { ListItem, Avatar } from 'react-md';
import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import './itemCategory.scss';
function ItemCategory({ icon, name, isSelected, onClick }) {
  const className = isSelected ? 'item-category__content item-category__content--active' : 'item-category__content';

  const categoryIsSelected= () => {
    onClick(name);
  }

  return (
    <div className='item-category'>
      <ListItem className={className}
        leftAvatar={<Avatar icon={<Icon icon={icon} />} />}
        primaryText={name}
        onClick={categoryIsSelected}
      />
    </div>
  )
}

ItemCategory.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default ItemCategory;
