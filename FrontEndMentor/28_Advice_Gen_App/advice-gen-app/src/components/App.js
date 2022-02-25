import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from './Card';

function App() {
  const [advice, setAdvice] = useState({ id: 0, quote: '' });
  const loading = useRef(true);

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
    gsap.from('.quote', {
      opacity: 0,
      duration: 1.25,
      ease: 'power1.in',
      onComplete: () => {
        loading.current = false;
      },
    });
  }, []);

  const clickHandler = async () => {
    if (loading.current === true) return;
    loading.current = true;
    const cardHeight = document.querySelector('.card').offsetHeight;
    gsap.from('.dice', { rotate: -360, duration: 2, ease: 'power4.out' });
    await gsap.to('.quote', { opacity: 0, duration: 0.5, ease: 'power1.in' });
    await fetchAdvice();
    gsap.to('.quote', {
      opacity: 1,
      duration: 1.5,
      ease: 'power1.in',
      onComplete: () => {
        loading.current = false;
      },
    });
    gsap.set('.card', { height: 'auto' });
    gsap.from('.card', { height: `${cardHeight}px`, duration: 1 });
  };

  return <Card title={advice.id} quote={advice.quote} click={clickHandler} />;
}

export default App;
