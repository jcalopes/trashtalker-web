import { useEffect, useRef, useState } from 'react';
import Keycloak from 'keycloak-js';

const client = new Keycloak({
    url: 'http://localhost:8087/auth',
    realm: 'trashtalker',
    clientId: 'trashtalker-web',
});

const useAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [isLogin, setLogin] = useState<boolean>(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;
        client
            .init({
                onLoad: 'login-required',
            })
            .then((res) => {
                setLogin(res);
                setToken(client.token);
            });
    }, []);

    return [isLogin, token];
};

export default useAuth;
