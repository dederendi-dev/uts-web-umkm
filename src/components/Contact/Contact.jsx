

// Contact.jsx
// Section Contact untuk menampilkan form dan info kontak CV Hasna

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      {/* HEADER */}
      <div className="contact-header">
        <h5>Hubungi Kami</h5>
        <h2>Kami Siap Bekerja Sama dengan Anda</h2>
        <p>
          Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
          mengenai produk dan layanan CV Hasna.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT - INFO */}
        <div className="contact-info">
          <h3>Informasi Kontak</h3>

          <p><strong>Alamat:</strong> Jl. Contoh No.123, Indonesia</p>
          <p><strong>Email:</strong> cvhasna@email.com</p>
          <p><strong>Telepon:</strong> +62 812-3456-7890</p>

        </div>

        {/* RIGHT - FORM */}
        <form className="contact-form">

          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            required 
          />

          <input 
            type="email" 
            placeholder="Email" 
            required 
          />

          <textarea 
            placeholder="Pesan Anda" 
            rows="5" 
            required
          ></textarea>

          <button type="submit">Kirim Pesan</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;