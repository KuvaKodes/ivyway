// components/Footer.js
export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#f2f2f2',
        padding: '1rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <p>© {new Date().getFullYear()} IvyWay. All rights reserved.</p>
      </footer>
    );
  }
  