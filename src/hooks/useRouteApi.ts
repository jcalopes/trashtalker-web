import axios from 'axios';
import { Measurement } from '../model/Measurement';
import { useState } from 'react';

const useRouteApi = () => {
    const [routes, setRoutes] = useState([]);

    async function getRoutes(): Promise<Measurement[]> {
        try {
            const { data, status } = await axios.get<Measurement[]>(
                '/container',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );
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

    return { getRoutes };
};

export default useRouteApi;
