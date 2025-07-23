import React, { useState } from 'react';

interface HeaderProps {
  initialCounter?: number;
}

const Header: React.FC<HeaderProps> = ({initialCounter = 0}) => {
  const [count, setCount] = useState(initialCounter);

   const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <header>
      <h1 className='text-lime-300'>Next.js 15 Micro Frontend Header Auto update {count}</h1>
      <button onClick={handleClick}>Increment +1</button>
    </header>
  );
};
export default Header;

