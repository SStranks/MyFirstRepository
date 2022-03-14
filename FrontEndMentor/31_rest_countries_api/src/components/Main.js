import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFlagRender from './useFlagRender';
import Grid from './Grid';
import Search from './Search';
import Filter from './Filter';

const Main = (props) => {
  const { countriesList } = props;
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [countryIndex, setCountryIndex] = useState([0, 8]);

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
  }, [countryIndex, regionFilter, searchQuery]);

  const { output, loading } = useFlagRender(
    currentSlice,
    activeRegion,
    searchQuery,
    countryIndex
  );

  return (
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
        loading={loading}
      />
    </main>
  );
};

Main.propTypes = {
  countriesList: PropTypes.arrayOf(PropTypes.shape({})),
};

Main.defaultProps = {
  countriesList: null,
};

export default Main;
