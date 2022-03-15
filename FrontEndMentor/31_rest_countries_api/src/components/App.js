import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [alphaList, setAlphaList] = useState({});

  const createAlphaList = (data) => {
    const listObject = {};
    data.forEach((country) => {
      listObject[country.alpha3Code] = country.name;
    });
    setAlphaList(listObject);
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const getData = await fetch('https://restcountries.com/v2/all');
        const parseData = await getData.json();
        createAlphaList(parseData);
        setCountriesData(parseData);
        localStorage.setItem('countries', JSON.stringify(parseData));
      } catch (err) {
        console.log('Error retreiving data: ', err);
      }
    };
    const getData = localStorage.getItem('countries');
    if (getData) {
      const parseData = JSON.parse(getData);
      createAlphaList(parseData);
      setCountriesData(parseData);
    } else {
      getCountries();
    }
  }, []);

  return (
    <>
      <Header />
      <Main countriesList={countriesData} alphaList={alphaList} />
    </>
  );
}

export default App;
