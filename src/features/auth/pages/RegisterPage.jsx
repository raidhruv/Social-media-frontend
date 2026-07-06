import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
            background: "radial-gradient(circle at 20% 20%, #1e1b4b 0%, #0F172A 45%, #020617 100%)",
            padding: "32px",
        },
        card: {
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "rgba(30, 41, 59, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(148, 163, 184, 0.15)",
            borderRadius: "20px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        },
        title: {
            color: "#FFFFFF",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            letterSpacing: "-0.02em",
            margin: 0,
        },
        subtitle: {
            color: "#94A3B8",
            textAlign: "center",
            fontSize: "14px",
            marginTop: "6px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        },
        row: {
            display: "flex",
            gap: "12px",
        },
        inputWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flex: 1,
        },
        label: {
            color: "#CBD5E1",
            fontSize: "13px",
            fontWeight: "500",
        },
        input: {
            width: "100%",
            padding: "13px 16px",
            borderRadius: "10px",
            border: "1px solid #334155",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            color: "#FFFFFF",
            fontSize: "15px",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        },
        button: {
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "6px",
            boxShadow: "0 8px 20px -6px rgba(124, 58, 237, 0.6)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
        },
        message: {
            color: "#22C55E",
            textAlign: "center",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "14px",
            margin: 0,
        },
        error: {
            color: "#EF4444",
            textAlign: "center",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "14px",
            margin: 0,
        },
        dividerContainer: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "8px",
            marginBottom: "4px",
        },

        dividerLine: {
            flex: 1,
            height: "1px",
            backgroundColor: "rgba(148, 163, 184, 0.2)",
        },

        dividerText: {
            color: "#64748B",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
        },

        footer: {
            textAlign: "center",
            color: "#94A3B8",
            fontSize: "14px",
            lineHeight: "22px",
        },

        link: {
            color: "#8B5CF6",
            textDecoration: "none",
            fontWeight: "700",
            transition: "all .2s ease",
        },
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = "#7C3AED";
        e.target.style.boxShadow = "0 0 0 3px rgba(124, 58, 237, 0.25)";
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = "#334155";
        e.target.style.boxShadow = "none";
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

                    <div style={styles.row}>
                        <div style={styles.inputWrapper}>
                            <label style={styles.label}>First Name</label>
                            <input
                                name="first_name"
                                value={form.first_name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="First Name"
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.inputWrapper}>
                            <label style={styles.label}>Last Name</label>
                            <input
                                name="last_name"
                                value={form.last_name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Last Name"
                                style={styles.input}
                            />
                        </div>
                    </div>

                    <div style={styles.inputWrapper}>
                        <label style={styles.label}>Username</label>
                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Username"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <label style={styles.label}>Email</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="example@email.com"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <label style={styles.label}>Password</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="••••••••"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <label style={styles.label}>Confirm Password</label>
                        <input
                            name="confirm_password"
                            type="password"
                            value={form.confirm_password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="••••••••"
                            style={styles.input}
                        />
                    </div>

                    <button
                        type="submit"
                        style={styles.button}
                        disabled={loading}
                        onMouseEnter={(e) => {
                            if (!loading) e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                        }}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                    
                    <div style={styles.dividerContainer}>
                        <div style={styles.dividerLine} />
                        <span style={styles.dividerText}>or</span>
                        <div style={styles.dividerLine} />
                    </div>

                    <div style={styles.footer}>
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            style={styles.link}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#A78BFA";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#8B5CF6";
                            }}
                        >
                            Sign In
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default RegisterPage;