import { createContext, useContext, useMemo, useState } from "react";

import * as authService from "../features/auth/services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [accessToken, setAccessToken] = useState(null);

    const login = async (credentials) => {

        const response = await authService.login(credentials);

        setAccessToken(response.access_token);

        return response;
    };

    const logout = () => {

        setAccessToken(null);

    };

    const value = useMemo(() => ({
        accessToken,
        isAuthenticated: accessToken !== null,
        login,
        logout,
    }), [accessToken]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used inside AuthProvider."
        );
    }

    return context;
}
