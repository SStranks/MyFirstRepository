import React, { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    try {
      const getData = await fetch('https://api.adviceslip.com/advice');
      const data = await getData.json();
      const jsonData = {
        id: data.slip.id,
        quote: data.slip.advice,
      };
      setAdvice(jsonData);
    } catch {
      throw new Error('Trouble reaching AdviceAPI');
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const clickHandler = () => {
    fetchAdvice();
  };

  return <Card title={advice.id} quote={advice.quote} click={clickHandler} />;
}

export default App;
