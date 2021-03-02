import React from 'react';

function FormItem(props) {
  return (
    <div className="form__item flex-col">
      <label className="form__label">{props.label}</label>
      <input className="form__input" type={props.type} />
    </div>
  );
}

function FormItemTwoColumns(props) {
  return (
    <div className="form__item flex-row">
      <div className="flex-col full-width">
        <label className="form__label">{props.firstColLabel}</label>
        <input className="form__input" type="text" />
      </div>
      <div className="flex-col full-width flex__margin_l20">
        <label className="form__label">{props.secondColLabel}</label>
        <input className="form__input" type="text" />
      </div>
    </div>
  );
}

export { FormItem, FormItemTwoColumns };
