import React from 'react';

type Props = { name: string; times?: number };

const Greets: React.FC<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(times)].map((_) => (
        <p>
          Hello, {name}! {children}
        </p>
      ))}
    </>
  );
};

export default Greets;
