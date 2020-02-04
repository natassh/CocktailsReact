import React, { useState, useContext } from 'react';
import { ContextListRecipes } from '../../contexts/ContextListRecipes';
import PropTypes from 'prop-types';
import './InputIngredient.css';

const InputIngredient = ({ onChange }) => {
  const { ingredientsFiltered } = useContext(ContextListRecipes);

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
