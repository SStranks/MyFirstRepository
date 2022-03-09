import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const countriesData = [];
  const getCountries = async () => {
    try {
      const getData = await fetch('https://restcountries.com/v2/all');
      const parseData = await getData.json();
      countriesData.push(...parseData);
      localStorage.setItem('countries', JSON.stringify(countriesData));
    } catch (err) {
      console.log('Error retreiving data: ', err);
    }
  };

  useEffect(() => {
    const getData = localStorage.getItem('countries');
    return getData ? countriesData.push(JSON.parse(getData)) : getCountries();
  }, []);

  return (
    <>
      <Header />
      {/* <Main /> */}
    </>
  );
}

export default App;
