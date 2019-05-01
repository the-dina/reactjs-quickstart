import {decorate, observable} from 'mobx';

class AuthService {

    authInfo = null;

    login = () => {
        this.authInfo = {
            fullName: 'Adele Mildred Koss',
            givenName: 'Adele',
            permissions: ['admin']
        }
    };

    logout = () => {
        this.authInfo = null;
    }
}

decorate(AuthService, {
    "authInfo": observable
});

const instance = new AuthService();
export default instance;












