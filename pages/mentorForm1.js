import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/MentorForm.module.css';

export default function MentorForm1() {
  const router = useRouter();
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    university: '',
    majorGraduation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Quick validation
    for (const key in form) {
      if (!form[key]) {
        alert('All fields are required!');
        return;
      }
    }
    // Store data in sessionStorage (temp) to pass to page 2
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mentorForm1', JSON.stringify(form));
    }
    router.push('/mentorForm2');
  };

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Mentor Application (Page 1)</h2>
        <form onSubmit={handleNext} className={styles.mentorForm}>
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <label>Email (University Address) *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>University *</label>
          <input
            type="text"
            name="university"
            value={form.university}
            onChange={handleChange}
            required
          />

          <label>Major & Expected Graduation Year *</label>
          <input
            type="text"
            name="majorGraduation"
            value={form.majorGraduation}
            onChange={handleChange}
            required
          />

          <button type="submit">Next</button>
        </form>
      </div>
    </Layout>
  );
}
