import Layout from '../components/Layout';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  return (
    <Layout>
      <div className={styles.faqContainer}>
        <h1>Frequently Asked Questions</h1>

        <div className={styles.faqItem}>
          <h3>1. How does IvyWay find its mentors?</h3>
          <p>
            All our mentors are from Ivy League or top-tier schools and undergo 
            a screening process based on academic achievement and mentorship experience.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>2. How can I sign up?</h3>
          <p>
            Use the “Join” button in the navigation. You’ll be asked if 
            you’re a mentor or a mentee. Follow the instructions accordingly!
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>3. What if I have more questions?</h3>
          <p>
            Feel free to reach out via our Contact page or by sending us an email.
          </p>
        </div>
      </div>
    </Layout>
  );
}
