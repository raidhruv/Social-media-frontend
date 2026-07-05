import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import { Link } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const success = location.state?.message || "";

    const styles = {
        page: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "radial-gradient(circle at 20% 20%, #1e1b4b 0%, #0F172A 45%, #020617 100%)",
            padding: "32px",
        },

        card: {
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "rgba(30,41,59,.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(148,163,184,.15)",
            borderRadius: "20px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
        },

        title: {
            color: "#fff",
            fontSize: "30px",
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
        },

        subtitle: {
            color: "#94A3B8",
            textAlign: "center",
            marginTop: "6px",
        },

        form: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        },

        label: {
            color: "#CBD5E1",
            fontSize: "13px",
        },

        input: {
            width: "100%",
            padding: "13px 16px",
            borderRadius: "10px",
            border: "1px solid #334155",
            backgroundColor: "rgba(15,23,42,.6)",
            color: "#fff",
            boxSizing: "border-box",
            outline: "none",
        },

        button: {
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(135deg,#8B5CF6,#7C3AED)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
        },

        success: {
            color: "#22C55E",
            background: "rgba(34,197,94,.1)",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
        },

        error: {
            color: "#EF4444",
            background: "rgba(239,68,68,.1)",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
        },
        footer: {
            marginTop: "12px",
            textAlign: "center",
            color: "#94A3B8",
            fontSize: "14px",
            fontWeight: "500",
        },
        
        link: {
            color: "#8B5CF6",
            textDecoration: "none",
            fontWeight: "700",
            transition: "color 0.2s ease",
        },
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const response = await login(form);

            console.log(response);

            navigate("/");

        } catch (err) {

            setError(
                err.response?.data?.detail ||
                "Login failed."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>

                <div>

                    <h1 style={styles.title}>Welcome Back</h1>

                    <p style={styles.subtitle}>
                        Sign in to continue.
                    </p>

                </div>

                {success && (
                    <div style={styles.success}>
                        {success}
                    </div>
                )}

                {error && (
                    <div style={styles.error}>
                        {error}
                    </div>
                )}

                <form
                    style={styles.form}
                    onSubmit={handleSubmit}
                >

                    <div>

                        <label style={styles.label}>
                            Email
                        </label>

                        <input
                            style={styles.input}
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div>

                        <label style={styles.label}>
                            Password
                        </label>

                        <input
                            style={styles.input}
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        type="submit"
                        style={styles.button}
                        disabled={loading}
                    >
                        {loading
                            ? "Signing In..."
                            : "Sign In"}
                    </button>

                    <div style={styles.footer}>
                        Don't have an account?
                        <Link
                            to="/register"
                            style={styles.link}
                        >
                            Create Account
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default LoginPage;