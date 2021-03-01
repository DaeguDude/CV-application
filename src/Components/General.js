import React from 'react';
import FormItem from './Form';

class General extends React.Component {
  render() {
    return (
      <section class="form">
        <div class="container">
          <div class="general-info">
            <header>
              <h2 class="general-info__title">Personal Details</h2>
            </header>

            <hr />
            <FormItem label="First name" />
            <FormItem label="Last name" type="text" />

            <div class="form__item flex-row">
              <div class="flex-col full-width">
                <label class="form__label">Email address</label>
                <input class="form__input" type="text" />
              </div>
              <div class="flex-col full-width flex__margin_l20">
                <label class="form__label">Phone number</label>
                <input class="form__input" type="text" />
              </div>
            </div>
            <FormItem label="Address" />

            <div class="form__item flex-row">
              <div class="flex-col full-width">
                <label class="form__label">Zip code</label>
                <input class="form__input" type="text" />
              </div>
              <div class="flex-col full-width flex__margin_l20">
                <label class="form__label">City/Town</label>
                <input class="form__input" type="text" />
              </div>
            </div>
          </div>

          <footer>
            <button class="next-step-btn">Next step</button>
          </footer>
        </div>
      </section>
    );
  }
}

export default General;
