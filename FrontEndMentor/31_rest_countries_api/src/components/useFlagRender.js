import { useEffect, useState } from 'react';
import axios from 'axios';

function useFlagRender(countries, region, query, countryIndex) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput([]);
  }, [region, query]);

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

      const flagOutput = flagData.map((promise) => {
        return promise.status === 'fulfilled'
          ? amendSVG(promise.value.data)
          : '/assets/Pirate_Flag.png';
      });

      const mergeFlagToSlice = countries.map((country, i) => {
        return { ...country, flag: flagOutput[i] };
      });

      setOutput((prev) => {
        return [...prev, ...mergeFlagToSlice];
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }, [countryIndex, region, query, countries]);
  return { loading, error, output };
}

export default useFlagRender;
