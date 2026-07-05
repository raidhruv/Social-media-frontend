import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

import RegisterPage from "../features/auth/pages/RegisterPage";
import LoginPage from "../features/auth/pages/LoginPage";

const routes = [
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/register",
        element: (
            <AuthLayout>
                <RegisterPage />
            </AuthLayout>
        ),
    },
    {
        path: "/login",
        element: (
            <AuthLayout>
                <LoginPage />
            </AuthLayout>
        ),
    },
];

export default routes;