function RegisterPage() {
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

                <form style={styles.form}>
                    <input
                        type="text"
                        placeholder="First Name"
                        style={styles.input}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        style={styles.input}
                    />

                    <input
                        type="text"
                        placeholder="Username"
                        style={styles.input}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;