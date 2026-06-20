import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Contact.css'

function Contact() {
  const [contactData, setContactData] = useState(null)

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = async () => {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetch contact:', error.message)
      return
    }

    setContactData(data)
  }

  if (!contactData) {
    return (
      <section id="contact" className="contact">
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-top">
        <div className="contact-intro">
          <div className="contact-badge">
            ☕ Contact & Partnership Center
          </div>

          <h2>Hubungi Tim Javacafe</h2>

          <p>
            Kami siap membantu Anda mendapatkan informasi produk,
            peluang kemitraan, serta konsultasi bisnis kopi modern
            bersama Javacafe. Hubungi tim kami kapan saja.
          </p>

          <div className="contact-stats">
            <div className="contact-stat">
              <strong>50+</strong>
              <span>Mitra Aktif</span>
            </div>

            <div className="contact-stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div className="contact-stat">
              <strong>100%</strong>
              <span>Konsultasi Gratis</span>
            </div>
          </div>
        </div>

        <div className="contact-box small-box">
          <h3>📧 Email Kami</h3>
          <p>haznaberkahindonesia@gmail.com</p>
        </div>

        <div className="contact-box small-box">
          <h3>📱 Telepon Kami</h3>
          <p>0858-7833-7725</p>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-box address-box">
          <h3>📍 Alamat Kami</h3>
          <p>
            Jl. Raya Pengalusan No.6, Kompas, Pengalusan,
            Kec. Mrebet, Kabupaten Purbalingga,
            Jawa Tengah 53352
          </p>
        </div>

        <div className="contact-box map-box">
          <h3>🗺️ Lokasi Javacafe</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992412.9427068017!2d107.76799829775777!3d-7.11508323655934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff765a68b4d61%3A0x9b98714874f8fee4!2sCV.%20Hazna%20Berkah%20Indonesia!5e1!3m2!1sid!2sid!4v1776670752558!5m2!1sid!2sid"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '20px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact