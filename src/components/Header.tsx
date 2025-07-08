import React, { useState } from 'react';
const Header: React.FC = () => {
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <header>
      <h1 className='text-green-950'>Next.js 15 Micro Frontend Header Auto update {count}</h1>
      <button onClick={handleClick}>Increment +1</button>
    </header>
  );
};
export default Header;

