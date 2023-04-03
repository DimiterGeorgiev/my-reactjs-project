import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { authServiceFactory } from "../services/authService";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    const [auth, setAuth] = useLocalStorage('auth', {})

    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            const result = await authService.login(data);
            setAuth(result)
            
            navigate('/podcasts');
            
        } catch (error) {
            console.log('There is a problem');
        }
    }

    const onRegisterSubmit = async (value) => {
        try {
            const result = await authService.register(value);
            setAuth(result);
           
            navigate('/podcasts')
        } catch (error) {
            console.log('There is a problem');
        }
    }

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const contextValues = {
        onLogout,
        onLoginSubmit,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };
    return(
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}