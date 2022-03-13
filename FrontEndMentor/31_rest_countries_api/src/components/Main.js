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

  // console.log('main', countriesList);
  // console.log('Africa: ', regionFilter.length);

  // const searchFilter = (() => {
  //   if (searchQuery === '') return regionFilter;
  //   const regex = new RegExp(`^${searchQuery}`, 'i');
  //   return regionFilter.filter((country) =>
  //     regex.test(country.name) ? country : false
  //   );
  // })();

  // console.log(regionFilter);
  // console.log(searchFilter);

  const currentSlice = useMemo(() => {
    // console.log('current slice');
    return regionFilter.slice(countryIndex[0], countryIndex[1]);
  }, [countryIndex, regionFilter]);

  // console.log(currentSlice);

  const { output, loading } = useFlagRender(
    currentSlice,
    activeRegion,
    searchQuery
  );

  const countries = currentSlice.forEach((country, i) => {
    return { ...country, flag: output[i] };
  });

  return (
    <main>
      <div className="options-panel">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      </div>
      <Grid
        filteredCountries={countries}
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
