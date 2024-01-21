'use client';
import { useState } from 'react';
export default function Button() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      <h3>{num}</h3>
    </div>
  );
}
