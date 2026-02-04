import { useState } from 'react';

const B = (props) => {
  const { name, message } = props;
  return (
    <div>{`${name || 'b'} say ${message || ''}`}</div>
  );
};

export default B;