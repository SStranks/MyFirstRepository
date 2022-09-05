import React from 'react';
import Header from '../components/header/Header';
import Advert from '../components/advert/Advert';

// Temporary Data
import jsonData from '../data.json';

function Job() {
  // console.log(jsonData[0]);
  return (
    <>
      <Header />
      <Advert
        logo={jsonData[0].logo}
        logoBackground={jsonData[0].logoBackground}
        company={jsonData[0].company}
        website={jsonData[0].website}
        postedAt={jsonData[0].postedAt}
        contract={jsonData[0].contract}
        position={jsonData[0].position}
        location={jsonData[0].location}
        description={jsonData[0].description}
        requirements={jsonData[0].requirements}
        role={jsonData[0].role}
      />
    </>
  );
}

export default Job;
