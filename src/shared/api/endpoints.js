const ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
        REFRESH: "/auth/refresh",
        ME: "/auth/me",
        VERIFY_EMAIL: "/auth/verify-email",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
    },

    USERS: {
        PROFILE: "/users/profile",
        SEARCH: "/users/search",
        FOLLOW: "/users/follow",
    },

    POSTS: {
        BASE: "/posts",
    },
};

export default ENDPOINTS;