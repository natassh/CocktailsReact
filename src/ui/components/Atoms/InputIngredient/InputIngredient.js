import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputIngredient.css';

const InputIngredient = ({ onChange }) => {
  const [valueInput, setvalueInput] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setvalueInput({ valueInput: value });

    onChange(value);
  };

  return (
    <>
      <input
        className="Form__InputIngredient"
        type="text"
        placeholder="Ingredient"
        value={valueInput.state}
        onChange={handleChange}
      />
    </>
  );
};

export default InputIngredient;

InputIngredient.propTypes = {
  onChange: PropTypes.func
};
