import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('hello CGU!!');

  const handleClick = () => {
    setText(prev => prev + '被點了');
  };

  return (
    <div onClick={handleClick} style={{ color: 'red', fontSize: '3rem', textAlign: 'center', marginTop: '100px', cursor: 'pointer' }}>
      {text}
    </div>
  );
}

export default App;