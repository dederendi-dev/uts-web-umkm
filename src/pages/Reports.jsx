function Reports() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        padding: "40px 5%",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Laporan Penjualan</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Ringkasan performa penjualan dan operasional CV Hasna
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
          <h3>Total Penjualan Bulan Ini</h3>
          <p style={{ fontSize: "26px", fontWeight: "700" }}>
            Rp 12.500.000
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Produk Terlaris</h3>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>
            Kopi Susu Premium
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Pesanan Selesai</h3>
          <p style={{ fontSize: "26px", fontWeight: "700" }}>
            37 Order
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          overflowX: "auto",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Ringkasan Laporan Bulanan</h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Total Order</th>
              <th>Total Pendapatan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Januari</td>
              <td>32</td>
              <td>Rp 8.200.000</td>
              <td>Stabil</td>
            </tr>
            <tr>
              <td>Februari</td>
              <td>45</td>
              <td>Rp 12.500.000</td>
              <td>Meningkat</td>
            </tr>
            <tr>
              <td>Maret</td>
              <td>51</td>
              <td>Rp 15.300.000</td>
              <td>Sangat Baik</td>
            </tr>
          </tbody>
        </table>
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
        <h2 style={{ marginBottom: "20px" }}>Insight Bisnis</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>Penjualan meningkat 18% dibanding bulan sebelumnya</li>
          <li>Produk paling banyak dipesan adalah Kopi Susu Premium</li>
          <li>Stok Catering Box perlu segera ditambah</li>
          <li>Pesanan corporate meningkat pada minggu terakhir</li>
        </ul>
      </div>
    </section>
  );
}

export default Reports;