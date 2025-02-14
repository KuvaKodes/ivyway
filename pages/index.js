import Layout from '../components/Layout';
import Image from 'next/image';
import AnimatedBox from '../components/AnimatedBox'; // Our "complicated" element
import styles from '../styles/Home.module.css';

export default function Home() {
  // 1) Define an array of logos (paths in /public folder or external URLs)
  const logos = [
    '/colleges/MichiganLogo.png',
    '/colleges/HarvardLogo.png',
    '/colleges/GeorgetownLogo.png',
    '/colleges/StanfordLogo.png',
    '/colleges/DartmouthLogo.png',
    '/colleges/BerkeleyLogo.png'
    // Add as many as you want
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* 2) Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/videos/test2HeroVideo.mp4" type="video/mp4" />
          {/* Fallback text or other sources as needed */}
        </video>
        <div className={styles.heroText}>
          <h1>IvyWay is the only way.</h1>
          {/* <p>
            We connect students with mentors from top schools across the nation 
            to guide them through high school and the college application process.
          </p> */}
          <div className={styles.heroButtons}>
            <a href="/join" className={styles.ctaBtn}>Sign Up</a>
            <a href="/about" className={styles.secondaryBtn}>Learn More</a>
          </div>
        </div>
      </section>


      {/* New section for the big bold text (originally the <p> in heroText) */}
      <section className={styles.introSection}>
        <p className={styles.bigBoldText}>
          We connect students with mentors from top schools across the nation 
          to guide them through high school and the college application process.
        </p>
      </section>


      {/* Services Section (Modified) */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <img
              src="/icons/iconMentorship.png"
              alt="Mentorship icon"
              className={styles.cardIcon}
            />
            <h3>Mentorship</h3>
            <p>Internships, research, resume building, and more.</p>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <img
              src="/icons/iconTutoring.png"
              alt="Tutoring icon"
              className={styles.cardIcon}
            />
            <h3>Tutoring</h3>
            <p>Help with challenging coursework from top-tier mentors.</p>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <img
              src="/icons/iconEssay.png"
              alt="Essay writing icon"
              className={styles.cardIcon}
            />
            <h3>Essay Writing</h3>
            <p>Support for the most critical part of college applications.</p>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <img
              src="/icons/iconSAT.png"
              alt="SAT/ACT icon"
              className={styles.cardIcon}
            />
            <h3>SAT/ACT Prep</h3>
            <p>Guidance to boost your standardized test scores.</p>
          </div>
        </div>
      </section>

      {/* Logo Band Section */}
      <section className={styles.logoBand}>

        {/* 2) Scrolling Container */}
        <div className={styles.scrollingContainer}>
          <div className={styles.logoTrack}>
            {/* 3) Render the logos TWICE for a seamless loop */}
            {logos.map((logoSrc, idx) => (
              <div key={idx} className={styles.logoItem}>
                <Image
                  src={logoSrc}
                  alt={`Logo ${idx + 1}`}
                  width={225}   // adjust as needed
                  height={90}   // adjust as needed
                />
              </div>
            ))}
            {logos.map((logoSrc, idx) => (
              <div key={`dup-${idx}`} className={styles.logoItem}>
                <Image
                  src={logoSrc}
                  alt={`Logo copy ${idx + 1}`}
                  width = {225}
                  height = {90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Steps / Process Section */}
      <section className={styles.stepsSection}>
        <h2>Mentoring made easy.</h2>
        <div className={styles.stepsGrid}>
          <div>
            <h3>Join</h3>
            <p>Become part of the IvyWay network.</p>
          </div>
          <div>
            <h3>Swipe</h3>
            <p>Use our advanced matching algorithm to find mentors.</p>
          </div>
          <div>
            <h3>Meet</h3>
            <p>Schedule your first session and outline your goals.</p>
          </div>
          <div>
            <h3>Succeed</h3>
            <p>Leverage mentorship and resources to achieve your dreams.</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
