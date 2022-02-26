import React, { useEffect, useRef } from 'react';
import Card from './Card';
import updateGround from './ground';

function App() {
  // const [state, setState] = useState(duration);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      updateGround(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const duration = [
    { period: 'days', time: '08' },
    { period: 'hours', time: '23' },
    { period: 'minutes', time: '55' },
    { period: 'seconds', time: '41' },
  ];

  const time = duration.map((item) => (
    <Card key={item.period} period={item.period} time={item.time} />
  ));

  return (
    <>
      <h2>We&apos;re launching soon</h2>
      <div>
        <div className="counter">{time}</div>
      </div>
      <div className="social_media">
        <img
          className="facebook"
          src="%PUBLIC_URL%/assets/icon-facebook.svg"
          alt="facebook icon"
        />
        <img
          className="pinterest"
          src="%PUBLIC_URL%/assets/icon-pinterest.svg"
          alt="pinterest icon"
        />
        <img
          className="instagram"
          src="%PUBLIC_URL%/assets/icon-instagram.svg"
          alt="instagram icon"
        />
      </div>
      <div className="bg-mountains">
        <img
          className="moutains-1"
          src="%PUBLIC_URL%/assets/patterns-hills.svg"
          alt=""
        />
        <img
          className="moutains-2"
          src="%PUBLIC_URL%/assets/patterns-hills.svg"
          alt=""
        />
      </div>
      <div className="bg-sky">
        <img
          className="stars-1"
          src="%PUBLIC_URL%/assets/bg-stars.svg"
          alt=""
        />
        <img
          className="stars-2"
          src="%PUBLIC_URL%/assets/bg-stars.svg"
          alt=""
        />
      </div>
    </>
  );
}

export default App;
