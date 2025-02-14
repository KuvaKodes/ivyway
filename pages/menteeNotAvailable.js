import Layout from '../components/Layout';
import Link from 'next/link';

export default function MenteeNotAvailable() {
  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>We aren’t currently accepting mentees.</h1>
        <p>Please check back later or contact us for more information.</p>
        <Link href="/"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '4px'
          }}>
            Return to Homepage
        </Link>
      </div>
    </Layout>
  );
}
