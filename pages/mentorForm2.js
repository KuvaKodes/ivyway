import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/MentorForm.module.css';

export default function MentorForm2() {
  const router = useRouter();
  const [form1Data, setForm1Data] = useState(null);
  const [form2, setForm2] = useState({
    testScores: '',
    prevMentor: 'No',
    guidanceAreas: [],
    availability: '',
    questions: ''
  });

  useEffect(() => {
    // Retrieve page 1 data
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('mentorForm1');
      if (storedData) {
        setForm1Data(JSON.parse(storedData));
      } else {
        // If no data, redirect back
        router.push('/mentorForm1');
      }
    }
  }, [router]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm2((prev) => {
      if (checked) {
        return { ...prev, guidanceAreas: [...prev.guidanceAreas, value] };
      }
      return {
        ...prev,
        guidanceAreas: prev.guidanceAreas.filter((item) => item !== value)
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm2((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate
    if (
      !form2.testScores ||
      !form2.availability ||
      form2.guidanceAreas.length === 0 ||
      !form2.questions
    ) {
      alert('All fields are required!');
      return;
    }

    // Merge page1 + page2
    const combinedData = { ...form1Data, ...form2 };

    try {
      const res = await fetch('/api/submitMentorForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(combinedData)
      });
      if (res.ok) {
        alert('Application submitted successfully!');
        // Clear session
        sessionStorage.removeItem('mentorForm1');
        router.push('/');
      } else {
        alert('Error submitting your application.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error submitting your application.');
    }
  };

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Mentor Application (Page 2)</h2>
        <form onSubmit={handleSubmit} className={styles.mentorForm}>
          <label>College GPA, SAT/ACT *</label>
          <input
            type="text"
            name="testScores"
            value={form2.testScores}
            onChange={handleChange}
            required
          />

          <label>Have you previously mentored students? *</label>
          <div>
            <label>
              <input
                type="radio"
                name="prevMentor"
                value="Yes"
                checked={form2.prevMentor === 'Yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="prevMentor"
                value="No"
                checked={form2.prevMentor === 'No'}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>

          <label>What areas of guidance are you interested in providing? *</label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                value="Tutoring"
                onChange={handleCheckboxChange}
              />
              Tutoring
            </label>
            <label>
              <input
                type="checkbox"
                value="Essay Writing"
                onChange={handleCheckboxChange}
              />
              Essay Writing
            </label>
            <label>
              <input
                type="checkbox"
                value="Mentorship"
                onChange={handleCheckboxChange}
              />
              Mentorship
            </label>
            <label>
              <input
                type="checkbox"
                value="SAT/ACT Prep"
                onChange={handleCheckboxChange}
              />
              SAT/ACT Prep
            </label>
          </div>

          <label>Availability *</label>
          <div>
            <label>
              <input
                type="radio"
                name="availability"
                value="1-3 hrs/wk"
                checked={form2.availability === '1-3 hrs/wk'}
                onChange={handleChange}
                required
              />
              1-3 hrs/wk
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="availability"
                value="4-6 hrs/wk"
                checked={form2.availability === '4-6 hrs/wk'}
                onChange={handleChange}
                required
              />
              4-6 hrs/wk
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="availability"
                value="6-10 hrs/wk"
                checked={form2.availability === '6-10 hrs/wk'}
                onChange={handleChange}
                required
              />
              6-10 hrs/wk
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="availability"
                value="10+ hrs/wk"
                checked={form2.availability === '10+ hrs/wk'}
                onChange={handleChange}
                required
              />
              10+ hrs/wk
            </label>
          </div>

          <label>Any questions/comments/concerns? *</label>
          <textarea
            name="questions"
            value={form2.questions}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </Layout>
  );
}
