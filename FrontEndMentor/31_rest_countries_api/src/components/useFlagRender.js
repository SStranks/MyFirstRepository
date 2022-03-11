import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function useFlagRender(countries, region) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    setOutput([]);
  }, [region]);

  useEffect(async () => {
    setLoading(true);
    setError(false);
    try {
      const promises = countries.map((country) =>
        axios({
          method: 'GET',
          url: country.flag,
          timeout: 2000,
        })
      );
      const flagData = await Promise.allSettled(promises);

      const amendSVG = (svgData) => {
        // Parsing SVG and inserting the 'preserveAspectRatio' attribute
        const svg = new DOMParser().parseFromString(svgData, 'image/svg+xml');
        svg.querySelector('svg').setAttribute('preserveAspectRatio', 'none');
        const newSVG = new XMLSerializer().serializeToString(svg);
        return newSVG;
      };

      const newCards = flagData.map((res, i) => {
        if (res.status === 'fulfilled') {
          const SVG = amendSVG(res.value.data);
          return (
            <Card
              key={countries[i].name}
              flag={`data:image/svg+xml;utf8,${encodeURIComponent(SVG)}`}
              country={countries[i].name}
              population={countries[i].population}
              region={countries[i].region}
              capital={countries[i].capital}
            />
          );
        }
        return (
          <Card
            key={countries[i].name}
            flag="/assets/Pirate_Flag.png"
            country={countries[i].name}
            population={countries[i].population}
            region={countries[i].region}
            capital={countries[i].capital}
          />
        );
      });
      setOutput((prev) => {
        return [...prev, ...newCards];
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }, [countries, region]);
  return { loading, error, output };
}

export default useFlagRender;
