import axios from 'axios';
import { Measurement } from '../model/Measurement';

async function getRoutes(): Promise<Measurement[]> {
   try {
      const { data, status } = await axios.get<Measurement[]>('/container', {
         headers: {
            Accept: 'application/json',
         },
      });
      console.log(JSON.stringify(data, null, 4));
      console.log('response status is: ', status);

      return data;
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log('error message: ', error.message);
      } else {
         console.log('unexpected error: ', error);
      }
      return [];
   }
}

export { getRoutes };
