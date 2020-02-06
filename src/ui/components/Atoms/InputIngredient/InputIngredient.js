import React, { useState, useContext } from 'react';
import { ContextCocktails } from '../../contexts/ContextCocktails';
import PropTypes from 'prop-types';
import './InputIngredient.css';

const InputIngredient = ({ onChange }) => {
  const { ingredientsFiltered } = useContext(ContextCocktails);

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
        placeholder={ingredientsFiltered.ingredient}
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
