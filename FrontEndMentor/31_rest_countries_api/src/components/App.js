import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const getData = await fetch('https://restcountries.com/v2/all');
        const parseData = await getData.json();
        setCountriesData(parseData);
        localStorage.setItem('countries', JSON.stringify(countriesData));
      } catch (err) {
        console.log('Error retreiving data: ', err);
      }
    };
    const getData = localStorage.getItem('countries');
    return getData ? setCountriesData(JSON.parse(getData)) : getCountries();
  }, []);

  return (
    <>
      <Header />
      <Main countriesList={countriesData} />
    </>
  );
}

export default App;
