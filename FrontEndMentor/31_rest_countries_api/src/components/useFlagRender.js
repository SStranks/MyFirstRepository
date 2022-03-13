import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFlagRender(countries, region, query, setCountryIndex) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
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

      const flagOutput = flagData.map((promise) => {
        return promise.status === 'fulfilled'
          ? amendSVG(promise.value.data)
          : '/assets/Pirate_Flag.png';
      });

      setOutput((prev) => {
        return [...prev, ...flagOutput];
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
