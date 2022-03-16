import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFlagRender from './useFlagRender';
import Modal from './Modal';
import Grid from './Grid';
import Search from './Search';
import Filter from './Filter';

const Main = (props) => {
  const { countriesList, alphaList } = props;
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [countryIndex, setCountryIndex] = useState([0, 8]);
  const [modal, setModal] = useState(false);
  const [countrySelect, setCountrySelect] = useState();

  const regionFilter = useMemo(
    () =>
      countriesList.filter((country) => {
        if (activeRegion === 'all') return country;
        if (
          activeRegion === 'Polar' &&
          (country.region === 'Polar' ||
            country.region === 'Antarctic' ||
            country.region === 'Antarctic Ocean')
        )
          return country;
        return activeRegion === country.region ? country : false;
      }),
    [activeRegion, countriesList]
  );

  const searchFilter = (() => {
    if (searchQuery === '') return regionFilter;
    const regex = new RegExp(`^${searchQuery}`, 'i');
    return regionFilter.filter((country) =>
      regex.test(country.name) ? country : false
    );
  })();

  const currentSlice = useMemo(() => {
    return searchFilter.slice(countryIndex[0], countryIndex[1]);
  }, [countryIndex, regionFilter, searchQuery, countrySelect]);

  const { output, loading } = useFlagRender(
    currentSlice,
    activeRegion,
    searchQuery,
    countryIndex,
    modal
  );

  // console.log(searchFilter, currentSlice, output);
  // let modalOutput;
  // if (modal && output.length === 1) {
  //   console.log('HERE')[modalOutput] = output;
  // }
  // console.log(modal, output.length);
  // console.log(modalOutput, output[0]);

  const modalBorderCountryBtn = (borderCountry) => {
    // setActiveRegion('all');
    // setSearchQuery(borderCountry);
    // setCountryIndex([0, 1]);
    const getBorderCountryObject = countriesList.find(
      (country) => country.name === borderCountry
    );
    setCountrySelect(getBorderCountryObject);
  };

  return (
    <>
      {modal && (
        <Modal
          country={countrySelect}
          alphaList={alphaList}
          modalCountry={modalBorderCountryBtn}
          setModal={setModal}
          setActiveRegion={setActiveRegion}
          setSearchQuery={setSearchQuery}
          setCountryIndex={setCountryIndex}
        />
      )}
      <main>
        <div className="options-panel">
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setCountryIndex={setCountryIndex}
          />
          <Filter
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
            setCountryIndex={setCountryIndex}
          />
        </div>
        <Grid
          filteredCountries={output}
          countryIndex={countryIndex}
          setCountryIndex={setCountryIndex}
          setCountrySelect={setCountrySelect}
          setModal={setModal}
          loading={loading}
          modal={modal}
        />
      </main>
    </>
  );
};

Main.propTypes = {
  countriesList: PropTypes.arrayOf(PropTypes.shape({})),
  alphaList: PropTypes.shape({}),
};

Main.defaultProps = {
  countriesList: null,
  alphaList: null,
};

export default Main;
