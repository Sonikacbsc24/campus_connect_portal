import { useEffect, useState } from 'react';
import AuthModule from './components/AuthModule';

export default function App() {
  const [activeMode, setActiveMode] = useState('login');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#login') {
        setActiveMode('login');
        scrolltoAuth();
      }
      else if (hash === '#register') {
        setActiveMode('register');
        scrolltoAuth();
      }
    };

    const scrolltoAuth = () => {
      const authElem = document.getElementById('auth-section');
      if (authElem) {
        authElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Check the current hash when the page loads
    handleHashChange();

    // Listen for Login/Register navigation
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div style={{ padding: '20px 0'}}>
      <AuthModule
        initialMode={activeMode}
        onModeChange={setActiveMode}
      />
    </div>
  );
}

