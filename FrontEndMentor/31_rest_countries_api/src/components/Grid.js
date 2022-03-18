import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Grid = (props) => {
  const {
    filteredCountries,
    stateFilter,
    setStateFilter,
    setCountrySelect,
    setModal,
    loading,
    modal,
  } = props;
  const observer = useRef();

  const lastCardRef = useCallback(
    (node) => {
      if (loading || modal) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          filteredCountries.length >= stateFilter.countryIndex[1]
        ) {
          setStateFilter((prev) => ({
            ...prev,
            countryIndex: [0, prev.countryIndex[1] + 4],
          }));
          // setStateFilter((prev) => ({
          //   ...prev,
          //   countryIndex: [prev.countryIndex[1], prev.countryIndex[1] + 4],
          // }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, filteredCountries]
  );

  // console.log(filteredCountries);

  const countryCards = filteredCountries.map((country, i) => {
    return (
      <Card
        key={country.name}
        ref={filteredCountries.length === i + 1 ? lastCardRef : null}
        country={country}
        setCountrySelect={setCountrySelect}
        setModal={setModal}
      />
    );
  });

  return <div className="grid">{countryCards}</div>;
};

Grid.propTypes = {
  filteredCountries: PropTypes.arrayOf(PropTypes.shape({})),
  stateFilter: PropTypes.shape(),
  setStateFilter: PropTypes.func,
  setCountrySelect: PropTypes.func,
  setModal: PropTypes.func,
  loading: PropTypes.bool,
  modal: PropTypes.bool,
};
Grid.defaultProps = {
  filteredCountries: [],
  stateFilter: null,
  setStateFilter: null,
  setCountrySelect: null,
  setModal: null,
  loading: false,
  modal: false,
};

export default Grid;
