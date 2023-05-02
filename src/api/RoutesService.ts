import axios from 'axios';
import { Route } from '../model/Route';

async function getRoutes(): Promise<Route[]> {
   try {
      const { data, status } = await axios.get<Route[]>('api/routes', {
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
