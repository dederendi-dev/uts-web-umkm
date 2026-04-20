import "./OrderForm.css";

function OrderForm() {
  return (
    <section className="order-form">
      <h2>Form Pemesanan Produk</h2>
      <p>Silakan isi data pemesanan Anda di bawah ini.</p>

      <form>
        <input type="text" placeholder="Nama Lengkap" />
        <input type="text" placeholder="Nomor WhatsApp" />
        <input type="text" placeholder="Alamat Pengiriman" />
        <input type="text" placeholder="Produk yang Dipesan" />
        <input type="number" placeholder="Jumlah Pesanan" />
        <textarea placeholder="Catatan Tambahan" rows="5"></textarea>

        <button type="submit">Kirim Pesanan</button>
      </form>
    </section>
  );
}

export default OrderForm;