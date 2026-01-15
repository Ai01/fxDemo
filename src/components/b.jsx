import { useState } from 'react';

const B = (props) => {
  const { name } = props;
  return (
    <div>{name || 'b'}</div>
  );
};

export default B;