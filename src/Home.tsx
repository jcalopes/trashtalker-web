import React, { useEffect, useState } from 'react';
import { getRoutes } from './api/RoutesService';
import { Route } from './model/Route';


function Home() {
    const [routes, setRoutes] = useState<Route[]>();

    useEffect(()=>{
        getRoutes().then(routesList => setRoutes(routesList));
    },[]);

    return (
        <div>
            <>
            {routes?.map((route,index) => (<span key={`route-${index}`}>{route.name}</span>))}
            </>
        </div>
    );
}

export default Home;
