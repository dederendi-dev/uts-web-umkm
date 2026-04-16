import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Contact.css'

function Contact() {
  const [contactData, setContactData] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('contact_messages')
      .insert([form])

    if (error) {
      console.error('Error kirim pesan:', error.message)
      alert('Pesan gagal dikirim')
    } else {
      alert('Pesan berhasil dikirim')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }

    setLoading(false)
  }

  if (!contactData) {
    return <section id="contact"><p>Loading...</p></section>
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <p><strong>Alamat:</strong> {contactData.address}</p>
        <p><strong>Telepon:</strong> {contactData.phone}</p>
        <p><strong>Email:</strong> {contactData.email}</p>
        <p><strong>Instagram:</strong> {contactData.instagram}</p>
        <p><strong>WhatsApp:</strong> {contactData.whatsapp}</p>
        <a
          href={contactData.google_maps_link}
          target="_blank"
          rel="noreferrer"
        >
          Lihat Lokasi
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subjek"
          value={form.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Pesan"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </section>
  )
}

export default Contact