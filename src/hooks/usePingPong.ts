import { useState } from 'react';

function usePingPong(value: string): string {
  const [val, setVal] = useState(value);

  return val;
}

export default usePingPong;
