import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import useFlagRender from './useFlagRender';

const Modal = (props) => {
  const { country, countriesList, alphaList, setModal, setStateFilter } = props;
  const [countrySelect, setCountrySelect] = useState(country);

  const newCountry = countriesList.find((el) => el.name === countrySelect.name);
  const { loading } = useFlagRender(
    [newCountry],
    'all',
    newCountry.name,
    undefined,
    undefined,
    setCountrySelect
  );

  const modalBorderCountryBtn = (borderCountry) => {
    const getBorderCountryObject = countriesList.find(
      (nation) => nation.name === borderCountry
    );
    setCountrySelect(getBorderCountryObject);
  };

  const borderCountries = countrySelect.borders?.map((countryAlpha3Code, i) => {
    const borderName = alphaList[countryAlpha3Code];
    return (
      <button
        type="button"
        aria-label={`border country ${i + 1}`}
        key={`modal_${borderName}`}
        onClick={() => modalBorderCountryBtn(borderName)}
      >
        {/* <span className="hover-border-btn">{borderName}</span> */}
        <span>{borderName}</span>
      </button>
    );
  });

  const backBtnHandler = () => {
    setModal(false);
    setStateFilter((prev) => ({ ...prev, countryIndex: [0, 8] }));
  };

  return (
    <div className="modal">
      <button
        type="button"
        aria-label="go back to main"
        onClick={backBtnHandler}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="faArrowLeft" />
        <span>Back</span>
      </button>
      <div className="content">
        {loading && <div />}
        {!loading && (
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(
              countrySelect.flag
            )}`}
            alt=""
          />
        )}
        <div className="country-info">
          <h2>{countrySelect.name}</h2>
          <div className="grid-info">
            <p>
              Native Name: <span>{countrySelect.nativeName}</span>
            </p>
            <p>
              Population:{' '}
              <span>{countrySelect.population?.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{countrySelect.region}</span>
            </p>
            <p>
              Sub Region: <span>{countrySelect.subregion}</span>
            </p>
            <p>
              Capital: <span>{countrySelect.capital}</span>
            </p>
            <p>
              Top Level Domain: <span>{countrySelect?.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies:{' '}
              <span>
                {countrySelect.currencies
                  ?.map((currency) => currency.name)
                  .join(', ')}
              </span>
            </p>
            <p>
              Languages:{' '}
              <span>
                {countrySelect.languages?.map((lang) => lang.name).join(', ')}
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
  country: PropTypes.shape(),
  countriesList: PropTypes.arrayOf(PropTypes.shape()),
  alphaList: PropTypes.shape({}),
  setModal: PropTypes.func,
  setStateFilter: PropTypes.func,
};

Modal.defaultProps = {
  country: {},
  countriesList: null,
  alphaList: null,
  setModal: null,
  setStateFilter: null,
};

export default Modal;
