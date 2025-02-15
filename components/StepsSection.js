import Image from 'next/image';
import styles from '../styles/StepsSection.module.css';

export default function StepsSection() {
  return (
    <section className={styles.scrollySection}>
      <div className={styles.scrollyInner}>
        
        {/* Left Column: large image */}
        <div className={styles.leftColumn}>
          <Image 
            src="/images/hero-girl.jpg"
            alt="Student"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: scrollable steps */}
        <div className={styles.rightColumn}>
          <div className={styles.stepsWrapper}>
            <div className={styles.step}>
              <h3>01 Free consultation</h3>
              <p>
                Attend a complimentary, 30-minute virtual consultation 
                with your parent or guardian to learn how IvyWay can best serve your needs.
              </p>
            </div>
            <div className={styles.step}>
              <h3>02 Get matched</h3>
              <p>
                Get matched with the best counselor for you and access the IvyWay portal,
                serving as your communication and resource hub.
              </p>
            </div>
            <div className={styles.step}>
              <h3>03 IvyWay Score</h3>
              <p>
                Gain insights into your college application readiness 
                through your personal IvyWay Score and robust resources.
              </p>
            </div>
            <div className={styles.step}>
              <h3>04 Collaborate</h3>
              <p>
                Collaborate with your counselor on your unique narrative 
                and application strategy, identify your safety, target, 
                reach, and high-reach schools.
              </p>
            </div>
            {/* ...Add more steps if needed... */}
          </div>
        </div>
      </div>
    </section>
  );
}
