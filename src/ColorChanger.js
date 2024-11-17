import React, { useState } from 'react';

function ColorChanger() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, padding: '50px', textAlign: 'center' }}>
      <button onClick={() => setBgColor('red')}>Red</button>
      <button onClick={() => setBgColor('green')}>Green</button>
      <button onClick={() => setBgColor('blue')}>Blue</button>
    </div>
  );
}

export default ColorChanger;