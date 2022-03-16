import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFlagRender from './useFlagRender';
import Modal from './Modal';
import Grid from './Grid';
import Search from './Search';
import Filter from './Filter';

const Main = (props) => {
  const { countriesList, alphaList } = props;
  const [stateFilter, setStateFilter] = useState({
    activeRegion: 'all',
    searchQuery: '',
    countryIndex: [0, 8],
  });
  const [modal, setModal] = useState(false);
  const [countrySelect, setCountrySelect] = useState();

  const regionFilter = useMemo(
    () =>
      countriesList.filter((country) => {
        if (stateFilter.activeRegion === 'all') return country;
        if (
          stateFilter.activeRegion === 'Polar' &&
          (country.region === 'Polar' ||
            country.region === 'Antarctic' ||
            country.region === 'Antarctic Ocean')
        )
          return country;
        return stateFilter.activeRegion === country.region ? country : false;
      }),
    [stateFilter.activeRegion, countriesList]
  );

  const searchFilter = (() => {
    if (stateFilter.searchQuery === '') return regionFilter;
    const regex = new RegExp(`^${stateFilter.searchQuery}`, 'i');
    return regionFilter.filter((country) =>
      regex.test(country.name) ? country : false
    );
  })();

  const currentSlice = useMemo(() => {
    return searchFilter.slice(
      stateFilter.countryIndex[0],
      stateFilter.countryIndex[1]
    );
  }, [
    stateFilter.countryIndex,
    regionFilter,
    stateFilter.searchQuery,
    countrySelect,
  ]);

  const { output, loading } = useFlagRender(
    currentSlice,
    stateFilter.activeRegion,
    stateFilter.searchQuery,
    stateFilter.countryIndex,
    modal
  );

  return (
    <>
      {modal && (
        <Modal
          country={countrySelect}
          countriesList={countriesList}
          alphaList={alphaList}
          setModal={setModal}
          setStateFilter={setStateFilter}
        />
      )}
      <main>
        <div className="options-panel">
          <Search stateFilter={stateFilter} setStateFilter={setStateFilter} />
          <Filter stateFilter={stateFilter} setStateFilter={setStateFilter} />
        </div>
        <Grid
          filteredCountries={output}
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
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
