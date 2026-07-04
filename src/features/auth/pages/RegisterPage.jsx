import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const styles = {
        page: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#0F172A",
            padding: "32px",
        },
        card: {
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "#1E293B",
            borderRadius: "16px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
        },
        title: {
            color: "#FFFFFF",
            fontSize: "32px",
            fontWeight: "700",
            textAlign: "center",
        },
        subtitle: {
            color: "#94A3B8",
            textAlign: "center",
            fontSize: "15px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "18px",
        },
        input: {
            width: "100%",
            padding: "14px 16px",
            borderRadius: "10px",
            border: "1px solid #334155",
            backgroundColor: "#0F172A",
            color: "#FFFFFF",
            fontSize: "15px",
            outline: "none",
        },
        button: {
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#7C3AED",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
        },
        message: {
            color: "#22C55E",
            textAlign: "center",
        },
        error: {
            color: "#EF4444",
            textAlign: "center",
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

        setError("");
        setSuccess("");

        if (form.password !== form.confirm_password) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const { confirm_password, ...payload } = form;

            const response = await register(payload);

            setSuccess(response.message);

            setTimeout(() => {
                navigate("/login", {
                    state: {
                        message: "Registration successful. Please verify your email."
                    }
                });
            }, 1500);

        } catch (err) {
            setError(
                err.response?.data?.detail || "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div>
                    <h1 style={styles.title}>Create Account</h1>
                    <p style={styles.subtitle}>
                        Join the SocialMedia platform.
                    </p>
                </div>

                {success && <p style={styles.message}>{success}</p>}
                {error && <p style={styles.error}>{error}</p>}

                <form style={styles.form} onSubmit={handleSubmit}>

                    <input
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        style={styles.input}
                    />

                    <input
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        style={styles.input}
                    />

                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        style={styles.input}
                    />

                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        style={styles.input}
                    />

                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        style={styles.input}
                    />

                    <input
                        name="confirm_password"
                        type="password"
                        value={form.confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.button}
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default RegisterPage;