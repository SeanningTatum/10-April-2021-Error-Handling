import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Center(props: Props): JSX.Element {
  return (
    <div className="h-screen w-screen grid place-items-center grid-cols-1 gap-1 bg-gray-100">
      {props.children}
    </div>
  );
}

export default Center;
