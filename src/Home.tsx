import React, {useEffect, useState} from 'react';
import {Measurement} from './model/Measurement';


function Home() {
   const [measurements, setMeasurements] = useState<Measurement[]>([]);

   useEffect(() => {
      const sse = new EventSource('measurements/stream', {withCredentials: true});

      sse.addEventListener('open', () => {
         console.log('SSE connection established.');
      });

      sse.addEventListener('measure', (e) => {
         const measure: Measurement = JSON.parse(e.data);
         setMeasurements((measurements) => [...measurements, measure])
      });

      sse.addEventListener('error', (e) => {
         console.error('Error: ', e);
      });

      return () => {
         sse.close();
      };
   }, []);

   return (
      <div>
         {measurements?.map((route, index) => (<p key={`route-${index}`}>{route.distance}</p>))}
      </div>
   );
}

export default Home;
