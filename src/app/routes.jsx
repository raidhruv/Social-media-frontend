import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

import RegisterPage from "../features/auth/pages/RegisterPage";

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
];

export default routes;