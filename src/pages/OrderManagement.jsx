function OrderManagement() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        padding: "40px 5%",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Manajemen Pesanan</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Kelola semua pesanan customer CV Hasna
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
          placeholder="Cari pesanan..."
          style={{
            padding: "14px 16px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "300px",
            fontSize: "15px",
          }}
        />

        <select
          style={{
            padding: "14px 16px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        >
          <option>Semua Status</option>
          <option>Pending</option>
          <option>Processed</option>
          <option>Shipped</option>
          <option>Completed</option>
        </select>
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
              <th>Kode Order</th>
              <th>Nama Customer</th>
              <th>Produk</th>
              <th>Status</th>
              <th>Total</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ORD-001</td>
              <td>Budi</td>
              <td>Kopi Susu Premium</td>
              <td>Pending</td>
              <td>Rp 180.000</td>
              <td>
                <button>Update</button>
              </td>
            </tr>
            <tr>
              <td>ORD-002</td>
              <td>Siti</td>
              <td>Snack Box</td>
              <td>Processed</td>
              <td>Rp 250.000</td>
              <td>
                <button>Update</button>
              </td>
            </tr>
            <tr>
              <td>ORD-003</td>
              <td>Andi</td>
              <td>Catering Box</td>
              <td>Shipped</td>
              <td>Rp 700.000</td>
              <td>
                <button>Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderManagement;