

function AdminLogin() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fa",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Login Admin</h1>
        <p style={{ marginBottom: "30px", color: "#666" }}>
          Masuk ke dashboard CV Hasna
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            type="email"
            placeholder="Email Admin"
            style={{
              padding: "14px 16px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "14px 16px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;