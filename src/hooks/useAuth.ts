import Keycloak from 'keycloak-js';

const _kc = new Keycloak({
    clientId: 'trashtalkerweb',
    url: 'http://localhost:8087/',
    realm: 'trashtalker',
});

export default _kc;
