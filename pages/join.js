import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/Join.module.css';

export default function Join() {
  const router = useRouter();

  const handleSelection = (type) => {
    if (type === 'mentee') {
      router.push('/menteeNotAvailable');
    } else {
      router.push('/mentorForm1');
    }
  };

  return (
    <Layout>
      <div className={styles.joinContainer}>
        <h1>Join IvyWay</h1>
        <p>Are you a mentor or a mentee?</p>
        <div className={styles.buttonGroup}>
          <button onClick={() => handleSelection('mentor')}>
            Mentor
          </button>
          <button onClick={() => handleSelection('mentee')}>
            Mentee
          </button>
        </div>
      </div>
    </Layout>
  );
}
