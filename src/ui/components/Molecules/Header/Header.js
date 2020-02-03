import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../Atoms/Title';
import './Header.css';

function Header({ className }) {
  return (
    <header className={className}>
      <Title className="Title">
        Cocktail <strong>Recipes</strong>
      </Title>
    </header>
  );
}

export default Header;

Header.propTypes = {
  className: PropTypes.string
};
