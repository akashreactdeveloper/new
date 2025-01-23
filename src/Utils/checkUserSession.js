import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { setUserDetails } from '../redux/slice/userSlice';
import store from '../redux/store';

export default function checkUserSession() {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }

    const gatepaxUserSession = Cookies.get('gatepaxUserSession');
    if (gatepaxUserSession) {
        const decodedSession = jwtDecode(gatepaxUserSession);
        console.log(decodedSession);

        // Dispatch decoded session to Redux
        store.dispatch(setUserDetails(decodedSession));
        return decodedSession;
    }

    return null;
}
