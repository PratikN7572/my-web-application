'use client';

import React, { useState } from 'react'

const DummyComponent = () => {
  const [first, setfirst] = useState(false);
  return (
    <>
     {first && <div>DummyComponent</div>}
      <button onClick={() => setfirst((prev) => !prev)}>Switch</button>
      </>
  )
}

export default DummyComponent