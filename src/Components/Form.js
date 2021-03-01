import React from 'react';

function FormItem(props) {
  return (
    <div className="form__item flex-col">
      <label className="form__label">{props.label}</label>
      <input className="form__input" type={props.type} />
    </div>
  );
}

export default FormItem;
