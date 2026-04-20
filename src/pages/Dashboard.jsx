function Dashboard() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        padding: "40px 5%",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Dashboard Admin</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Ringkasan operasional dan performa bisnis CV Hasna
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Total Produk</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>12</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Total Pesanan</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>45</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Order Pending</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>8</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Stok Menipis</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>3</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Aktivitas Terbaru</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>Pesanan baru dari Budi — Kopi Susu Premium</li>
          <li>Produk Snack Box berhasil diperbarui</li>
          <li>Order ORD-002 status diubah menjadi Processed</li>
          <li>Admin menambahkan produk baru: Catering Box</li>
        </ul>
      </div>
    </section>
  );
}

export default Dashboard;