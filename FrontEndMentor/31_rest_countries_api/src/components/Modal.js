import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  const { country, alphaList, setModal, modalCountry } = props;

  const borderCountries = country.borders.map((countryAlpha3Code, i) => {
    const borderName = alphaList[countryAlpha3Code];
    return (
      <button
        type="button"
        aria-label={`border country ${i + 1}`}
        key={borderName}
        onClick={() => modalCountry(borderName)}
      >
        <span className="hover-border-btn">{borderName}</span>
        <span>{borderName}</span>
      </button>
    );
  });

  return (
    <div className="modal">
      <button
        type="button"
        aria-label="go back to main"
        onClick={() => setModal(false)}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="faArrowLeft" />
        <span>Back</span>
      </button>
      <div className="content">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(country.flag)}`}
          alt=""
        />
        <div className="country-info">
          <h2>{country.name}</h2>
          <div className="grid-info">
            <p>
              Native Name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
            <p>
              Top Level Domain: <span>{country.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies:{' '}
              <span>
                {country.currencies.map((currency) => currency.name).join(', ')}
              </span>
            </p>
            <p>
              Languages:{' '}
              <span>
                {country.languages.map((lang) => lang.name).join(', ')}
              </span>
            </p>
          </div>
          <div className="border-countries">
            <p>Border Countries: </p>
            <div className="border-grid">{borderCountries}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  // country: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  country: PropTypes.objectOf(PropTypes.string),
  alphaList: PropTypes.shape({}),
  setModal: PropTypes.func,
  modalCountry: PropTypes.func,
};

Modal.defaultProps = {
  country: null,
  alphaList: null,
  setModal: null,
  modalCountry: null,
};

export default Modal;
