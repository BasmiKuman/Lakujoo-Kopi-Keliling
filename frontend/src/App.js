import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <p>Loading Kopi Lakujoo...</p>
    </div>
  );
}

export default App;
