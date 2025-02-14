import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  // Example team data
  const team = Array.from({ length: 10 }, (_, i) => ({
    name: `Member ${i + 1}`,
    bio: 'Brief bio for this team member. Edit as needed.',
    photo: '/defaultProfile.png'
  }));

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1>About IvyWay</h1>
        <p>
          IvyWay is a platform dedicated to connecting Ivy League mentors 
          with ambitious students aiming for top universities.
        </p>

        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {team.map((member, idx) => (
            <div key={idx} className={styles.teamCard}>
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
