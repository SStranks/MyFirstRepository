import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import IconError from '#Svg/desktop/icon-error.svg';
import SvgAustralia from '#Svg/desktop/illustration-australia.svg';
import SvgCanada from '#Svg/desktop/illustration-canada.svg';
import SvgUnitedKingdom from '#Svg/desktop/illustration-united-kingdom.svg';

import Location from '#Components/location/Location';
import styles from './_Contact.module.scss';

function Contact(): JSX.Element {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.header__form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(
      ':invalid'
    ) as HTMLInputElement;
    firstInvalidInput?.focus();

    // Add error validation msg to invalid fields
    const invalidInputs = formElement.querySelectorAll(':invalid');
    if (invalidInputs) {
      invalidInputs.forEach((el) => {
        const textElem = el.nextSibling?.childNodes[0] as Element;
        textElem.textContent = (el as HTMLInputElement).validationMessage;
      });
    }

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      // Faux Submission
      console.log(Object.fromEntries(dataObject.entries()));
    }
  };

  return (
    <DefaultLayout>
      <Nav />
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__info}>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
        </div>
        <form
          className={styles.header__form}
          aria-label="form"
          onSubmit={onSubmit}
          noValidate>
          <div className={styles.header__input}>
            <input type="text" placeholder="Name" required pattern="/\p{L}/u" />
            <div className={styles.header__input__error}>
              <p />
              <img src={IconError} alt="" />
            </div>
          </div>
          <div className={styles.header__input}>
            <input type="email" placeholder="Email Address" required />
            <div className={styles.header__input__error}>
              <p />
              <img src={IconError} alt="" />
            </div>
          </div>
          <div className={styles.header__input}>
            <input type="tel" placeholder="Phone" required pattern="[0-9]" />
            <div className={styles.header__input__error}>
              <p />
              <img src={IconError} alt="" />
            </div>
          </div>
          <div className={styles.header__input}>
            <textarea rows={20} placeholder="Your Message" required />
            <div className={styles.header__input__error}>
              <p />
              <img src={IconError} alt="" />
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </header>
      <div className={styles.locations}>
        <Location title="canada" illustration={SvgCanada} bgRotation="0deg" />
        <Location
          title="australia"
          illustration={SvgAustralia}
          bgRotation="270deg"
        />
        <Location
          title="united kingdom"
          illustration={SvgUnitedKingdom}
          bgRotation="90deg"
        />
      </div>
    </DefaultLayout>
  );
}

export default Contact;
