import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { country, alphaList, setModal } = props;

  // console.log(country.borders);

  const borderCountries = country.borders.map((countryAlpha3Code, i) => {
    const borderName = alphaList[countryAlpha3Code];
    return (
      <button
        type="button"
        aria-label={`border country ${i + 1}`}
        key={borderName}
      >
        {borderName}
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
        Back
      </button>
      <div className="content">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(country.flag)}`}
          alt=""
        />
        <div>
          <h2>{country.name}</h2>
          <div className="grid">
            <p>
              Native Name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population}</span>
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
  country: PropTypes.objectOf(PropTypes.string),
  alphaList: PropTypes.shape({}),
  setModal: PropTypes.func,
};

Modal.defaultProps = {
  country: null,
  alphaList: null,
  setModal: null,
};

export default Modal;
