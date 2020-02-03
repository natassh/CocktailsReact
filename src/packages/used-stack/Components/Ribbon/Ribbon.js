import React from 'react';
import PropTypes from 'prop-types';

import './Ribbon.css';

const Ribbon = ({ onChange }) => {
  const handleClick = data => {
    onChange(true);
  };

  return (
    <aside className="stack" onClick={handleClick}>
      <h2 className="stack__title">Project created by Natacha</h2>
    </aside>
  );
};

export default Ribbon;

Ribbon.propTypes = {
  onChange: PropTypes.func
};
