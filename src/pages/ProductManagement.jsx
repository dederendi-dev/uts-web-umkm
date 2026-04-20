function ProductManagement() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        padding: "40px 5%",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Manajemen Produk</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Kelola data produk dan stok CV Hasna
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Cari produk..."
          style={{
            padding: "14px 16px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "300px",
            fontSize: "15px",
          }}
        />

        <button
          style={{
            padding: "14px 24px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          + Tambah Produk
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          overflowX: "auto",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kopi Susu Premium</td>
              <td>Minuman</td>
              <td>Rp 18.000</td>
              <td>100</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>Hapus</button>
              </td>
            </tr>
            <tr>
              <td>Snack Box</td>
              <td>Makanan</td>
              <td>Rp 25.000</td>
              <td>50</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>Hapus</button>
              </td>
            </tr>
            <tr>
              <td>Catering Box</td>
              <td>Makanan</td>
              <td>Rp 35.000</td>
              <td>30</td>
              <td>Low Stock</td>
              <td>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductManagement;