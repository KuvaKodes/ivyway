import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For an MVP, just log or do a fetch to an API route
    console.log('Contact form submitted:', form);
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
