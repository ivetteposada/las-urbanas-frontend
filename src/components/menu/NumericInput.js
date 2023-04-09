import React, { useState } from 'react';

function NumericInput(props) {
  const [quantity, setQuantity] = useState(props.initialValue);

  function handleQuantityChange(event) {
    setQuantity(parseInt(event.target.value));
    if (props.onChange) {
      props.onChange(parseInt(event.target.value));
    }
  }

  return (
    <input
      class="qty" 
      type="number" 
      min={props.min} 
      max={props.max} 
      step={props.step} 
      value={quantity} 
      onChange={handleQuantityChange} 
    />
  );
}

NumericInput.defaultProps = {
  initialValue: 1,
  min: 1,
  max: 5,
  step: 1
};

export {NumericInput};
