import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Card from './Card';

function useFlagRender(countries, region, query, setCountryIndex) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [output, setOutput] = useState();
  const observer = useRef();

  const lastCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      // TODO:  Need to determine if there are more entries in the filtered collection to load and add check to below:
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // console.log('callback2');
          setCountryIndex((prev) => [prev[1], prev[1] + 4]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, query]
  );

  useEffect(() => {
    // console.log('useeffect clear output');
    setOutput([]);
  }, [region, query]);

  useEffect(async () => {
    // console.log('use effect async');
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
          if (flagData.length === i + 1) {
            return (
              <Card
                key={countries[i].name}
                ref={lastCardRef}
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
  }, [countries, region, query]);
  // console.log('Async', output);
  return { loading, error, output };
}

export default useFlagRender;
